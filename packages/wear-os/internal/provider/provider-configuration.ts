import { CollectionConfiguration, NativeSensorDelay as WatchSensorDelay } from 'nativescript-wearos-sensors/collection';

export interface ProviderConfiguration {
  sensorDelay: WatchSensorDelay | number;
  batchSize: number;
}

export { WatchSensorDelay };

export function toCollectionConfiguration(config: ProviderConfiguration): CollectionConfiguration {
  return {
    sensorInterval: config.sensorDelay,
    batchSize: config.batchSize,
  };
}

export const defaultConfig: ProviderConfiguration = {
  sensorDelay: WatchSensorDelay.NORMAL,
  batchSize: 50,
};
