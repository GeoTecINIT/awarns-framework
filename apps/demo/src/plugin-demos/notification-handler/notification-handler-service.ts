import { Notification } from '@awarns/notifications';

class NotificationHandlerService {
  private _tappedNotification: TappedNotification;

  get tappedNotification(): TappedNotification {
    return this._tappedNotification;
  }

  set tappedNotification(notification: TappedNotification) {
    this._tappedNotification = notification;
  }
}

export interface TappedNotification extends Notification {
  tappingTimestamp: number;
}

let _service: NotificationHandlerService;
export function getNotificationHandlerService() {
  if (!_service) {
    _service = new NotificationHandlerService();
  }
  return _service;
}
