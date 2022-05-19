import { FetchCondition as FC } from './filters';
import { ResultsOrder as RO, RecordsStore as RS } from './store';
import { SyncedRecordsStore } from './synchronizer';

export type FetchCondition = FC;
export type ResultsOrder = RO;
export type RecordsStore = RS;
export const syncedRecordsStore = new SyncedRecordsStore();
