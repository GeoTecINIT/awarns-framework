import { WatchSensor } from '../../watch-sensor';
import { WatchRecord } from './index';
import { TriAxialSensorSample as TSS } from 'nativescript-wearos-sensors/sensors/records';

export type TriAxialSample = TSS;

export class TriAxial extends WatchRecord {
  constructor(sensor: WatchSensor, samples: TriAxialSample[], detectedAt: Date) {
    super(sensor, samples, detectedAt);
  }
}
