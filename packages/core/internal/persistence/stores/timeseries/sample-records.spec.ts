import { Change, Record, RecordType } from '../../../providers';

export class AoIProximityChange extends Record {
  constructor(public aoi: AreaOfInterest, public proximity: GeofencingProximity, change: Change, timestamp = new Date()) {
    super(RecordType.AoIProximityChange, timestamp, change);
  }
}

interface AreaOfInterest {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
  category?: string;
  level?: number;
}

export enum GeofencingProximity {
  INSIDE = 'inside',
  NEARBY = 'nearby',
  OUTSIDE = 'outside',
}
