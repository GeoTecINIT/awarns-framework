import { Record } from '@awarns/core/internal/entities';
import { WatchSensor } from '../../watch-sensor';

export class Geolocation extends Record {
  constructor(
    public latitude: number,
    public longitude: number,
    public altitude: number,
    public horizontalAccuracy: number,
    public verticalAccuracy: number,
    public speed: number,
    public direction: number,
    public detectedAt: Date
  ) {
    super(WatchSensor.GEOLOCATION, detectedAt);
  }
}
