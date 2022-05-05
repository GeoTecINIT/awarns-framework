import { TimeSeriesStore as TSS, TimeSeriesEntity as TSE, TimeSeriesDoc as TSD } from '../internal/stores';
export type TimeSeriesDoc = TSD;
export type TimeSeriesEntity = TSE;
export type TimeSeriesStore<T extends TimeSeriesEntity> = TSS<T>;
export { AbstractTimeSeriesStore, TimeSeriesSyncedStore } from '../internal/stores';
