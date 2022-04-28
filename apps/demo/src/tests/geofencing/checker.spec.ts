import { AreasOfInterestStore } from '@awarns/geofencing/internal/persistence';
import { GeofencingChecker } from '@awarns/geofencing/internal/checker';
import { createAreasOfInterestStoreMock } from './common.spec';
import { AreaOfInterest, GeofencingProximity } from '@awarns/geofencing/internal/entities';
import { Geolocation } from '@awarns/core/entities/geolocation';

describe('Geofencing checker', () => {
  let store: AreasOfInterestStore;
  let checker: GeofencingChecker;

  const nearbyRange = 75;
  const offset = 0;
  const extendedOffset = 15;

  const aoi1: AreaOfInterest = {
    id: 'aoi1',
    name: 'First area of interest',
    latitude: 39.99378719416474,
    longitude: -0.07388949394226074,
    radius: 45,
  };

  const aoi2: AreaOfInterest = {
    id: 'aoi2',
    name: 'Second area of interest',
    latitude: 39.99354471810093,
    longitude: -0.07317066192626952,
    radius: 30,
  };

  beforeEach(() => {
    store = createAreasOfInterestStoreMock();
    checker = new GeofencingChecker(store);
    spyOn(store, 'getAll').and.returnValue(Promise.resolve([aoi1, aoi2]));
  });

  it('returns an empty list when no area of interest is nearby', async () => {
    const point = createGeolocation(39.994198168578016, -0.07218897342681885);
    const result = await checker.findNearby(point, nearbyRange, offset);

    expect(result.length).toBe(0);
  });

  it("returns a list with one element and proximity 'nearby' when the given location is in the outer area", async () => {
    const point = createGeolocation(39.993602254871945, -0.0744849443435669);
    const result = await checker.findNearby(point, nearbyRange, offset);

    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it("returns a list with one element and proximity 'inside' when the given location is inside the inner area", async () => {
    const point = createGeolocation(39.99395569397331, -0.0743293762207031);
    const result = await checker.findNearby(point, nearbyRange, offset);

    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it('returns a list with two elements when the given location is inside one area and nearby another', async () => {
    const point = createGeolocation(39.99377075513676, -0.07363736629486084);
    const result = await checker.findNearby(point, nearbyRange, offset);

    expect(result.length).toBe(2);
    expect(result[0].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[0].aoi.id).toEqual(aoi1.id);
    expect(result[1].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[1].aoi.id).toEqual(aoi2.id);
  });

  it('returns a list with two elements when the given location is inside two overlapping areas', async () => {
    const point = createGeolocation(39.99363924277056, -0.07344961166381836);
    const result = await checker.findNearby(point, nearbyRange, offset);

    expect(result.length).toBe(2);
    expect(result[0].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[0].aoi.id).toEqual(aoi1.id);
    expect(result[1].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[1].aoi.id).toEqual(aoi2.id);
  });

  it('takes into account the given offset to determine if a point is inside an area', async () => {
    const point = createGeolocation(39.994021449883384, -0.07445275783538818);
    const result = await checker.findNearby(point, nearbyRange, extendedOffset);

    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it('takes into account the given offset to determine if a point is nearby an area', async () => {
    const point = createGeolocation(39.994984663966406, -0.07382377982139587);
    const result = await checker.findNearby(point, nearbyRange, extendedOffset);

    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it('returns an empty list when the given trajectory is empty', async () => {
    const result = await checker.findNearbyTrajectory([], nearbyRange, offset);
    expect(result.length).toBe(0);
  });

  it('returns an empty list when the given trajectory does not match any aoi', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.994198168578016, -0.07218897342681885), createGeolocation(39.99419816857802, -0.072188973426819), createGeolocation(39.99419816857801, -0.07218897342681)], nearbyRange, offset);
    expect(result.length).toBe(0);
  });

  it('returns a list with one item when trajectory is detailed and leaving one place', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.994041998592294, -0.07409602403640747), createGeolocation(39.99411186415638, -0.07409065961837769), createGeolocation(39.994173510182975, -0.07411748170852661), createGeolocation(39.994212552637705, -0.07416039705276488), createGeolocation(39.9942495402058, -0.07421404123306274)], nearbyRange, offset);
    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it('returns a list with one item when trajectory is limited and leaving one place', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.994041998592294, -0.07409602403640747), createGeolocation(39.99411186415638, -0.07409065961837769), createGeolocation(39.994173510182975, -0.07411748170852661)], nearbyRange, offset);
    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it('returns a list with one item when trajectory is insufficient, taking last value as truthy', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.99411186415638, -0.07409065961837769), createGeolocation(39.994173510182975, -0.07411748170852661)], nearbyRange, offset);
    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it('returns a list with one item when trajectory is lacking, taking unique as truthy', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.994173510182975, -0.07411748170852661)], nearbyRange, offset);
    expect(result.length).toBe(1);
    expect(result[0].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[0].aoi.id).toEqual(aoi1.id);
  });

  it('returns a list with two items when trajectory is mostly fine, staying inside a place and nearby another', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.99394130985953, -0.07405847311019897), createGeolocation(39.993926925742734, -0.0740504264831543), createGeolocation(39.99394336473311, -0.07402360439300536), createGeolocation(39.99393103549069, -0.07402360439300536), createGeolocation(39.99417556504956, -0.07413893938064575)], nearbyRange, offset);
    expect(result.length).toBe(2);
    expect(result[0].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[0].aoi.id).toEqual(aoi1.id);
    expect(result[1].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[1].aoi.id).toEqual(aoi2.id);
  });

  it('returns a list with two items when trajectory presents one outlier, staying inside a place and nearby another', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.99394130985953, -0.07405847311019897), createGeolocation(39.993926925742734, -0.0740504264831543), createGeolocation(39.99417556504956, -0.07413893938064575), createGeolocation(39.99394336473311, -0.07402360439300536), createGeolocation(39.99393103549069, -0.07402360439300536)], nearbyRange, offset);
    expect(result.length).toBe(2);
    expect(result[0].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[0].aoi.id).toEqual(aoi1.id);
    expect(result[1].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[1].aoi.id).toEqual(aoi2.id);
  });

  it('returns a list with two items when trajectory presents two outliers, staying inside a place and nearby another', async () => {
    const result = await checker.findNearbyTrajectory([createGeolocation(39.994105699550666, -0.07404237985610962), createGeolocation(39.99418994911401, -0.07410138845443726), createGeolocation(39.99416529071597, -0.07414966821670532), createGeolocation(39.99409953494437, -0.0741201639175415), createGeolocation(39.99406254729503, -0.07409870624542236)], nearbyRange, offset);
    expect(result.length).toBe(2);
    expect(result[0].proximity).toEqual(GeofencingProximity.INSIDE);
    expect(result[0].aoi.id).toEqual(aoi1.id);
    expect(result[1].proximity).toEqual(GeofencingProximity.NEARBY);
    expect(result[1].aoi.id).toEqual(aoi2.id);
  });
});

function createGeolocation(latitude: number, longitude: number): Geolocation {
  return new Geolocation(latitude, longitude, 0, 10, 10, 0, 0, new Date());
}
