import { pluginDB, Query as Q, QueryWhereItem as QWI, QueryLogicalOperator } from './db';

export type Query = Q;
export type QueryWhereItem = QWI;
export { QueryLogicalOperator };

export async function clearAwarnsDB(): Promise<void> {
  await pluginDB.deleteAll();
}

export * from './store';
export * from './timeseries';
