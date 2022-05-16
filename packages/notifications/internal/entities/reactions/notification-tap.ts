import { NotificationEventBaseRecord } from './notification-event-base-record';
import { TapAction } from '../notification';

export const NotificationTapType = 'notification-tap';

export class NotificationTapRecord extends NotificationEventBaseRecord {
  constructor(notificationId: number, tapAction: TapAction, timestamp?: Date) {
    super(NotificationTapType, notificationId, tapAction, timestamp);
  }
}
