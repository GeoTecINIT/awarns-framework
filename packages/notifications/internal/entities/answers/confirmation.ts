import { Change, Record } from '@awarns/core/entities';

export const UserConfirmationType = 'user-confirmation';

export class UserConfirmation extends Record {
  constructor(
    public confirmationId: string,
    public question: string,
    public confirmed: boolean,
    public notificationId?: number,
    answeredAt: Date = new Date()
  ) {
    super(UserConfirmationType, answeredAt, Change.NONE);
  }
}
