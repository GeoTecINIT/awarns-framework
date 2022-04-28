import { Change, Record, RecordType } from '@awarns/core/entities';
import { GeofencingProximity } from './proximity';

export class AoIProximityChange extends Record {
  constructor(public aoi: AreaOfInterest, public proximity: GeofencingProximity, change: Change, timestamp = new Date()) {
    super(RecordType.AoIProximityChange, timestamp, change);
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
