import { WatchSensor } from '../watch-sensor';
import { WatchRecord } from './index';
import { TriAxialSensorSample as TriAxialSample } from 'nativescript-wearos-sensors/internal/sensors/triaxial/sample';

export class TriAxial extends WatchRecord {
  constructor(sensor: WatchSensor, samples: TriAxialSample[], detectedAt: Date) {
    super(sensor, samples, detectedAt);
  }
}

export { TriAxialSample };
