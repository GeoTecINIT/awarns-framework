import { Change, Record } from '@awarns/core/entities';
import { deserialize, serialize } from '@awarns/core/utils/serialization';
import { AbstractTimeSeriesStore, LocalTimeSeriesStore, TimeSeriesDoc, TimeSeriesStore } from '../common';
import { distinctUntilChanged, distinctUntilKeyChanged, firstValueFrom, Observable, switchMap } from 'rxjs';
import { QueryMeta } from '@triniwiz/nativescript-couchbase';
import { FetchCondition, getPropertyValue, meetsConditions } from './filters';
import { Query } from '../../db';

export type ResultsOrder = 'asc' | 'desc';

export interface RecordsStore extends TimeSeriesStore<Record> {
  listLast(recordType: string, conditions?: Array<FetchCondition>): Observable<Record>;
  listLastGroupedBy(
    recordType: string,
    groupByProperty: string,
    conditions?: Array<FetchCondition>
  ): Observable<Array<Record>>;
  listBy(recordType: string, order?: ResultsOrder, conditions?: Array<FetchCondition>): Observable<Array<Record>>;
  deleteBy(recordType: string): Promise<void>;
}

export interface LocalRecordsStore extends LocalTimeSeriesStore<Record> {
  listLast(recordType: string, conditions?: Array<FetchCondition>): Observable<Record>;
  listLastGroupedBy(
    recordType: string,
    groupByProperty: string,
    conditions?: Array<FetchCondition>
  ): Observable<Array<Record>>;
  listBy(recordType: string, order?: ResultsOrder, conditions?: Array<FetchCondition>): Observable<Array<Record>>;
  deleteBy(recordType: string): Promise<void>;
}

const DOC_TYPE = 'record';

class RecordsStoreDB extends AbstractTimeSeriesStore<Record> implements RecordsStore, LocalRecordsStore {
  constructor() {
    super(DOC_TYPE, docFrom, recordFrom);
  }

  listLast(recordType: string, conditions: Array<FetchCondition> = []): Observable<Record> {
    return new Observable<Record>((subscriber) => {
      const pushLatest = () => {
        const query = recordTypeQueryFilter(recordType, 'desc');
        if (conditions.length === 0) query.limit = 1;

        this.store
          .fetch(query)
          .then((results) => {
            if (results.length === 0) {
              subscriber.next();
              return;
            }
            if (conditions.length === 0) {
              subscriber.next(this.removeDBEntityProps(results[0]));
              return;
            }
            findFirstMeetingConditions(results, conditions)
              .then((match) => subscriber.next(match ? this.removeDBEntityProps(match) : undefined))
              .catch((err) => subscriber.error(err));
          })
          .catch((err) => subscriber.error(err));
      };
      pushLatest();

      const subscription = this.store.changes.subscribe(() => {
        pushLatest();
      });

      return () => {
        subscription.unsubscribe();
      };
    }).pipe(
      distinctUntilChanged((prev, curr) => {
        if (prev === curr) return true;
        if ((!prev && curr) || (prev && !curr)) return false;
        return prev.id === curr.id;
      })
    );
  }

  listLastGroupedBy(
    recordType: string,
    groupByProperty: string,
    conditions: Array<FetchCondition> = []
  ): Observable<Array<Record>> {
    return this.listBy(recordType, 'desc', conditions).pipe(
      switchMap((records) =>
        findAllUniquePropertyValues(records, groupByProperty).then((uniqueProperties) => [records, uniqueProperties])
      ),
      switchMap(([records, uniquePropertyValues]) =>
        Promise.all(
          uniquePropertyValues.map((propertyValue) =>
            findFirstMeetingConditions(records as Array<Record>, [
              {
                property: groupByProperty,
                comparison: '=',
                value: propertyValue,
              },
            ])
          )
        )
      )
    );
  }

