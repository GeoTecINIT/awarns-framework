import { Change, Record } from '@awarns/core/entities';
import { TapAction } from '../notification';

export abstract class NotificationEventBaseRecord extends Record {
  protected constructor(public name: string, public notificationId: number, public tapAction: TapAction, timestamp: Date = new Date()) {
    super(name, timestamp, Change.NONE);
  }
}
