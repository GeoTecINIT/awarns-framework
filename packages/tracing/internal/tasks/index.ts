import { Task } from '@awarns/core/tasks';
import { EventTrackerTask } from './event-tracker';

export * from './traceable-task';
export * from './tracer-config';

export function trackEventTask(): Task {
  return new EventTrackerTask('trackEvent');
}

export function trackSensitiveEvent(): Task {
  return new EventTrackerTask('trackSensitiveEvent', {
    sensitiveData: true,
  });
}
