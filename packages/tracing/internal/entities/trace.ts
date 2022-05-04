import { TraceType } from './trace-type';
import { TraceResult } from './trace-result';

export interface Trace {
  timestamp: Date;
  chainId: string;
  type: TraceType;
  name: string;
  result: TraceResult;
  content: { [key: string]: unknown };
}
