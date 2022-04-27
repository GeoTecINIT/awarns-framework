import { AreasOfInterestStore, areasOfInterestStoreDB } from '@awarns/core/internal/persistence/stores/geofencing/aois';
import { AreaOfInterest } from '@awarns/core/internal/tasks/geofencing/aoi';

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

  it('allows to get all the stored areas of interest', async () => {
    await store.insert(expectedAoIs);
    const aois = await store.getAll();

    expect(aois.length).toBe(3);
    expect(aois.find((aoi) => aoi.id === aoi1.id)).not.toBeUndefined();
    expect(aois.find((aoi) => aoi.id === aoi2.id)).not.toBeUndefined();
    expect(aois.find((aoi) => aoi.id === aoi3.id)).not.toBeUndefined();
  });

  afterEach(async () => {
    await store.deleteAll();
  });
});
