import { Change, Record } from '@awarns/core/entities';
import { deserialize, serialize } from '@awarns/core/utils/serialization';
import {
  AbstractTimeSeriesStore,
  DBEntityProps,
  LocalTimeSeriesStore,
  TimeSeriesDoc,
  TimeSeriesStore,
} from '../common';
import { distinctUntilKeyChanged, Observable } from 'rxjs';
import { QueryMeta } from '@triniwiz/nativescript-couchbase';
import { FetchCondition, meetsConditions } from './filters';
import { Query } from '../../db';

export interface RecordsStore extends TimeSeriesStore<Record> {
  listLast(recordType: string, conditions?: Array<FetchCondition>): Observable<Record>;
}

export interface LocalRecordsStore extends LocalTimeSeriesStore<Record> {
  listLast(recordType: string, conditions?: Array<FetchCondition>): Observable<Record>;
}

const DOC_TYPE = 'record';

class RecordsStoreDB extends AbstractTimeSeriesStore<Record> implements RecordsStore, LocalRecordsStore {
  constructor() {
    super(DOC_TYPE, docFrom, recordFrom);
  }

  listLast(recordType: string, conditions: Array<FetchCondition> = []): Observable<Record> {
    return new Observable<Record>((subscriber) => {
      const pushLatest = () => {
        const query: Query = {
          select: [QueryMeta.ALL, QueryMeta.ID],
          where: [
            {
              property: 'type',
              comparison: 'equalTo',
              value: recordType,
            },
          ],
          order: [{ property: 'timestamp', direction: 'desc' }],
        };
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
    }).pipe(distinctUntilKeyChanged('id'));
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

type RecordEntity = Record & DBEntityProps;

async function findFirstMeetingConditions(
  records: Array<RecordEntity>,
  conditions: Array<FetchCondition>
): Promise<RecordEntity> {
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

function findMatches(records: Array<RecordEntity>, conditions: Array<FetchCondition>): Promise<Array<RecordEntity>> {
  return new Promise<Array<RecordEntity>>((resolve) => {
    setTimeout(() => {
      resolve(records.reduce((prev, curr) => (meetsConditions(curr, conditions) ? [...prev, curr] : prev), []));
    });
  });
}

export const localRecordsStore = new RecordsStoreDB();
