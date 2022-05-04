import { PluginLoader } from '@awarns/core';

export * from './entities';
export * from './managers';
export * from './tasks';

export function registerNotificationsPlugin(notificationsChannelName?: string): PluginLoader;
