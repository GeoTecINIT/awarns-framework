import { TimeSeriesSyncedStore } from '../synchronizer';
import { Record } from '@awarns/core/entities';
import { localRecordsStore, LocalRecordsStore, RecordsStore } from './store';
import { Observable } from 'rxjs';
import { FetchCondition } from './filters';

export class SyncedRecordsStore extends TimeSeriesSyncedStore<Record, LocalRecordsStore> implements RecordsStore {
  constructor() {
    super('RecordStore', localRecordsStore);
  }

  listLast(recordType: string, conditions: Array<FetchCondition> = []): Observable<Record> {
    return this.localStore.listLast(recordType, conditions);
  }
}
