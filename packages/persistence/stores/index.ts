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

import { FetchCondition as FC, ResultsOrder as RO, RecordsStore as RS, syncedRecordsStore } from '../internal/stores';
export type FetchCondition = FC;
export type ResultsOrder = RO;
export type RecordsStore = RS;
export const recordsStore: RecordsStore = syncedRecordsStore;
