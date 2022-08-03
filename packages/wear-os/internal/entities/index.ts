import { Record } from '@awarns/core/entities';
import { WatchSensor } from '../watch-sensor';
import { SensorSample as WatchSample } from 'nativescript-wearos-sensors/internal/sensors/sample';

export class WatchRecord extends Record {
  constructor(sensor: WatchSensor, public samples: WatchSample[], detectedAt: Date) {
    super(sensor, detectedAt);
  }
}

export { WatchSample };
