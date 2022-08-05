import { WatchRecord, WatchSample } from './index';
import { WatchSensor } from '../../watch-sensor';

export class HeartRate extends WatchRecord {
  constructor(samples: HeartRateSample[], detectedAt: Date) {
    super(WatchSensor.HEART_RATE, samples, detectedAt);
  }
}

export interface HeartRateSample extends WatchSample {
  value: number;
}
