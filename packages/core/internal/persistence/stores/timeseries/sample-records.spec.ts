import { Change, Record, KnownTypes } from '../../../providers';

export class Geolocation extends Record {
  constructor(public latitude: number, public longitude: number, public altitude: number, public horizontalAccuracy: number, public verticalAccuracy: number, public speed: number, public direction: number, capturedAt: Date) {
    super(KnownTypes.Geolocation, capturedAt);
  }
}

export class AoIProximityChange extends Record {
  constructor(public aoi: AreaOfInterest, public proximity: GeofencingProximity, change: Change, timestamp = new Date()) {
    super(KnownTypes.AoIProximityChange, timestamp, change);
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
