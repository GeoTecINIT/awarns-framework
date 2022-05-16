import { Task } from 'nativescript-task-dispatcher/tasks';
import { makeTraceable, trackEventTask } from '@awarns/tracing';
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';
import { acquireMultiplePhoneGeolocationTask, acquirePhoneGeolocationTask } from '@awarns/geolocation';
import { checkAreaOfInterestProximityTask } from '@awarns/geofencing';
import { sendNotificationTask, sendRandomNotificationTask } from '@awarns/notifications';
import { writeRecordsTask } from '@awarns/persistence';

export const demoTasks: Array<Task> = [
  ...makeTraceable([startDetectingCoarseHumanActivityChangesTask(), stopDetectingCoarseHumanActivityChangesTask()]),
  ...makeTraceable(
    [
      acquirePhoneGeolocationTask(/* optional */ { bestOf: 3, timeout: 10000 }),
      acquireMultiplePhoneGeolocationTask(/* optional */ { bestOf: 1, timeout: 15000 }),
      checkAreaOfInterestProximityTask(),
      sendNotificationTask(),
      sendRandomNotificationTask(),
    ],
    { outputsSensitiveData: true }
  ),
  writeRecordsTask(),
  trackEventTask(),
];
