import { TimeSeriesStore, TimeSeriesSyncedStore } from '@awarns/persistence/stores/timeseries';
import { Trace } from '../entities';
import { localTracesStore } from './store';

export type TracesStore = TimeSeriesStore<Trace>;
export const syncedTracesStore = new TimeSeriesSyncedStore('TracesStore', localTracesStore);
