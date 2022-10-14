import { PluginLoader } from '@awarns/core';

export * from './entities';
export * from './provider';
export * from './sensors';
export * from './tasks';

export function registerPhoneSensorsPlugin(enableVibrationOnStart?: boolean): PluginLoader;
