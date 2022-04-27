import { pluginDB, Query as Q, QueryWhereItem as QWI, QueryLogicalOperator } from '../internal/persistence/stores/db';

export type Query = Q;
export type QueryWhereItem = QWI;
export { QueryLogicalOperator };

export async function clearEMAIDB(): Promise<void> {
  await pluginDB.deleteAll();
}
