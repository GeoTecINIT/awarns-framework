import { NotificationEventBaseRecord } from './notification-event-base-record';
import { TapAction } from '../notification';
import { KnownTypes } from '@awarns/core/entities';

export class NotificationTapRecord extends NotificationEventBaseRecord {
  constructor(notificationId: number, tapAction: TapAction, timestamp?: Date) {
    super(KnownTypes.NotificationTap, notificationId, tapAction, timestamp);
  }
}
