import { Task } from '@awarns/core/tasks';
import { makeTraceable, trackEventTask } from '@awarns/tracing';
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';
import { acquireBatteryLevelTask } from '@awarns/battery';
import { acquireMultiplePhoneGeolocationTask, acquirePhoneGeolocationTask } from '@awarns/geolocation';
import { acquireMultiplePhoneWifiScanTask } from '@awarns/wifi';
import { acquireMultiplePhoneBleScanTask, BleScanMode } from '@awarns/ble';
import { checkAreaOfInterestProximityTask, filterGeolocationByAoIProximityTask } from '@awarns/geofencing';
import { sendNotificationTask, sendRandomNotificationTask } from '@awarns/notifications';
import { writeRecordsTask } from '@awarns/persistence';
import {
  PhoneSensor,
  SensorDelay,
  startDetectingSensorChangesTask,
  stopDetectingSensorChangesTask,
} from '@awarns/phone-sensors';

export const demoTasks: Array<Task> = [
  ...makeTraceable([
    startDetectingCoarseHumanActivityChangesTask(),
    stopDetectingCoarseHumanActivityChangesTask(),
    acquireBatteryLevelTask(),
    startDetectingSensorChangesTask(PhoneSensor.ACCELEROMETER, { sensorDelay: SensorDelay.NORMAL, batchSize: 50 }),
    startDetectingSensorChangesTask(PhoneSensor.GYROSCOPE, { sensorDelay: SensorDelay.NORMAL, batchSize: 50 }),
    stopDetectingSensorChangesTask(PhoneSensor.ACCELEROMETER),
    stopDetectingSensorChangesTask(PhoneSensor.GYROSCOPE),
  ]),
  ...makeTraceable(
    [
      acquirePhoneGeolocationTask(/* optional */ { bestOf: 3, timeout: 10000 }),
      acquireMultiplePhoneGeolocationTask(/* optional */ { bestOf: 1, timeout: 15000 }),
      acquireMultiplePhoneWifiScanTask(/* optional */ { ensureIsNew: true, timeout: 15000 }),
      acquireMultiplePhoneBleScanTask(
        /* optional */ { scanTime: 5000, scanMode: BleScanMode.BALANCED, iBeaconUuids: [] }
      ),
      checkAreaOfInterestProximityTask(),
      filterGeolocationByAoIProximityTask(),
      sendNotificationTask(),
      sendRandomNotificationTask(),
    ],
    { outputsSensitiveData: true }
  ),
  writeRecordsTask(),
  trackEventTask(),
];
