import { NotificationEventBaseRecord } from './notification-event-base-record';
import { TapAction } from '../notification';

export const NotificationDiscardType = 'notification-discard';

export class NotificationDiscardRecord extends NotificationEventBaseRecord {
  constructor(notificationId: number, tapAction: TapAction, timestamp?: Date) {
    super(NotificationDiscardType, notificationId, tapAction, timestamp);
  }
}
