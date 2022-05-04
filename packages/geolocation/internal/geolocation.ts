import { Record, KnownTypes } from '@awarns/core/entities';

import { GeolocationLike as GL, Geolocation as NativeGeolocation } from 'nativescript-context-apis/geolocation';
export type GeolocationLike = GL;

export class Geolocation extends Record {
  constructor(public latitude: number, public longitude: number, public altitude: number, public horizontalAccuracy: number, public verticalAccuracy: number, public speed: number, public direction: number, capturedAt: Date) {
    super(KnownTypes.Geolocation, capturedAt);
  }

  distance(to: Geolocation | GeolocationLike) {
    return new NativeGeolocation(this).distance(to);
  }
}
