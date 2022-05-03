import { Record } from '@awarns/core/entities';
import { localRecordsStore } from './store';
import { TimeSeriesStore } from '../common';
import { TimeSeriesSyncedStore } from '../synchronizer';

export type RecordsStore = TimeSeriesStore<Record>;
export const syncedRecordsStore = new TimeSeriesSyncedStore('RecordsStore', localRecordsStore);
