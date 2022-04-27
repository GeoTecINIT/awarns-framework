import { Task } from 'nativescript-task-dispatcher/tasks';
import { GeofencingTask } from './task';

export const geofencingTasks: Array<Task> = [new GeofencingTask('checkAreaOfInterestProximity', { sensitiveData: true })];
