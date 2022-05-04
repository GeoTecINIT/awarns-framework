import { AreasOfInterestStore, GeofencingStateStore, NearbyArea } from '@awarns/geofencing/internal/persistence';
import { AreaOfInterest, GeofencingProximity } from '@awarns/geofencing/internal/entities';
import { GeofencingChecker, GeofencingResult } from '@awarns/geofencing/internal/checker';
import { Geolocation } from '@awarns/core/entities/geolocation';

export function createAreasOfInterestStoreMock(): AreasOfInterestStore {
  return {
    insert(_aois: Array<AreaOfInterest>): Promise<void> {
      return Promise.resolve();
    },
    getAll(): Promise<Array<AreaOfInterest>> {
      return Promise.resolve([]);
    },
    deleteAll(): Promise<void> {
      return Promise.resolve();
    },
  };
}

export function createGeofencingStateStoreMock(): GeofencingStateStore {
  return {
    getProximity(_id: string): Promise<GeofencingProximity> {
      return Promise.resolve(GeofencingProximity.OUTSIDE);
    },
    updateProximity(_id: string, _proximity: GeofencingProximity): Promise<void> {
      return Promise.resolve();
    },
    getKnownNearbyAreas(): Promise<Array<NearbyArea>> {
      return Promise.resolve([]);
    },
    clear(): Promise<void> {
      return Promise.resolve();
    },
  };
}

export function createGeofencingCheckerMock(): GeofencingChecker {
  return {
    findNearby(_location: Geolocation, _nearbyRange: number, _offset: number): Promise<Array<GeofencingResult>> {
      return Promise.resolve([]);
    },
    findNearbyTrajectory(_locations: Array<Geolocation>, _nearbyRange: number, _offset: number): Promise<Array<GeofencingResult>> {
      return Promise.resolve([]);
    },
  } as GeofencingChecker;
}
