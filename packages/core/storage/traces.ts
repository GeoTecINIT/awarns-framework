import { Trace as T, TraceType, TraceResult } from '../internal/tasks/tracing';
export type Trace = T;
export { TraceType, TraceResult };

import { syncedTracesStore, TracesStore as TS } from '../internal/persistence/stores/timeseries';
export type TracesStore = TS;
export const tracesStore: TracesStore = syncedTracesStore;
