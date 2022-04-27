import { Change, Record } from '../../../providers';
import { deserialize, serialize } from 'nativescript-task-dispatcher/internal/utils/serialization';
import { AbstractTimeSeriesStore, TimeSeriesDoc } from './common';

const DOC_TYPE = 'record';

class RecordsStoreDB extends AbstractTimeSeriesStore<Record> {
  constructor() {
    super(DOC_TYPE, docFrom, recordFrom);
  }
}

interface RecordDoc extends TimeSeriesDoc {
  timestamp: number;
  type: string;
  change: Change;
  serializedProperties: string;
}

function docFrom(record: Record): RecordDoc {
  const { timestamp, type, change, ...extraProperties } = record;
  const serializedProperties = serialize(extraProperties);

  return {
    timestamp: timestamp.getTime(),
    type,
    change,
    serializedProperties,
  };
}

function recordFrom(doc: RecordDoc): Record {
  const { timestamp, type, change, serializedProperties } = doc;
  const dbRecord = {
    ...deserialize(serializedProperties),
    timestamp: new Date(timestamp),
    type,
    change,
  };

  return dbRecord as Record;
}

export const localRecordsStore = new RecordsStoreDB();
