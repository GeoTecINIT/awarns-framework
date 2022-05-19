import { TraceType } from './trace-type';
import { TraceResult } from './trace-result';
import { uuid } from '@awarns/core/utils/uuid';

export class Trace {
  constructor(
    public chainId: string,
    public type: TraceType,
    public name: string,
    public result: TraceResult,
    public content: { [key: string]: unknown },
    public timestamp: Date = new Date(),
    public id: string = uuid()
  ) {}
}
