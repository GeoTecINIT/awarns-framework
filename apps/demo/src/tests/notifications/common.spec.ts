import { Notification } from '@awarns/notifications';
import { NotificationsManager } from '@awarns/notifications/internal/manager';

export function createNotificationsManagerMock(): NotificationsManager {
  return {
    hasPermission() {
      return Promise.resolve(true);
    },
    requestPermission() {
      return Promise.resolve(true);
    },
    display(_notification: Notification) {
      return Promise.resolve();
    },
  };
}
