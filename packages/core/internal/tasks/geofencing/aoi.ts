import { Change, Record, RecordType } from '../../providers/base-record';
import { GeofencingProximity } from './geofencing-state';

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
