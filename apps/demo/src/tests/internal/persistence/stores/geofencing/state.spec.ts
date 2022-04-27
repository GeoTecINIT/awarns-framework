import { GeofencingStateStore, geofencingStateStoreDB } from '@awarns/core/internal/persistence/stores/geofencing/state';
import { GeofencingProximity } from '@awarns/core/internal/tasks/geofencing/geofencing-state';

describe('Geofencing state store', () => {
  const store: GeofencingStateStore = geofencingStateStoreDB;

  beforeAll(async () => {
    await store.clear();
  });

  it('allows to update the proximity state of an area of interest given its id', async () => {
    await store.updateProximity('aoi1', GeofencingProximity.INSIDE);
  });

  it('allows to recover the proximity state of an known area of interest', async () => {
    const id = 'aoi2';
    const expectedProximity = GeofencingProximity.NEARBY;
    await store.updateProximity(id, expectedProximity);
    const proximityState = await store.getProximity(id);

    expect(proximityState).toEqual(expectedProximity);
  });

  it('returns the state to be outside for an non-visited area of interest', async () => {
    const proximityState = await store.getProximity('aoi3');
    expect(proximityState).toEqual(GeofencingProximity.OUTSIDE);
  });

  it('returns the state to be outside for a previously visited area of interest', async () => {
    const id = 'aoi1';
    await store.updateProximity(id, GeofencingProximity.NEARBY);
    await store.updateProximity(id, GeofencingProximity.OUTSIDE);
    const proximityState = await store.getProximity(id);

    expect(proximityState).toEqual(GeofencingProximity.OUTSIDE);
  });

  it('returns all known nearby places (ids)', async () => {
    await store.updateProximity('aoi1', GeofencingProximity.NEARBY);
    await store.updateProximity('aoi2', GeofencingProximity.INSIDE);

    const nearbyAreas = await store.getKnownNearbyAreas();
    expect(nearbyAreas.length).toBe(2);
    expect(nearbyAreas.find((area) => area.id === 'aoi1')).not.toBeUndefined();
    expect(nearbyAreas.find((area) => area.id === 'aoi2')).not.toBeUndefined();
  });

  afterEach(async () => {
    await store.clear();
  });
});
