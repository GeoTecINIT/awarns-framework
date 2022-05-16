import { Task } from '@awarns/core/tasks';
import { NotificationSenderTask } from './sender';
import { RandomNotificationSenderTask } from './random-sender';

export function sendNotificationTask(): Task {
  return new NotificationSenderTask('sendNotification');
}

export function sendRandomNotificationTask(): Task {
  return new RandomNotificationSenderTask('sendRandomNotification');
}
