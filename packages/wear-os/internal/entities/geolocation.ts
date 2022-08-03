import { WatchRecord } from './index';
import { WatchSensor } from '../watch-sensor';
import { LocationSensorSample as GeolocationSample } from 'nativescript-wearos-sensors/internal/sensors/location/sample';

export class Geolocation extends WatchRecord {
  constructor(samples: GeolocationSample[], detectedAt: Date) {
    super(WatchSensor.GEOLOCATION, samples, detectedAt);
  }
}

export { GeolocationSample };
