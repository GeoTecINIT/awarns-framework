import { Record } from '@awarns/core/entities';
import { WatchSensor } from '../../watch-sensor';
import { SensorSample as SS } from 'nativescript-wearos-sensors/sensors/records';

export type WatchSample = SS;

export class WatchRecord extends Record {
  constructor(sensor: WatchSensor, public samples: WatchSample[], detectedAt: Date) {
    super(sensor, detectedAt);
  }
}
