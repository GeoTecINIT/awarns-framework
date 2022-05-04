import { syncedTracesStore, TracesStore as TS } from '../internal/stores';
export type TracesStore = TS;
export const tracesStore: TracesStore = syncedTracesStore;
