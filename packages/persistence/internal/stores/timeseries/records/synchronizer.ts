import { TimeSeriesSyncedStore } from '../synchronizer';
import { Record } from '@awarns/core/entities';
import { localRecordsStore, LocalRecordsStore, RecordsStore, ResultsOder } from './store';
import { Observable } from 'rxjs';
import { FetchCondition } from './filters';

export class SyncedRecordsStore extends TimeSeriesSyncedStore<Record, LocalRecordsStore> implements RecordsStore {
  constructor() {
    super('RecordStore', localRecordsStore);
  }

  listLast(recordType: string, conditions: Array<FetchCondition> = []): Observable<Record> {
    return this.localStore.listLast(recordType, conditions);
  }

  listBy(
    recordType: string,
    order: ResultsOder = 'desc',
    conditions: Array<FetchCondition> = []
  ): Observable<Array<Record>> {
    return this.localStore.listBy(recordType, order, conditions);
  }
}
