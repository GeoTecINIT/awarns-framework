import { Task } from 'nativescript-task-dispatcher/tasks';
import { GeofencingTask } from '../internal/task';

export function geofencingTask(): Task {
  return new GeofencingTask('checkAreaOfInterestProximity', { sensitiveData: true });
}
