import { FetchCondition as FC } from './filters';
import { RecordsStore as RS } from './store';
import { SyncedRecordsStore } from './synchronizer';

export type FetchCondition = FC;
export type RecordsStore = RS;
export const syncedRecordsStore = new SyncedRecordsStore();
