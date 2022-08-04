import { PlainMessageClient } from './internal/plain-message-client';

export * from './entities';
export * from './provider';
export * from './sensors';
export * from './setup';
export * from './tasks';
export * from './watch';

import { PluginLoader } from '@awarns/core/common';
import { wearosSensors, allSensors, defaultConfig, WearosSensorsConfig as WSC } from 'nativescript-wearos-sensors';
import { WatchSensorsProvider } from './internal/provider';

export type WearOSPluginConfig = WSC;

export function registerWearOSPlugin(config: WearOSPluginConfig = defaultConfig): PluginLoader {
  return async () => {
    const enabledSensors = config.sensors ? config.sensors : allSensors;

    if (enabledSensors.length > 0 || !config.disableWearCommands) {
      WatchSensorsProvider.setup();
    }

    if (!config.disablePlainMessaging) {
      PlainMessageClient.setup();
    }

    await wearosSensors.init(config);
  };
}
