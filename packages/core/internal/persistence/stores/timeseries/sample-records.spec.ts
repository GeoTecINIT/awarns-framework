import { Change, Record, KnownTypes } from '../../../providers';
import { HumanActivity } from 'nativescript-context-apis/activity-recognition';

export class Geolocation extends Record {
  constructor(public latitude: number, public longitude: number, public altitude: number, public horizontalAccuracy: number, public verticalAccuracy: number, public speed: number, public direction: number, capturedAt: Date) {
    super(KnownTypes.Geolocation, capturedAt);
  }
}

export class HumanActivityChange extends Record {
  constructor(public activity: HumanActivity, change: Change, detectedAt: Date, public confidence?: number) {
    super(KnownTypes.HumanActivity, detectedAt, change);
  }
}

export { HumanActivity } from 'nativescript-context-apis/activity-recognition';

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
