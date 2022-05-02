import { Task } from 'nativescript-task-dispatcher/tasks';
import { tracingTasks } from './tracing';
import { RecordWriterTask } from './record-writer';

export const builtInTasks: Array<Task> = [...tracingTasks, new RecordWriterTask('writeRecords')];
