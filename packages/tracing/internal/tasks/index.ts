import { Task } from '@awarns/core/tasks';
import { EventTrackerTask } from './event-tracker';
import { TracerConfig } from './tracer-config';
import { TraceableTask } from './traceable-task';

export * from './traceable-task';
export * from './tracer-config';

export function makeTraceable(tasksToTrace: Array<Task>, config: TracerConfig = {}): Array<Task> {
  return tasksToTrace.map((task) => new TraceableTask(task, config));
}

export function trackEventTask(): Task {
  return new EventTrackerTask('trackEvent');
}

export function trackSensitiveEvent(): Task {
  return new EventTrackerTask('trackSensitiveEvent', {
    outputsSensitiveData: true,
  });
}
