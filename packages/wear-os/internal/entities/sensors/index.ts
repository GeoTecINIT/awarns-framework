import { Record } from '@awarns/core/entities';
import { WatchSensor } from '../../watch-sensor';

export class WatchRecord extends Record {
  constructor(sensor: WatchSensor, public samples: WatchSample[], detectedAt: Date) {
    super(sensor, detectedAt);
  }
}

export interface WatchSample {
  timestamp: Date;
}
