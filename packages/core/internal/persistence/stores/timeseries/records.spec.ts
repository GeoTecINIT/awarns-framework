import { localRecordsStore as store } from './records';
import { Record, Change } from '../../../providers';

import { Geolocation } from '../../../providers/geolocation/geolocation';
import { HumanActivity, HumanActivityChange } from '../../../providers/activity-recognition/human-activity-change';
import { AoIProximityChange } from '../../../tasks/geofencing/aoi';
import { GeofencingProximity } from '../../../tasks/geofencing/geofencing-state';
import { QuestionnaireAnswers, QuestionnaireAnswer } from '../../../tasks/notifications/questionnaire-answers';

import { firstValueFrom, lastValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';

describe('Records store', () => {
  const answers: Array<QuestionnaireAnswer> = [
    {
      title: 'Answer 1',
      millisecondsToAnswer: 1000,
      answer: 3,
    },
  ];

  const records: Array<Record> = [
    new Geolocation(39.1, -0.1, 122, 10.1, 10.1, 12.4, 175.9, nowMinus(5)),
    new HumanActivityChange(HumanActivity.STILL, Change.START, nowMinus(4)),
    new Geolocation(39.2, -0.2, 120, 13.1, 13.1, 10.4, 60.7, nowMinus(3)),
    new AoIProximityChange(
      {
        id: 'aoi1',
        name: 'Area of Interest 1',
        latitude: 39.2,
        longitude: -0.2,
        radius: 20,
      },
      GeofencingProximity.INSIDE,
      Change.START,
      nowMinus(2)
    ),
    new QuestionnaireAnswers('qs1', answers, 53, nowMinus(1)),
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

    expect(storedRecords.length).toBe(5);
    expect({ ...storedRecords[0] }).toEqual({ ...records[4] });
    expect({ ...storedRecords[1] }).toEqual({ ...records[3] });
    expect({ ...storedRecords[2] }).toEqual({ ...records[2] });
    expect({ ...storedRecords[3] }).toEqual({ ...records[1] });
    expect({ ...storedRecords[4] }).toEqual({ ...records[0] });
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

    expect(storedRecords.length).toBe(5);
    expect({ ...storedRecords[0] }).toEqual({ ...records[0] });
    expect({ ...storedRecords[1] }).toEqual({ ...records[1] });
    expect({ ...storedRecords[2] }).toEqual({ ...records[2] });
    expect({ ...storedRecords[3] }).toEqual({ ...records[3] });
    expect({ ...storedRecords[4] }).toEqual({ ...records[4] });
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

    expect(storedRecords.length).toBe(5);
    expect({ ...storedRecords[0] }).toEqual({ ...records[0] });
    expect({ ...storedRecords[1] }).toEqual({ ...records[1] });
    expect({ ...storedRecords[2] }).toEqual({ ...records[2] });
    expect({ ...storedRecords[3] }).toEqual({ ...records[3] });
    expect({ ...storedRecords[4] }).toEqual({ ...records[4] });
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
