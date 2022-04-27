import { NotificationEventBaseRecord } from './notification-event-base-record';
import { TapAction } from '../../notifications';

export class NotificationTapRecord extends NotificationEventBaseRecord {
  constructor(notificationId: number, tapAction: TapAction, timestamp?: Date) {
    super('notification-tap', notificationId, tapAction, timestamp);
  }
}
