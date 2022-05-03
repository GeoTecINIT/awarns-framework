import { TimeSeriesSyncedStore } from './synchronizer';
import { TimeSeriesEntity as TSE, TimeSeriesStore as TSS, TimeSeriesDoc as TSD } from './common';
export type TimeSeriesEntity = TSE;
export type TimeSeriesStore<T extends TimeSeriesEntity> = TSS<T>;
export type TimeSeriesDoc = TSD;

export { TimeSeriesSyncedStore };
export { AbstractTimeSeriesStore } from './common';

export * from './records';
