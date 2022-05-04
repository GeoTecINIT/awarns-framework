import { Task } from 'nativescript-task-dispatcher/tasks';
import { batchGeolocationTask, singleGeolocationTask } from '@awarns/geolocation';
import { geofencingTask } from '@awarns/geofencing';

export const demoTasks: Array<Task> = [singleGeolocationTask(/* optional */ { bestOf: 3, timeout: 10000 }), batchGeolocationTask(/* optional */ { bestOf: 1, timeout: 15000 }), geofencingTask()];
