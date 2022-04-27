import { Task } from 'nativescript-task-dispatcher/tasks';
import { NotificationSenderTask } from './notification-sender';

export const notificationTasks: Array<Task> = [new NotificationSenderTask('sendNotification', { sensitiveData: true })];
