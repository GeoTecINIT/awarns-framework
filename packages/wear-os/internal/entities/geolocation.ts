import { WatchRecord, WatchSample } from './index';
import { WatchSensor } from '../watch-sensor';

export class Geolocation extends WatchRecord {
  constructor(samples: GeolocationSample[], detectedAt: Date) {
    super(WatchSensor.GEOLOCATION, samples, detectedAt);
  }
}

export interface GeolocationSample extends WatchSample {
  latitude: number;
  longitude: number;
  altitude: number;
}
