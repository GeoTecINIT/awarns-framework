import { Change, Record } from '@awarns/core/entities';
import { GeofencingProximity } from './proximity';

export const AoIProximityChangeType = 'aoi-proximity-change';

export class AoIProximityChange extends Record {
  constructor(
    public aoi: AreaOfInterest,
    public proximity: GeofencingProximity,
    change: Change,
    timestamp = new Date()
  ) {
    super(AoIProximityChangeType, timestamp, change);
  }
}

export interface AreaOfInterest {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
  category?: string;
  level?: number;
}
