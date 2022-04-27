import { NotificationEventBaseRecord } from './notification-event-base-record';
import { TapAction } from '../../notifications';

export class NotificationDiscardRecord extends NotificationEventBaseRecord {
  constructor(notificationId: number, tapAction: TapAction, timestamp?: Date) {
    super('notification-discard', notificationId, tapAction, timestamp);
  }
}
