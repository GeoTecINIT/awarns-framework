import { Geolocation } from '@awarns/geolocation';
import { AreaOfInterest, GeofencingProximity } from '@awarns/geofencing/internal/entities';
import { GeofencingChecker } from '@awarns/geofencing/internal/checker';
import { DispatchableEvent } from '@awarns/core/events';
import { createGeofencingCheckerMock } from './common.spec';
import { createEvent, listenToEventTrigger } from '@awarns/core/testing/events';
import { GeofencingBasedFilterTask } from '@awarns/geofencing/internal/filter';

describe('Geofencing-based filter task', () => {
  const location1 = createFakeLocation(0);
  const location2 = createFakeLocation(1);
  const nearbyRange = 100;
  const offset = 15;
  const aoi = createAreaOfInterest('aoi');

  let invocationEvent: DispatchableEvent;
  let checker: GeofencingChecker;
  let task: GeofencingBasedFilterTask;

  beforeEach(() => {
    invocationEvent = createEvent('locationAcquired', {
      data: location1,
    });
    checker = createGeofencingCheckerMock();
    task = new GeofencingBasedFilterTask('filterGeolocationByAoIProximity', {}, checker);
  });

  it('outputs a default event when no area is nearby', async () => {
    spyOn(checker, 'findNearby').withArgs(location1, nearbyRange, offset).and.returnValue(Promise.resolve([]));

    const done = listenToEventTrigger('filterGeolocationByAoIProximityFinished', invocationEvent.id);
    task.run({ nearbyRange, offset, includeNearby: true }, invocationEvent);
    await done;

    expect(checker.findNearby).toHaveBeenCalled();
  });

  it('outputs a default event when it is close to an area but nearby points are not included', async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location1, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.NEARBY }]));

    const done = listenToEventTrigger('filterGeolocationByAoIProximityFinished', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    await done;

    expect(checker.findNearby).toHaveBeenCalled();
  });

  it("outputs a 'geolocationCloseToAoIAcquired' event when it is close to an area", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location1, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.NEARBY }]));

    const done = listenToEventTrigger('geolocationCloseToAoIAcquired', invocationEvent.id);
    task.run({ nearbyRange, offset, includeNearby: true }, invocationEvent);
    const resultingLocation = await done;

    expect(resultingLocation).toEqual({ ...location1 });
  });

  it("outputs a 'geolocationCloseToAoIAcquired' event when it is inside an area", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location1, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.INSIDE }]));

    const done = listenToEventTrigger('geolocationCloseToAoIAcquired', invocationEvent.id);
    task.run({ nearbyRange, offset, includeNearby: true }, invocationEvent);
    const resultingLocation = await done;

    expect(resultingLocation).toEqual({ ...location1 });
  });

  it('outputs a default event when no area is nearby given trajectory', async () => {
    spyOn(checker, 'findNearby')
      .withArgs(jasmine.any(Geolocation), nearbyRange, offset)
      .and.returnValue(Promise.resolve([]));
    const invocationEvent = createEvent('locationAcquired', {
      data: [location1, location2],
    });

    const done = listenToEventTrigger('filterGeolocationByAoIProximityFinished', invocationEvent.id);
    task.run({ nearbyRange, offset, includeNearby: true }, invocationEvent);
    await done;

    expect(checker.findNearby).toHaveBeenCalled();
  });

  it('outputs a default event when trajectory is nearby an area but nearby points are not included', async () => {
    spyOn(checker, 'findNearby')
      .withArgs(jasmine.any(Geolocation), nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.NEARBY }]));
    const invocationEvent = createEvent('locationAcquired', {
      data: [location1, location2],
    });

    const done = listenToEventTrigger('filterGeolocationByAoIProximityFinished', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    await done;

    expect(checker.findNearby).toHaveBeenCalled();
  });

  it("outputs a 'geolocationCloseToAoIAcquired' event when a given trajectory is inside an area", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(jasmine.any(Geolocation), nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.INSIDE }]));

    const invocationEvent = createEvent('locationAcquired', {
      data: [location1, location2],
    });

    const done = listenToEventTrigger('geolocationCloseToAoIAcquired', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    await done;
    const resultingLocations = await done;

    expect(resultingLocations.length).toBe(2);
    expect(resultingLocations[0]).toEqual({ ...location1 });
    expect(resultingLocations[1]).toEqual({ ...location2 });
  });

  it("outputs a 'geolocationCloseToAoIAcquired' event with just the points that are inside an area", async () => {
    spyOn(checker, 'findNearby').and.callFake((location) => {
      switch (location) {
        case location1:
          return Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.INSIDE }]);
        case location2:
          return Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.NEARBY }]);
      }
    });

    const invocationEvent = createEvent('locationAcquired', {
      data: [location1, location2],
    });

    const done = listenToEventTrigger('geolocationCloseToAoIAcquired', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    await done;
    const resultingLocations = await done;

    expect(resultingLocations.length).toBe(1);
    expect(resultingLocations[0]).toEqual({ ...location1 });
  });

  it("outputs a 'geolocationCloseToAoIAcquired' event with all the points nearby an area when instructed", async () => {
    spyOn(checker, 'findNearby').and.callFake((location) => {
      switch (location) {
        case location1:
          return Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.INSIDE }]);
        case location2:
          return Promise.resolve([{ aoi: aoi, proximity: GeofencingProximity.NEARBY }]);
      }
    });

    const invocationEvent = createEvent('locationAcquired', {
      data: [location1, location2],
    });

    const done = listenToEventTrigger('geolocationCloseToAoIAcquired', invocationEvent.id);
    task.run({ nearbyRange, offset, includeNearby: true }, invocationEvent);
    await done;
    const resultingLocations = await done;

    expect(resultingLocations.length).toBe(2);
    expect(resultingLocations[0]).toEqual({ ...location1 });
    expect(resultingLocations[1]).toEqual({ ...location2 });
  });
});

function createFakeLocation(option = 0): Geolocation {
  switch (option) {
    case 0:
      return new Geolocation(39.9938, -0.0736, 50, 10, 10, 0, 0, new Date());
    case 1:
      return new Geolocation(39.9962, -0.0721, 86, 12, 12, 0, 0, new Date());
  }
  return new Geolocation(39.9938, -0.0736, 50, 10, 10, 0, 0, new Date());
}

function createAreaOfInterest(id: string): AreaOfInterest {
  return {
    id,
    name: `Area of interest (${id})`,
    latitude: 39.9938,
    longitude: -0.0736,
    radius: 50,
  };
}
