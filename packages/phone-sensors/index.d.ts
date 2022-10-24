import { PluginLoader } from '@awarns/core';

export * from './entities';
export * from './provider';
export * from './sensors';
export * from './tasks';

export interface PhoneSensorsConfig {
  enableVibrationOnStart?: boolean;
}

export function registerPhoneSensorsPlugin(config?: PhoneSensorsConfig): PluginLoader;
