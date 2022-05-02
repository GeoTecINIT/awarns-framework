import { Task } from 'nativescript-task-dispatcher/tasks';
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';
import { acquireMultiplePhoneGeolocationTask, acquirePhoneGeolocationTask } from '@awarns/geolocation';
import { checkAreaOfInterestProximityTask } from '@awarns/geofencing';
import { sendNotificationTask } from '@awarns/notifications';
import { makeTraceable, trackEventTask } from '@awarns/tracing';

export const demoTasks: Array<Task> = [
  ...makeTraceable([startDetectingCoarseHumanActivityChangesTask(), stopDetectingCoarseHumanActivityChangesTask()]),
  ...makeTraceable([
    acquirePhoneGeolocationTask(/* optional */ { bestOf: 3, timeout: 10000 }),
    acquireMultiplePhoneGeolocationTask(/* optional */ { bestOf: 1, timeout: 15000 }),
    checkAreaOfInterestProximityTask(),
    sendNotificationTask(),
  ]),
  trackEventTask(),
];
