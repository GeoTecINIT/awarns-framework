import { PluginLoader } from '@awarns/core';
import { WatchSensor } from './internal/watch-sensor';

export * from './entities';
export * from './provider';
export * from './sensors';
export * from './setup';
export * from './tasks';
export * from './watch';

export interface WearOSPluginConfig {
  sensors?: WatchSensor[];
  disablePlainMessaging?: boolean;
  disableWearCommands?: boolean;
}

export declare const allSensors;
export declare const defaultConfig;

export function registerWearOSPlugin(config?: WearOSPluginConfig): PluginLoader;
