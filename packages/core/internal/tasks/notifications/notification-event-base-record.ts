import { Change, Record } from '../../providers';
import { TapAction } from '../../notifications';

export abstract class NotificationEventBaseRecord extends Record {
  protected constructor(public name: string, public notificationId: number, public tapAction: TapAction, timestamp: Date = new Date()) {
    super(name, timestamp, Change.NONE);
  }
}
