import { NotificationsManager } from '../../notifications/manager';
import { Notification } from '../../notifications';

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
