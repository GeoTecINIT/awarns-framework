import { AreasOfInterestStore, areasOfInterestStoreDB } from '@awarns/geofencing/internal/persistence';
import { AreaOfInterest } from '@awarns/geofencing/internal/entities';
import { firstValueFrom, toArray } from 'rxjs';
import { take } from 'rxjs/operators';

describe('Areas of interest store', () => {
  const store: AreasOfInterestStore = areasOfInterestStoreDB;

  const aoi1: AreaOfInterest = {
    id: 'aoi1',
    name: 'First area of interest',
    latitude: 39.99354882787191,
    longitude: -0.07315456867218018,
    radius: 200,
    category: 'none',
    level: 0,
  };

  const aoi2: AreaOfInterest = {
    id: 'aoi2',
    name: 'Second area of interest',
    latitude: 39.99287893193948,
    longitude: -0.07160425186157227,
    radius: 150,
    category: 'none',
    level: 0,
  };

  const aoi3: AreaOfInterest = {
    id: 'aoi3',
    name: 'Third area of interest',
    latitude: 39.99349540083008,
    longitude: -0.06983399391174316,
    radius: 50,
    category: 'none',
    level: 1,
  };

  const expectedAoIs = [aoi1, aoi2, aoi3];

  beforeAll(async () => {
    await store.deleteAll();
  });

  it('allows to insert one area of interest', async () => {
    await store.insert([aoi1]);
  });

  it('allows to insert many areas of interest', async () => {
    await store.insert(expectedAoIs);
  });

  it('allows to retrieve one area of interest by its id', async () => {
    await store.insert([aoi1]);
    const result = await store.getById(aoi1.id);
    expect(result.id).toEqual(aoi1.id);
  });

  it('allows to get all the stored areas of interest', async () => {
    await store.insert(expectedAoIs);
    const aois = await store.getAll();

    expect(aois.length).toBe(3);
    expect(aois.find((aoi) => aoi.id === aoi1.id)).not.toBeUndefined();
    expect(aois.find((aoi) => aoi.id === aoi2.id)).not.toBeUndefined();
    expect(aois.find((aoi) => aoi.id === aoi3.id)).not.toBeUndefined();
  });

  it('allows to subscribe to changes in the areas of interest', async () => {
    await store.insert([aoi1]);
    const updatesPromise = firstValueFrom(store.list().pipe(take(3), toArray()));
    await store.deleteAll();
    await store.insert([aoi1, aoi2]);

    const updates = await updatesPromise;

    expect(updates.length).toBe(3);
    expect(updates[0].length).toBe(1);
    expect(updates[1].length).toBe(0);
    expect(updates[2].length).toBe(2);

    expect(updates[0][0].id).toEqual(aoi1.id);
    expect(updates[2][0].id).toEqual(aoi1.id);
    expect(updates[2][1].id).toEqual(aoi2.id);
  });

  afterEach(async () => {
    await store.deleteAll();
  });
});
