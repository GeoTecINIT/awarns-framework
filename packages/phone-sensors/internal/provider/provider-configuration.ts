import BaseSensor = es.uji.geotec.backgroundsensors.sensor.BaseSensor;
import CollectionConfiguration = es.uji.geotec.backgroundsensors.collection.CollectionConfiguration;

export interface ProviderConfiguration {
  sensorDelay: SensorDelay | number;
  batchSize: number;
}

export enum SensorDelay {
  UI,
  NORMAL,
  GAME,
  FASTEST,
}

export function providerConfigToNativeConfig(
  sensor: BaseSensor,
  configuration: ProviderConfiguration
): CollectionConfiguration {
  const nativeSensorDelay = toNativeSensorDelay(configuration.sensorDelay);
  return new CollectionConfiguration(sensor, nativeSensorDelay, configuration.batchSize);
}

export const defaultConfig = {
  sensorDelay: SensorDelay.NORMAL,
  batchSize: 50,
};

function toNativeSensorDelay(sensorDelay: SensorDelay | number): number {
  switch (sensorDelay) {
    case SensorDelay.UI:
      return android.hardware.SensorManager.SENSOR_DELAY_UI;
    case SensorDelay.NORMAL:
      return android.hardware.SensorManager.SENSOR_DELAY_NORMAL;
    case SensorDelay.GAME:
      return android.hardware.SensorManager.SENSOR_DELAY_GAME;
    case SensorDelay.FASTEST:
      return android.hardware.SensorManager.SENSOR_DELAY_FASTEST;
    default:
      return sensorDelay * 1000; // Microseconds
  }
}
