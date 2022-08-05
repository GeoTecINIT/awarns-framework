import { WatchSensor } from '../../watch-sensor';
import { WatchRecord, WatchSample } from './index';

export class TriAxial extends WatchRecord {
  constructor(sensor: WatchSensor, samples: TriAxialSample[], detectedAt: Date) {
    super(sensor, samples, detectedAt);
  }
}

export interface TriAxialSample extends WatchSample {
  x: number;
  y: number;
  z: number;
}
