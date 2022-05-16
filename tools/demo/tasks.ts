import { Task } from 'nativescript-task-dispatcher/tasks';
import { makeTraceable, trackEventTask } from '@awarns/tracing';
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';
import { acquireBatteryLevel } from '@awarns/battery';
import { acquireMultiplePhoneGeolocationTask, acquirePhoneGeolocationTask } from '@awarns/geolocation';
import { checkAreaOfInterestProximityTask } from '@awarns/geofencing';
import { sendNotificationTask } from '@awarns/notifications';
import { writeRecordsTask } from '@awarns/persistence';

export const demoTasks: Array<Task> = [
  ...makeTraceable([
    startDetectingCoarseHumanActivityChangesTask(),
    stopDetectingCoarseHumanActivityChangesTask(),
    acquireBatteryLevel(),
  ]),
  ...makeTraceable(
    [
      acquirePhoneGeolocationTask(/* optional */ { bestOf: 3, timeout: 10000 }),
      acquireMultiplePhoneGeolocationTask(/* optional */ { bestOf: 1, timeout: 15000 }),
      checkAreaOfInterestProximityTask(),
      sendNotificationTask(),
    ],
    { outputsSensitiveData: true }
  ),
  writeRecordsTask(),
  trackEventTask(),
];
