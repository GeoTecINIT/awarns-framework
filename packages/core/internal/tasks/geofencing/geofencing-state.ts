export interface GeofencingState {
  id: string;
  proximity: GeofencingProximity;
}

export enum GeofencingProximity {
  INSIDE = 'inside',
  NEARBY = 'nearby',
  OUTSIDE = 'outside',
}
