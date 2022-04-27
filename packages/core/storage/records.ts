import { RecordsStore, syncedRecordsStore } from '../internal/persistence/stores/timeseries';

export { RecordsStore };
export const recordsStore: RecordsStore = syncedRecordsStore;
