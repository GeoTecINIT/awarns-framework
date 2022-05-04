import { Task } from 'nativescript-task-dispatcher/tasks';
import { geofencingTask } from '@awarns/geofencing';

export const demoTasks: Array<Task> = [geofencingTask()];
