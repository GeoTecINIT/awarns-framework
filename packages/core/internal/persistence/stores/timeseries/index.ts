import { TimeSeriesSyncedStore } from './synchronizer';
import { TimeSeriesEntity as TSE, TimeSeriesStore as TSS, TimeSeriesDoc as TSD } from './common';
export type TimeSeriesEntity = TSE;
export type TimeSeriesStore<T extends TimeSeriesEntity> = TSS<T>;
export type TimeSeriesDoc = TSD;

import { Record } from '../../../providers';
import { localRecordsStore } from './records';

export type RecordsStore = TimeSeriesStore<Record>;
export const syncedRecordsStore = new TimeSeriesSyncedStore('RecordsStore', localRecordsStore);

export { TimeSeriesSyncedStore };
export { AbstractTimeSeriesStore } from './common';
