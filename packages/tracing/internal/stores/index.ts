import { TracesStore as TS } from './store';
import { SyncedTracesStore } from './syncronizer';

export type TracesStore = TS;
export const syncedTracesStore = new SyncedTracesStore();
