import { Task } from 'nativescript-task-dispatcher/tasks';
import { EventTrackerTask } from './event-tracker';

export * from './trace';
export * from './trace-type';
export * from './trace-result';
export * from './traceable-task';
export * from './tracer-config';

export const tracingTasks: Array<Task> = [
  new EventTrackerTask('trackEvent'),
  new EventTrackerTask('trackSensitiveEvent', {
    sensitiveData: true,
  }),
];
