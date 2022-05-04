import { Task } from 'nativescript-task-dispatcher/tasks';
import { RecordWriterTask } from './record-writer';

export const builtInTasks: Array<Task> = [new RecordWriterTask('writeRecords')];
