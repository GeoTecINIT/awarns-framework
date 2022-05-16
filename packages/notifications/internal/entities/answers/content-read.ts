import { Change, Record } from '@awarns/core/entities';

export const UserReadContentType = 'user-content-read';

export class UserReadContent extends Record {
  constructor(
    public contentId: string,
    public completelyRead: boolean = false,
    public notificationId?: number,
    closedAt: Date = new Date()
  ) {
    super(UserReadContentType, closedAt, Change.NONE);
  }
}
