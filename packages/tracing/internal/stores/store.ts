import { Trace, TraceResult, TraceType } from '../entities';
import { deserialize, serialize } from '@awarns/core/utils/serialization';
import { AbstractTimeSeriesStore, TimeSeriesDoc } from '@awarns/core/internal/persistence/stores/timeseries';

const DOC_TYPE = 'trace';

class TracesStoreDB extends AbstractTimeSeriesStore<Trace> {
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
  const { timestamp, chainId, type, name, result, content } = trace;
  const stringifiedContent = serialize(content);
  return {
    timestamp: timestamp.getTime(),
    chainId,
    type,
    name,
    result,
    stringifiedContent,
  };
}

function traceFrom(doc: TraceDoc): Trace {
  const { timestamp, chainId, type, name, result, stringifiedContent } = doc;
  const content = deserialize(stringifiedContent);
  return {
    timestamp: new Date(timestamp),
    chainId,
    type,
    name,
    result,
    content,
  };
}

export const localTracesStore = new TracesStoreDB();
