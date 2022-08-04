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
  startDetectingPhoneSensorChangesTask,
  stopDetectingPhoneSensorChangesTask,
} from '@awarns/phone-sensors';
import {
  sendPlainMessageToWatchTask,
  sendPlainMessageToWatchAndAwaitResponseTask,
  startDetectingWatchSensorChangesTask,
  stopDetectingWatchSensorChangesTask,
  WatchSensor,
  WatchSensorDelay,
} from '@awarns/wear-os';

export const demoTasks: Array<Task> = [
  ...makeTraceable([
    startDetectingCoarseHumanActivityChangesTask(),
    stopDetectingCoarseHumanActivityChangesTask(),
    acquireBatteryLevelTask(),
    startDetectingPhoneSensorChangesTask(PhoneSensor.ACCELEROMETER, { sensorDelay: SensorDelay.NORMAL, batchSize: 50 }),
    startDetectingPhoneSensorChangesTask(PhoneSensor.GYROSCOPE, { sensorDelay: SensorDelay.NORMAL, batchSize: 50 }),
    stopDetectingPhoneSensorChangesTask(PhoneSensor.ACCELEROMETER),
    stopDetectingPhoneSensorChangesTask(PhoneSensor.GYROSCOPE),

    startDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER, {
      sensorDelay: WatchSensorDelay.NORMAL,
      batchSize: 50,
    }),
    stopDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER),
    startDetectingWatchSensorChangesTask(WatchSensor.HEART_RATE, {
      sensorDelay: WatchSensorDelay.NORMAL,
      batchSize: 3,
    }),
    stopDetectingWatchSensorChangesTask(WatchSensor.HEART_RATE),
    startDetectingWatchSensorChangesTask(WatchSensor.GEOLOCATION, {
      sensorDelay: WatchSensorDelay.NORMAL,
      batchSize: 5,
    }),
    stopDetectingWatchSensorChangesTask(WatchSensor.GEOLOCATION),

    sendPlainMessageToWatchTask(),
    sendPlainMessageToWatchAndAwaitResponseTask(),
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
