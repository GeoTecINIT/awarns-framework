import { WatchRecord } from './index';
import { WatchSensor } from '../watch-sensor';
import { HeartRateSensorSample as HeartRateSample } from 'nativescript-wearos-sensors/internal/sensors/heart-rate/sample';

export class HeartRate extends WatchRecord {
  constructor(samples: HeartRateSample[], detectedAt: Date) {
    super(WatchSensor.HEART_RATE, samples, detectedAt);
  }
}

export { HeartRateSample };
