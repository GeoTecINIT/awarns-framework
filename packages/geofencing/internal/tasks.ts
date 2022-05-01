import { Task } from '@awarns/core/tasks';
import { GeofencingTask } from './task';

export function checkAreaOfInterestProximityTask(): Task {
  return new GeofencingTask('checkAreaOfInterestProximity', { sensitiveData: true });
}
