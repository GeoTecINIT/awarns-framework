import { WatchRecord } from './index';
import { WatchSensor } from '../../watch-sensor';
import { HeartRateSensorSample as HRSS } from 'nativescript-wearos-sensors/sensors/records';

export type HeartRateSample = HRSS;

export class HeartRate extends WatchRecord {
  constructor(samples: HeartRateSample[], detectedAt: Date) {
    super(WatchSensor.HEART_RATE, samples, detectedAt);
  }
}
