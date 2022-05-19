import {
  TimeSeriesStore as TSS,
  LocalTimeSeriesStore as LTSS,
  TimeSeriesEntity as TSE,
  TimeSeriesDoc as TSD,
} from '../internal/stores';
export type TimeSeriesDoc = TSD;
export type TimeSeriesEntity = TSE;
export type TimeSeriesStore<T extends TimeSeriesEntity> = TSS<T>;
export type LocalTimeSeriesStore<T extends TimeSeriesEntity> = LTSS<T>;
export { AbstractTimeSeriesStore, TimeSeriesSyncedStore } from '../internal/stores';