  listBy(
    recordType: string,
    order: ResultsOrder = 'desc',
    conditions: Array<FetchCondition> = []
  ): Observable<Array<Record>> {
    return new Observable<Array<Record>>((subscriber) => {
      const pushMatching = () => {
        const query = recordTypeQueryFilter(recordType, order);

        this.store
          .fetch(query)
          .then((results) => {
            if (results.length === 0) {
              subscriber.next([]);
              return;
            }
            findAllMeetingConditions(results, conditions)
              .then((matches) => subscriber.next(this.removeDBEntityPropsFromAll(matches)))
              .catch((err) => subscriber.error(err));
          })
          .catch((err) => subscriber.error(err));
      };
      pushMatching();

      const subscription = this.store.changes.subscribe(() => {
        pushMatching();
      });

      return () => {
        subscription.unsubscribe();
      };
    }).pipe(distinctUntilKeyChanged('length'));
  }

  async deleteBy(recordType: string): Promise<void> {
    const records = await firstValueFrom(this.listBy(recordType));
    records.forEach((record) => this.store.delete(record.id));
  }
}

interface RecordDoc extends TimeSeriesDoc {
  timestamp: number;
  type: string;
  change: Change;
  serializedProperties: string;
}

function docFrom(record: Record): RecordDoc {
  const { id, timestamp, type, change, ...extraProperties } = record;
  const serializedProperties = serialize(extraProperties);

  return {
    id,
    timestamp: timestamp.getTime(),
    type,
    change,
    serializedProperties,
  };
}

function recordFrom(doc: RecordDoc): Record {
  const { id, timestamp, type, change, serializedProperties } = doc;
  const dbRecord = {
    ...deserialize(serializedProperties),
    id,
    timestamp: new Date(timestamp),
    type,
    change,
  };

  return dbRecord as Record;
}

function recordTypeQueryFilter(recordType: string, order: ResultsOrder): Query {
  return {
    select: [QueryMeta.ALL, QueryMeta.ID],
    where: [
      {
        property: 'type',
        comparison: 'equalTo',
        value: recordType,
      },
    ],
    order: [{ property: 'timestamp', direction: order }],
  };
}

async function findFirstMeetingConditions<T extends Record>(
  records: Array<T>,
  conditions: Array<FetchCondition>
): Promise<T> {
  const chunkSize = 10;
  let start = 0;
  let end = 10;
  // Avoid long-running operations by splitting records array in chunks
  while (start < records.length) {
    const matches = await findMatches(records.slice(start, end), conditions);
    if (matches.length > 0) return matches[0];
    start = end;
    end = start + chunkSize;
  }
  return undefined;
}

async function findAllMeetingConditions<T extends Record>(
  records: Array<T>,
  conditions: Array<FetchCondition>
): Promise<Array<T>> {
  const chunkSize = 10;
  let start = 0;
  let end = 10;
  // Avoid long-running operations by splitting records array in chunks
  const allMatches = [];
  while (start < records.length) {
    const matches = await findMatches(records.slice(start, end), conditions);
    allMatches.push(...matches);
    start = end;
    end = start + chunkSize;
  }
  return allMatches;
}

function findMatches<T extends Record>(records: Array<T>, conditions: Array<FetchCondition>): Promise<Array<T>> {
  return new Promise<Array<T>>((resolve) => {
    setTimeout(() => {
      resolve(records.reduce((prev, curr) => (meetsConditions(curr, conditions) ? [...prev, curr] : prev), []));
    });
  });
}

async function findAllUniquePropertyValues(records: Array<Record>, propertyPath: string): Promise<Array<unknown>> {
  const chunkSize = 10;
  let start = 0;
  let end = 10;
  // Avoid long-running operations by splitting records array in chunks
  const allValues = new Set<unknown>();
  while (start < records.length) {
    const matches = await findPropertyValues(records.slice(start, end), propertyPath);
    for (const match of matches) {
      allValues.add(match);
    }
    start = end;
    end = start + chunkSize;
  }
  return [...allValues];
}

function findPropertyValues(records: Array<Record>, propertyPath: string): Promise<Array<unknown>> {
  return new Promise<Array<unknown>>((resolve) => {
    setTimeout(() => {
      resolve(records.map((record) => getPropertyValue(record, propertyPath)).filter((value) => value !== undefined));
    });
  });
}

export const localRecordsStore = new RecordsStoreDB();
