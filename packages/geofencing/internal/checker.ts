import { AreasOfInterestStore, areasOfInterestStoreDB } from './persistence';
import { AreaOfInterest, GeofencingProximity } from './entities';
import { Geolocation } from '@awarns/geolocation';
import { point } from '@turf/helpers';
import { default as distance } from '@turf/distance';

export class GeofencingChecker {
  constructor(private store: AreasOfInterestStore = areasOfInterestStoreDB) {}

  async findNearby(location: Geolocation, nearbyRange: number, offset: number): Promise<Array<GeofencingResult>> {
    const aois = await this.store.getAll();
    const results = aois.map((aoi) => ({
      aoi,
      proximity: GeofencingChecker.calculateProximity(location, aoi, nearbyRange, offset),
    }));

    return results.filter((result) => result.proximity !== GeofencingProximity.OUTSIDE);
  }

  async findNearbyTrajectory(locations: Array<Geolocation>, nearbyRange: number, offset: number): Promise<Array<GeofencingResult>> {
    if (locations.length === 0) {
      return [];
    }

    const sometimeNearby: Array<Array<GeofencingResult>> = [];
    for (const location of locations) {
      const nearby = await this.findNearby(location, nearbyRange, offset);
      sometimeNearby.push(nearby);
    }
    if (sometimeNearby.every((result) => result.length === 0)) {
      return [];
    }

    const proximityDict = GeofencingChecker.createProximityDict(sometimeNearby);
    const results: Array<GeofencingResult> = [];
    for (const [aoi, nearness] of proximityDict) {
      const proximity = GeofencingChecker.pickBestProximity(nearness);
      if (proximity !== GeofencingProximity.OUTSIDE) {
        results.push({ aoi, proximity });
      }
    }
    return results;
  }

  private static calculateProximity(location: Geolocation, aoi: AreaOfInterest, nearbyRange: number, offset: number): GeofencingProximity {
    const loc = point([location.longitude, location.latitude]);
    const aoiCentroid = point([aoi.longitude, aoi.latitude]);
    const dst = distance(loc, aoiCentroid, { units: 'kilometers' }) * 1000;

    if (dst <= aoi.radius + offset) {
      return GeofencingProximity.INSIDE;
    }
    if (dst <= aoi.radius + nearbyRange + offset) {
      return GeofencingProximity.NEARBY;
    }
    return GeofencingProximity.OUTSIDE;
  }

  private static createProximityDict(sometimeNearby: Array<Array<GeofencingResult>>): Map<AreaOfInterest, Array<GeofencingProximity>> {
    // Cannot be merged in one map, because of identical AoIs are not understood as the same key for the map
    const nearnessAlongTime = new Map<string, Array<GeofencingProximity>>();
    const aois = new Map<string, AreaOfInterest>();

    for (const results of sometimeNearby) {
      for (const result of results) {
        const id = result.aoi.id;
        if (!aois.has(id)) {
          aois.set(id, result.aoi);
          nearnessAlongTime.set(id, GeofencingChecker.createProximityArray(sometimeNearby.length));
        }
      }
    }

    for (let i = 0; i < sometimeNearby.length; i++) {
      for (const result of sometimeNearby[i]) {
        const id = result.aoi.id;
        const nearness = nearnessAlongTime.get(id);
        nearness[i] = result.proximity;
        nearnessAlongTime.set(id, nearness);
      }
    }

    const proximityDict = new Map<AreaOfInterest, Array<GeofencingProximity>>();
    for (const [id, aoi] of aois) {
      proximityDict.set(aoi, nearnessAlongTime.get(id));
    }

    return proximityDict;
  }

  private static pickBestProximity(nearness: Array<GeofencingProximity>): GeofencingProximity {
    const choices = {};
    choices[GeofencingProximity.INSIDE] = 0;
    choices[GeofencingProximity.NEARBY] = 0;
    choices[GeofencingProximity.OUTSIDE] = 0;

    for (const proximity of nearness) {
      choices[proximity]++;
    }

    let maxValue = choices[GeofencingProximity.INSIDE];
    let bestProximity = GeofencingProximity.INSIDE;
    if (choices[GeofencingProximity.NEARBY] > maxValue) {
      maxValue = choices[GeofencingProximity.NEARBY];
      bestProximity = GeofencingProximity.NEARBY;
    }
    if (choices[GeofencingProximity.OUTSIDE] > maxValue) {
      bestProximity = GeofencingProximity.OUTSIDE;
    }

    if (bestProximity === nearness[nearness.length - 1]) {
      return bestProximity;
    }

    const last = nearness[nearness.length - 1];
    let consecutivePlaces = 1;
    for (let i = nearness.length - 2; i >= 0; i--) {
      if (nearness[i] !== last) {
        break;
      }
      consecutivePlaces++;
    }

    const oneThird = Math.round(nearness.length * (1 / 3));
    if (consecutivePlaces >= oneThird) {
      // At least the last third equals the last proximity;
      return last;
    }

    // Last position is likely to be an outlier, return best proximity instead
    return bestProximity;
  }

  private static createProximityArray(length: number) {
    return Array.from({ length }, () => GeofencingProximity.OUTSIDE);
  }
}

export interface GeofencingResult {
  aoi: AreaOfInterest;
  proximity: GeofencingProximity;
}
