import { Task } from 'nativescript-task-dispatcher/tasks';
import { notificationTasks } from './notifications';
import { tracingTasks } from './tracing';
import { RecordWriterTask } from './record-writer';

export const builtInTasks: Array<Task> = [...notificationTasks, ...tracingTasks, new RecordWriterTask('writeRecords')];
