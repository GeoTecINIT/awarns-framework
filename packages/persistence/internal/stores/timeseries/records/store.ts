import { Change, Record } from '@awarns/core/entities';
import { deserialize, serialize } from '@awarns/core/utils/serialization';
import { AbstractTimeSeriesStore, TimeSeriesDoc } from '../common';

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

export const localRecordsStore = new RecordsStoreDB();
