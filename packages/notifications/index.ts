import { PluginLoader } from '@awarns/core';
import { notificationsManager } from './internal/manager';

export * from './entities';
export * from './managers';
export * from './tasks';

export function registerNotificationsPlugin(notificationsChannelName?: string): PluginLoader {
  return async () => {
    if (notificationsChannelName != undefined) {
      notificationsManager.setChannelName(notificationsChannelName);
    }
  };
}
