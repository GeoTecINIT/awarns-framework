import { TimeSeriesSyncedStore } from '@awarns/persistence/stores/timeseries';
import { localTracesStore, LocalTracesStore, TracesStore } from './store';
import { Trace } from '../entities';

export class SyncedTracesStore extends TimeSeriesSyncedStore<Trace, LocalTracesStore> implements TracesStore {
  constructor() {
    super('TracesStore', localTracesStore);
  }
}
