import { Geolocation } from '@awarns/geolocation';
import { AoIProximityChangeType, AreaOfInterest, GeofencingProximity } from '@awarns/geofencing/internal/entities';
import { AreasOfInterestStore, GeofencingStateStore } from '@awarns/geofencing/internal/persistence';
import { GeofencingChecker } from '@awarns/geofencing/internal/checker';
import { GeofencingTask } from '@awarns/geofencing/internal/task';
import { DispatchableEvent } from '@awarns/core/events';
import {
  createAreasOfInterestStoreMock,
  createGeofencingCheckerMock,
  createGeofencingStateStoreMock,
} from './common.spec';
import { Change } from '@awarns/core/entities';
import { createEvent, listenToEventTrigger } from '@awarns/core/testing/events';

describe('Geofencing task', () => {
  const location = createFakeLocation();
  const nearbyRange = 100;
  const offset = 15;
  const aoi1 = createAreaOfInterest('aoi1');
  const aoi2 = createAreaOfInterest('aoi2');

  let invocationEvent: DispatchableEvent;
  let state: GeofencingStateStore;
  let checker: GeofencingChecker;
  let aoisStore: AreasOfInterestStore;
  let task: GeofencingTask;

  beforeEach(() => {
    invocationEvent = createEvent('locationAcquired', {
      data: location,
    });
    state = createGeofencingStateStoreMock();
    checker = createGeofencingCheckerMock();
    aoisStore = createAreasOfInterestStoreMock();
    task = new GeofencingTask('checkAreaOfInterestProximity', {}, state, checker, aoisStore);
    spyOn(state, 'updateProximity');
    spyOn(aoisStore, 'getAll').and.returnValue(Promise.resolve([aoi1, aoi2]));
  });

  it('outputs a default event when no area is nearby and no area was nearby', async () => {
    spyOn(checker, 'findNearby').withArgs(location, nearbyRange, offset).and.returnValue(Promise.resolve([]));
    spyOn(state, 'getKnownNearbyAreas').and.returnValue(Promise.resolve([]));

    const done = listenToEventTrigger('checkAreaOfInterestProximityFinished', invocationEvent.id);

    task.run({ nearbyRange, offset }, invocationEvent);
    await done;
    expect(checker.findNearby).toHaveBeenCalled();
  });

  it('outputs a default event when no area is nearby and no area was nearby a given trajectory', async () => {
    spyOn(checker, 'findNearbyTrajectory')
      .withArgs([location, location], nearbyRange, offset)
      .and.returnValue(Promise.resolve([]));
    spyOn(state, 'getKnownNearbyAreas').and.returnValue(Promise.resolve([]));

    const invocationEvent = createEvent('locationAcquired', {
      data: [location, location],
    });
    const done = listenToEventTrigger('checkAreaOfInterestProximityFinished', invocationEvent.id);

    task.run({ nearbyRange, offset }, invocationEvent);
    await done;
    expect(checker.findNearbyTrajectory).toHaveBeenCalled();
  });

  it("outputs a 'movedAwayFromAreaOfInterest' event when there was an area nearby but no longer it is", async () => {
    spyOn(checker, 'findNearby').withArgs(location, nearbyRange, offset).and.returnValue(Promise.resolve([]));
    spyOn(state, 'getKnownNearbyAreas').and.returnValue(
      Promise.resolve([{ id: aoi1.id, proximity: GeofencingProximity.NEARBY }])
    );

    const done = listenToEventTrigger('movedAwayFromAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.NEARBY,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.OUTSIDE);
  });

  it("outputs a 'movedAwayFromAreaOfInterest' event when there were multiple areas nearby but they are no longer there", async () => {
    spyOn(checker, 'findNearby').withArgs(location, nearbyRange, offset).and.returnValue(Promise.resolve([]));
    spyOn(state, 'getKnownNearbyAreas').and.returnValue(
      Promise.resolve([
        { id: aoi1.id, proximity: GeofencingProximity.NEARBY },
        { id: aoi2.id, proximity: GeofencingProximity.NEARBY },
      ])
    );

    const done = listenToEventTrigger('movedAwayFromAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(2);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.NEARBY,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(aoiProximityChanges[1]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi2,
        GeofencingProximity.NEARBY,
        Change.END,
        aoiProximityChanges[1].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.OUTSIDE);
    expect(state.updateProximity).toHaveBeenCalledWith(aoi2.id, GeofencingProximity.OUTSIDE);
  });

  it("outputs a 'movedOutsideFromAreaOfInterest' event when it was inside an area but no longer it is", async () => {
    spyOn(checker, 'findNearby').withArgs(location, nearbyRange, offset).and.returnValue(Promise.resolve([]));
    spyOn(state, 'getKnownNearbyAreas').and.returnValue(
      Promise.resolve([{ id: aoi1.id, proximity: GeofencingProximity.INSIDE }])
    );

    const done = listenToEventTrigger('movedOutsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
  });

  it("outputs a 'movedOutsideFromAreaOfInterest' event when it was inside multiple areas but no longer it is", async () => {
    spyOn(checker, 'findNearby').withArgs(location, nearbyRange, offset).and.returnValue(Promise.resolve([]));
    spyOn(state, 'getKnownNearbyAreas').and.returnValue(
      Promise.resolve([
        { id: aoi1.id, proximity: GeofencingProximity.INSIDE },
        { id: aoi2.id, proximity: GeofencingProximity.INSIDE },
      ])
    );

    const done = listenToEventTrigger('movedOutsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(2);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(aoiProximityChanges[1]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi2,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[1].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
    expect(state.updateProximity).toHaveBeenCalledWith(aoi2.id, GeofencingProximity.NEARBY);
  });

  it("outputs a 'movedOutsideFromAreaOfInterest' event when it was inside an area and nearby another but no longer it is", async () => {
    spyOn(checker, 'findNearby').withArgs(location, nearbyRange, offset).and.returnValue(Promise.resolve([]));
    spyOn(state, 'getKnownNearbyAreas').and.returnValue(
      Promise.resolve([
        { id: aoi1.id, proximity: GeofencingProximity.INSIDE },
        { id: aoi2.id, proximity: GeofencingProximity.NEARBY },
      ])
    );

    const done = listenToEventTrigger('movedOutsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
    expect(state.updateProximity).not.toHaveBeenCalledWith(aoi2.id, jasmine.anything());
  });

  it("outputs a 'movedCloseToAreaOfInterest' event when it was not close to an area but it is now", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi1, proximity: GeofencingProximity.NEARBY }]));
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.OUTSIDE);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedCloseToAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.NEARBY,
        Change.START,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
  });

  it("outputs a 'movedCloseToAreaOfInterest' event when it was not close to multiple areas but it is now", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(
        Promise.resolve([
          { aoi: aoi1, proximity: GeofencingProximity.NEARBY },
          { aoi: aoi2, proximity: GeofencingProximity.NEARBY },
        ])
      );
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.OUTSIDE);
      }
      if (id === aoi2.id) {
        return Promise.resolve(GeofencingProximity.OUTSIDE);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedCloseToAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(2);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.NEARBY,
        Change.START,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(aoiProximityChanges[1]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi2,
        GeofencingProximity.NEARBY,
        Change.START,
        aoiProximityChanges[1].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
    expect(state.updateProximity).toHaveBeenCalledWith(aoi2.id, GeofencingProximity.NEARBY);
  });

  it("outputs a 'movedInsideAreaOfInterest' event when it was close to an area but now is inside", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi1, proximity: GeofencingProximity.INSIDE }]));
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.NEARBY);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedInsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.START,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.INSIDE);
  });

  it("outputs a 'movedInsideAreaOfInterest' event when it was close to multiple areas but now is inside", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(
        Promise.resolve([
          { aoi: aoi1, proximity: GeofencingProximity.INSIDE },
          { aoi: aoi2, proximity: GeofencingProximity.INSIDE },
        ])
      );
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.NEARBY);
      }
      if (id === aoi2.id) {
        return Promise.resolve(GeofencingProximity.NEARBY);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedInsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(2);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.START,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(aoiProximityChanges[1]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi2,
        GeofencingProximity.INSIDE,
        Change.START,
        aoiProximityChanges[1].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.INSIDE);
    expect(state.updateProximity).toHaveBeenCalledWith(aoi2.id, GeofencingProximity.INSIDE);
  });

  it("outputs a 'movedInsideAreaOfInterest' event when it was close to an area but now is inside it and close to another", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(
        Promise.resolve([
          { aoi: aoi1, proximity: GeofencingProximity.INSIDE },
          { aoi: aoi2, proximity: GeofencingProximity.NEARBY },
        ])
      );
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.NEARBY);
      }
      if (id === aoi2.id) {
        return Promise.resolve(GeofencingProximity.OUTSIDE);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedInsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.START,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.INSIDE);
    expect(state.updateProximity).not.toHaveBeenCalledWith(aoi2.id, GeofencingProximity.NEARBY);
  });

  it("outputs a 'movedOutsideAreaOfInterest' event when it was inside to an area but now is nearby", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi1, proximity: GeofencingProximity.NEARBY }]));
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.INSIDE);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedOutsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
  });

  it("outputs a 'movedOutsideAreaOfInterest' event when it was inside multiple areas but now is nearby", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(
        Promise.resolve([
          { aoi: aoi1, proximity: GeofencingProximity.NEARBY },
          { aoi: aoi2, proximity: GeofencingProximity.NEARBY },
        ])
      );
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.INSIDE);
      }
      if (id === aoi2.id) {
        return Promise.resolve(GeofencingProximity.INSIDE);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedOutsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(2);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(aoiProximityChanges[1]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi2,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[1].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
    expect(state.updateProximity).toHaveBeenCalledWith(aoi2.id, GeofencingProximity.NEARBY);
  });

  it("outputs a 'movedOutsideAreaOfInterest' event when it was inside an area but now is nearby and another is close", async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(
        Promise.resolve([
          { aoi: aoi1, proximity: GeofencingProximity.NEARBY },
          { aoi: aoi2, proximity: GeofencingProximity.NEARBY },
        ])
      );
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.INSIDE);
      }
      if (id === aoi2.id) {
        return Promise.resolve(GeofencingProximity.OUTSIDE);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('movedOutsideAreaOfInterest', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    const aoiProximityChanges = await done;
    expect(aoiProximityChanges.length).toBe(1);
    expect(aoiProximityChanges[0]).toEqual(
      objectContainingAoIProximityChangePropertiesFrom(
        aoi1,
        GeofencingProximity.INSIDE,
        Change.END,
        aoiProximityChanges[0].timestamp
      )
    );
    expect(state.updateProximity).toHaveBeenCalledWith(aoi1.id, GeofencingProximity.NEARBY);
    expect(state.updateProximity).not.toHaveBeenCalledWith(aoi2.id, GeofencingProximity.NEARBY);
  });

  it('outputs a default event when it was close to an area and still it is', async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi1, proximity: GeofencingProximity.NEARBY }]));
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.NEARBY);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('checkAreaOfInterestProximityFinished', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    await done;
  });

  it('outputs a default event when it was inside an area and still it is', async () => {
    spyOn(checker, 'findNearby')
      .withArgs(location, nearbyRange, offset)
      .and.returnValue(Promise.resolve([{ aoi: aoi1, proximity: GeofencingProximity.INSIDE }]));
    spyOn(state, 'getProximity').and.callFake((id) => {
      if (id === aoi1.id) {
        return Promise.resolve(GeofencingProximity.INSIDE);
      }
      return Promise.reject(`Unexpected id: ${id}`);
    });

    const done = listenToEventTrigger('checkAreaOfInterestProximityFinished', invocationEvent.id);
    task.run({ nearbyRange, offset }, invocationEvent);
    await done;
  });
});

function createFakeLocation(): Geolocation {
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

function objectContainingAoIProximityChangePropertiesFrom(
  aoi: AreaOfInterest,
  proximity: GeofencingProximity,
  change: Change,
  timestamp: Date
) {
  return jasmine.objectContaining({
    type: AoIProximityChangeType,
    timestamp,
    change,
    aoi,
    proximity,
  });
}
