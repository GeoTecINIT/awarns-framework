import { Record, Change } from '@awarns/core/entities';

export const UserFeedbackType = 'user-feedback';

export class UserFeedback extends Record {
  constructor(
    public feedbackId: string,
    public question: string,
    public feedback: string,
    public notificationId?: number,
    obtainedAt: Date = new Date()
  ) {
    super(UserFeedbackType, obtainedAt, Change.NONE);
  }
}
