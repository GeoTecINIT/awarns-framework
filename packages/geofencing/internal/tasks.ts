import { Task } from '@awarns/core/tasks';
import { GeofencingTask } from './task';
import { GeofencingBasedFilterTask } from './filter';

export function checkAreaOfInterestProximityTask(): Task {
  return new GeofencingTask('checkAreaOfInterestProximity');
}

export function filterGeolocationByAoIProximityTask(): Task {
  return new GeofencingBasedFilterTask('filterGeolocationByAoIProximity');
}
