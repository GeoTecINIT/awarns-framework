import { Notification, TapActionType, notificationsManager } from '@awarns/notifications';

export class NotificationCallbacks {
  setupNotificationTapListener(cb: (notification: Notification) => void) {
    this.onNotificationTap((notification) => {
      if (notification.tapAction.type === TapActionType.OPEN_APP) {
        return;
      }

      cb(notification);
    });
  }

  setupNotificationClearedListener() {
    this.onNotificationCleared((notification) => {
      console.log(`Notification with id ${notification.id} cleared`);
    });
  }

  private onNotificationTap(cb: (notification: Notification) => void) {
    notificationsManager.onNotificationTap(cb).catch((err) => console.error(`Could not subscribe to notification taps. Reason: ${err}`));
  }

  private onNotificationCleared(cb: (notification: Notification) => void) {
    notificationsManager.onNotificationCleared(cb).catch((err) => console.error(`Could not subscribe to notification taps. Reason: ${err}`));
  }
}
