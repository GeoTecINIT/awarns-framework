import { Task } from '@awarns/core/tasks';
import { NotificationSenderTask } from './sender';

export function sendNotificationTask(): Task {
  return new NotificationSenderTask('sendNotification', { sensitiveData: true });
}
