import { TimeSeriesSyncedStore } from './synchronizer';
import { TimeSeriesStore } from './common';

import { Record } from '../../../providers';
import { localRecordsStore } from './records';

import { Trace } from '../../../tasks/tracing';
import { localTracesStore } from './traces';

export type RecordsStore = TimeSeriesStore<Record>;

export const syncedRecordsStore = new TimeSeriesSyncedStore('RecordsStore', localRecordsStore);

export type TracesStore = TimeSeriesStore<Trace>;

export const syncedTracesStore = new TimeSeriesSyncedStore('TracesStore', localTracesStore);
