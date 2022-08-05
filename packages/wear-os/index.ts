import { PlainMessageClient } from './internal/plain-message-client';

export * from './entities';
export * from './provider';
export * from './sensors';
export * from './setup';
export * from './tasks';
export * from './watch';

import { PluginLoader } from '@awarns/core/common';
import { wearosSensors } from 'nativescript-wearos-sensors';
import { WatchSensorsProvider } from './internal/provider';
import { toSensorType, WatchSensor } from './internal/watch-sensor';

export interface WearOSPluginConfig {
  sensors?: WatchSensor[];
  disablePlainMessaging?: boolean;
  disableWearCommands?: boolean;
}

export const allSensors = [
  WatchSensor.ACCELEROMETER,
  WatchSensor.GYROSCOPE,
  WatchSensor.MAGNETOMETER,
  WatchSensor.HEART_RATE,
  WatchSensor.GEOLOCATION,
];

export const defaultConfig = {
  sensors: allSensors,
};

export function registerWearOSPlugin(config: WearOSPluginConfig = defaultConfig): PluginLoader {
  return async () => {
    const enabledSensors = config.sensors ? config.sensors : allSensors;

    if (enabledSensors.length > 0 || !config.disableWearCommands) {
      WatchSensorsProvider.setup();
    }

    if (!config.disablePlainMessaging) {
      PlainMessageClient.setup();
    }

    await wearosSensors.init({
      sensors: config.sensors.map((sensor) => toSensorType(sensor)),
      disablePlainMessaging: config.disablePlainMessaging,
      disableWearCommands: config.disableWearCommands,
    });
  };
}
