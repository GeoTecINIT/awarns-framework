import { Trace, TraceResult, TraceType } from '../entities';
import { deserialize, serialize } from '@awarns/core/utils/serialization';
import {
  AbstractTimeSeriesStore,
  LocalTimeSeriesStore,
  TimeSeriesDoc,
  TimeSeriesStore,
} from '@awarns/persistence/stores/timeseries';

const DOC_TYPE = 'trace';

export type TracesStore = TimeSeriesStore<Trace>;
export type LocalTracesStore = LocalTimeSeriesStore<Trace>;

class TracesStoreDB extends AbstractTimeSeriesStore<Trace> implements TracesStore, LocalTracesStore {
  constructor() {
    super(DOC_TYPE, docFrom, traceFrom);
  }
}

interface TraceDoc extends TimeSeriesDoc {
  timestamp: number;
  chainId: string;
  type: TraceType;
  name: string;
  result: TraceResult;
  stringifiedContent: string;
}

function docFrom(trace: Trace): TraceDoc {
  const { id, timestamp, chainId, type, name, result, content } = trace;
  const stringifiedContent = serialize(content);
  return {
    id,
    timestamp: timestamp.getTime(),
    chainId,
    type,
    name,
    result,
    stringifiedContent,
  };
}

function traceFrom(doc: TraceDoc): Trace {
  const { id, timestamp, chainId, type, name, result, stringifiedContent } = doc;
  const content = deserialize(stringifiedContent);
  return {
    id,
    timestamp: new Date(timestamp),
    chainId,
    type,
    name,
    result,
    content,
  };
}

export const localTracesStore = new TracesStoreDB();
