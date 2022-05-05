import {
  clearAwarnsDB,
  AwarnsStore,
  Query as Q,
  QueryWhereItem as QWI,
  QueryLogicalOperator,
} from '../internal/stores';
export type Query = Q;
export type QueryWhereItem = QWI;
export { clearAwarnsDB, AwarnsStore, QueryLogicalOperator };

import { RecordsStore as RS, syncedRecordsStore } from '../internal/stores';
export type RecordsStore = RS;
export const recordsStore: RecordsStore = syncedRecordsStore;
