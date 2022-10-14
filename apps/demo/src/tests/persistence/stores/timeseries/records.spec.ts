import { localRecordsStore as store } from '@awarns/persistence/internal/stores/timeseries/records/store';
import { Change, Record } from '@awarns/core/entities';

import { Geolocation, GeolocationType } from '@awarns/geolocation';
import { HumanActivity, HumanActivityChange } from '@awarns/human-activity';
import { AoIProximityChange, AoIProximityChangeType, AreaOfInterest, GeofencingProximity } from '@awarns/geofencing';
import { QuestionnaireAnswer, QuestionnaireAnswers } from '@awarns/notifications';

import { firstValueFrom, lastValueFrom, toArray } from 'rxjs';
import { take } from 'rxjs/operators';

describe('Records store', () => {
  const answers: Array<QuestionnaireAnswer> = [
    {
      title: 'Answer 1',
      millisecondsToAnswer: 1000,
      answer: 3,
    },
  ];

  const aoi1: AreaOfInterest = {
    id: 'aoi1',
    name: 'Area of Interest 1',
    latitude: 39.2,
    longitude: -0.2,
    radius: 20,
  };

  const aoi2: AreaOfInterest = {
    id: 'aoi2',
    name: 'Area of Interest 2',
    latitude: 40.7,
    longitude: -0.4,
    radius: 30,
  };

  const records: Array<Record> = [
    new Geolocation(39.1, -0.1, 122, 10.1, 10.1, 12.4, 175.9, nowMinus(5)),
    new HumanActivityChange(HumanActivity.STILL, Change.START, nowMinus(4)),
    new Geolocation(39.2, -0.2, 120, 13.1, 13.1, 10.4, 60.7, nowMinus(3)),
    new AoIProximityChange(aoi1, GeofencingProximity.NEARBY, Change.END, nowMinus(2)),
    new QuestionnaireAnswers('qs1', answers, 53, nowMinus(1)),
    new AoIProximityChange(aoi2, GeofencingProximity.INSIDE, Change.START, nowMinus(0)),
  ];

  beforeAll(async () => {
    await store.clear();
  });

  it('allows to insert a record', async () => {
    await store.insert(records[0]);
  });

  it('allows to query all stored records', async () => {
    for (const record of records) {
      await store.insert(record);
    }

    const storedRecords = await firstValueFrom(store.list());

    expect(storedRecords.length).toBe(6);
    expect({ ...storedRecords[0] }).toEqual({ ...records[5] });
    expect({ ...storedRecords[1] }).toEqual({ ...records[4] });
    expect({ ...storedRecords[2] }).toEqual({ ...records[3] });
    expect({ ...storedRecords[3] }).toEqual({ ...records[2] });
    expect({ ...storedRecords[4] }).toEqual({ ...records[1] });
    expect({ ...storedRecords[5] }).toEqual({ ...records[0] });
  });

  it('allows to listen to stored records changes', async () => {
    await store.insert(records[0]);
    await store.insert(records[1]);

    const lastUpdate = lastValueFrom(store.list().pipe(take(2)));
    store.insert(records[2]);
    const storedRecords = await lastUpdate;

    expect(storedRecords.length).toBe(3);
    expect({ ...storedRecords[0] }).toEqual({ ...records[2] });
  });

  it('allows to limit the amount of records to be listed', async () => {
    await store.insert(records[0]);
    await store.insert(records[1]);

    const lastUpdate = lastValueFrom(store.list(2).pipe(take(2)));
    store.insert(records[2]);
    const storedRecords = await lastUpdate;

    expect(storedRecords.length).toBe(2);
    expect({ ...storedRecords[0] }).toEqual({ ...records[2] });
    expect({ ...storedRecords[1] }).toEqual({ ...records[1] });
  });

  it('allows to recover all the stored records from the oldest to the newest', async () => {
    for (const record of records) {
      await store.insert(record);
    }

    const storedRecords = await store.getAll();

    expect(storedRecords.length).toBe(6);
    expect({ ...storedRecords[0] }).toEqual({ ...records[0] });
    expect({ ...storedRecords[1] }).toEqual({ ...records[1] });
    expect({ ...storedRecords[2] }).toEqual({ ...records[2] });
    expect({ ...storedRecords[3] }).toEqual({ ...records[3] });
    expect({ ...storedRecords[4] }).toEqual({ ...records[4] });
    expect({ ...storedRecords[5] }).toEqual({ ...records[5] });
  });

  it('allows to query the latest record of a type', async () => {
    await store.insert(records[3]);
    await store.insert(records[4]);

    const lastAoIChange = await firstValueFrom(store.listLast(AoIProximityChangeType));

    expect({ ...lastAoIChange }).toEqual({ ...records[3] });
  });

  it('returns undefined when querying for a latest record and none meets the condition', async () => {
    await store.insert(records[4]);

    const lastAoIChange = await firstValueFrom(store.listLast(AoIProximityChangeType));

    expect(lastAoIChange).toBeUndefined();
  });

  it('allows to query changes in the latest record of a type', async () => {
    await store.insert(records[3]);

    const changesPromise = firstValueFrom(store.listLast(AoIProximityChangeType).pipe(take(2), toArray()));
    await store.insert(records[4]);
    await store.insert(records[5]);
    const changes = await changesPromise;

    expect(changes.length).toBe(2);
    expect({ ...changes[0] }).toEqual({ ...records[3] });
    expect({ ...changes[1] }).toEqual({ ...records[5] });
  });

  it('allows to query the latest record of a type filtering by a top level property value', async () => {
    await store.insert(records[3]);
    await store.insert(records[4]);
    await store.insert(records[5]);

    const lastAoIChange = await firstValueFrom(
      store.listLast(AoIProximityChangeType, [
        {
          property: 'proximity',
          comparison: '=',
          value: GeofencingProximity.NEARBY,
        },
      ])
    );

    expect({ ...lastAoIChange }).toEqual({ ...records[3] });
  });

  it('allows to query the latest record of a type filtering by a nested property value', async () => {
    await store.insert(records[3]);
    await store.insert(records[4]);
    await store.insert(records[5]);

    const lastAoIChange = await firstValueFrom(
      store.listLast(AoIProximityChangeType, [
        {
          property: 'aoi.id',
          comparison: '=',
          value: 'aoi1',
        },
      ])
    );

    expect({ ...lastAoIChange }).toEqual({ ...records[3] });
  });

  it('allows to list the last records of a type by their unique property values', async () => {
    for (const record of records) {
      await store.insert(record);
    }
    const newAoIChange = new AoIProximityChange(aoi1, GeofencingProximity.NEARBY, Change.START);
    await store.insert(newAoIChange);

    const lastGrouped = await firstValueFrom(store.listLastGroupedBy(AoIProximityChangeType, 'aoi.id'));

    expect(lastGrouped.length).toBe(2);
    expect({ ...lastGrouped[0] }).toEqual({ ...newAoIChange });
    expect({ ...lastGrouped[1] }).toEqual({ ...records[5] });
  });

  it('allows to list the last records of a type by their unique property values, conditionally filtered', async () => {
    for (const record of records) {
      await store.insert(record);
    }
    await store.insert(new AoIProximityChange(aoi2, GeofencingProximity.INSIDE, Change.END));
    const newAoIChange = new AoIProximityChange(aoi2, GeofencingProximity.NEARBY, Change.START);
    await store.insert(newAoIChange);

    const lastGrouped = await firstValueFrom(
      store.listLastGroupedBy(AoIProximityChangeType, 'aoi.id', [
        {
          property: 'proximity',
          comparison: '=',
          value: GeofencingProximity.NEARBY,
        },
      ])
    );

    expect(lastGrouped.length).toBe(2);
    expect({ ...lastGrouped[0] }).toEqual({ ...newAoIChange });
    expect({ ...lastGrouped[1] }).toEqual({ ...records[3] });
  });

  it('allows to list all records of a given type from the newest to the oldest', async () => {
    for (const record of records) {
      await store.insert(record);
    }

    const aoiChanges = await firstValueFrom(store.listBy(AoIProximityChangeType));

    expect(aoiChanges.length).toBe(2);
    expect({ ...aoiChanges[0] }).toEqual({ ...records[5] });
    expect({ ...aoiChanges[1] }).toEqual({ ...records[3] });
  });

  it('allows to list all records of a given type from the oldest to the newest', async () => {
    for (const record of records) {
      await store.insert(record);
    }

    const aoiChanges = await firstValueFrom(store.listBy(AoIProximityChangeType, 'asc'));

    expect(aoiChanges.length).toBe(2);
    expect({ ...aoiChanges[0] }).toEqual({ ...records[3] });
    expect({ ...aoiChanges[1] }).toEqual({ ...records[5] });
  });

  it('allows to list all records of a given type filtered by a certain condition', async () => {
    for (const record of records) {
      await store.insert(record);
    }

    const aoiChanges = await firstValueFrom(
      store.listBy(AoIProximityChangeType, 'asc', [
        {
          property: 'change',
          comparison: '=',
          value: Change.END,
        },
      ])
    );

    expect(aoiChanges.length).toBe(1);
    expect({ ...aoiChanges[0] }).toEqual({ ...records[3] });
  });

  it('allows to listen to updates of records of a given type', async () => {
    const changesPromise = firstValueFrom(store.listBy(AoIProximityChangeType).pipe(take(3), toArray()));
    await store.insert(records[3]);
    await store.insert(records[4]);
    await store.insert(records[5]);
    const changes = await changesPromise;

    expect(changes.length).toBe(3);
    expect(changes[0].length).toBe(0);
    expect(changes[1].length).toBe(1);
    expect(changes[2].length).toBe(2);

    expect({ ...changes[1][0] }).toEqual({ ...records[3] });

    expect({ ...changes[2][0] }).toEqual({ ...records[5] });
    expect({ ...changes[2][1] }).toEqual({ ...records[3] });
  });

  it('allows to delete records of a given type', async () => {
    await store.insert(records[0]);
    await store.insert(records[1]);
    await store.insert(records[2]);
    await store.insert(records[3]);

    await store.deleteBy(GeolocationType);

    const remainingRecords = await store.getAll();
    const geolocationRecords = await firstValueFrom(store.listBy(GeolocationType));

    expect(remainingRecords.length).toBe(2);
    expect({ ...remainingRecords[0] }).toEqual({ ...records[1] });
    expect({ ...remainingRecords[1] }).toEqual({ ...records[3] });
    expect(geolocationRecords.length).toBe(0);
  });

  it('allows to query unsynced records sorted by ascending timestamp', async () => {
    await store.insert(records[0]);
    await store.insert(records[1]);

    const unsyncedRecords = await store.getNotSynchronized();

    expect(unsyncedRecords.length).toBe(2);
    expect({ ...unsyncedRecords[0] }).toEqual({ ...records[0] });
    expect({ ...unsyncedRecords[1] }).toEqual({ ...records[1] });
  });

  it('allows to mark records as synced', async () => {
    for (const record of records) {
      await store.insert(record);
    }

    const unsyncedRecords = await store.getNotSynchronized();

    for (const unsyncedRecord of unsyncedRecords) {
      await store.markAsSynchronized(unsyncedRecord);
    }

    const empty = await store.getNotSynchronized();
    expect(empty.length).toBe(0);

    const storedRecords = await store.getAll();

    expect(storedRecords.length).toBe(6);
    expect({ ...storedRecords[0] }).toEqual({ ...records[0] });
    expect({ ...storedRecords[1] }).toEqual({ ...records[1] });
    expect({ ...storedRecords[2] }).toEqual({ ...records[2] });
    expect({ ...storedRecords[3] }).toEqual({ ...records[3] });
    expect({ ...storedRecords[4] }).toEqual({ ...records[4] });
    expect({ ...storedRecords[5] }).toEqual({ ...records[5] });
  });

  it('allows to clear old records given a min age', async () => {
    const oldRecord1 = new HumanActivityChange(HumanActivity.RUNNING, Change.END, nowMinus(60 * 60 + 1));
    const oldRecord2 = new HumanActivityChange(HumanActivity.STILL, Change.START, nowMinus(60 * 60 + 1));
    const oldRecord3 = new HumanActivityChange(HumanActivity.RUNNING, Change.START, nowMinus(60 * 60 - 1));

    await store.insert(oldRecord1);
    await store.markAsSynchronized(oldRecord1);
    await store.insert(oldRecord2);
    await store.insert(oldRecord3);
    await store.markAsSynchronized(oldRecord3);
    await store.insert(records[0]);

    await store.clearOld(1);

    const remainingRecords = await store.getAll();
    expect(remainingRecords.length).toBe(3);
    expect({ ...remainingRecords[0] }).toEqual({ ...oldRecord2 });
    expect({ ...remainingRecords[1] }).toEqual({ ...oldRecord3 });
    expect({ ...remainingRecords[2] }).toEqual({ ...records[0] });
  });

  afterEach(async () => {
    await store.clear();
  });
});

function nowMinus(seconds: number) {
  const millis = seconds * 1000;
  return new Date(Date.now() - millis);
}
