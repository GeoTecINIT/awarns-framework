import { WatchRecord } from './index';
import { WatchSensor } from '../../watch-sensor';
import { LocationSensorSample as LSS } from 'nativescript-wearos-sensors/sensors/records';

export type GeolocationSample = LSS;

export class Geolocation extends WatchRecord {
  constructor(samples: GeolocationSample[], detectedAt: Date) {
    super(WatchSensor.GEOLOCATION, samples, detectedAt);
  }
}
