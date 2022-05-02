import { Trace, TraceResult, TraceType } from '@awarns/tracing';

import { localTracesStore as store } from '@awarns/tracing/internal/stores/store';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';
import { uuid } from 'nativescript-task-dispatcher/internal/utils/uuid';

describe('Traces store', () => {
  const createFakeTrace = fakeTraceCreator();

  const traces: Array<Trace> = [
    createFakeTrace(TraceType.EVENT, 'userStartedBeingStill', TraceResult.OK, { someEvtData: "it's ok" }),
    createFakeTrace(TraceType.TASK, 'acquirePhoneGeolocation', TraceResult.OK, {
      invokedBy: 'taskSchedulerRun',
      took: 15000,
      timestamp: new Date(),
      output: { someLocationData: {} },
    }),
    createFakeTrace(TraceType.TASK, 'acquirePhoneGeolocation', TraceResult.ERROR, {
      invokedBy: 'taskSchedulerRun',
      took: 55000,
      message: 'GPS did not return a fix',
    }),
  ];

  beforeAll(async () => {
    await store.clear();
  });

  it('allows to insert a trace', async () => {
    await store.insert(traces[0]);
  });

  it('allows to query all stored traces', async () => {
    for (const trace of traces) {
      await store.insert(trace);
    }

    const storedTraces = await firstValueFrom(store.list());

    expect(storedTraces.length).toBe(3);
    expect(storedTraces[0]).toEqual(traces[2]);
    expect(storedTraces[1]).toEqual(traces[1]);
    expect(storedTraces[2]).toEqual(traces[0]);
  });

  it('allows to listen to stored traces changes', async () => {
    await store.insert(traces[0]);
    await store.insert(traces[1]);

    const lastUpdate = lastValueFrom(store.list().pipe(take(2)));
    store.insert(traces[2]);
    const storedTraces = await lastUpdate;

    expect(storedTraces.length).toBe(3);
    expect(storedTraces[0]).toEqual(traces[2]);
  });

  it('allows to limit the amount of records to be listened', async () => {
    await store.insert(traces[0]);
    await store.insert(traces[1]);

    const lastUpdate = lastValueFrom(store.list(2).pipe(take(2)));
    store.insert(traces[2]);
    const storedTraces = await lastUpdate;

    expect(storedTraces.length).toBe(2);
    expect(storedTraces[0]).toEqual(traces[2]);
    expect(storedTraces[1]).toEqual(traces[1]);
  });

  it('allows to recover all the stored records from the oldest to the newest', async () => {
    for (const trace of traces) {
      await store.insert(trace);
    }

    const storedTraces = await store.getAll();

    expect(storedTraces.length).toBe(3);
    expect(storedTraces[0]).toEqual(traces[0]);
    expect(storedTraces[1]).toEqual(traces[1]);
    expect(storedTraces[2]).toEqual(traces[2]);
  });

  it('allows to query unsynced traces sorted by ascending timestamp', async () => {
    await store.insert(traces[0]);
    await store.insert(traces[1]);

    const unsyncedTraces = await store.getNotSynchronized();

    expect(unsyncedTraces.length).toBe(2);
    expect(unsyncedTraces[0]).toEqual(traces[0]);
    expect(unsyncedTraces[1]).toEqual(traces[1]);
  });

  it('allows to mark traces as synced', async () => {
    for (const trace of traces) {
      await store.insert(trace);
    }

    const unsyncedTraces = await store.getNotSynchronized();

    for (const unsyncedTrace of unsyncedTraces) {
      await store.markAsSynchronized(unsyncedTrace);
    }

    const empty = await store.getNotSynchronized();
    expect(empty.length).toBe(0);

    const storedTraces = await store.getAll();

    expect(storedTraces.length).toBe(3);
    expect(storedTraces[0]).toEqual(traces[0]);
    expect(storedTraces[1]).toEqual(traces[1]);
    expect(storedTraces[2]).toEqual(traces[2]);
  });

  it('allows to clear old traces given a min age', async () => {
    const oldTrace1 = createFakeTrace(TraceType.EVENT, 'fakeEvent', TraceResult.OK, {});
    oldTrace1.timestamp = nowMinus(7202); // 2 hours and 2 seconds ago

    const oldTrace2 = createFakeTrace(TraceType.EVENT, 'fakeEvent', TraceResult.OK, {});
    oldTrace2.timestamp = nowMinus(7201); // 2 hours and 1 second ago

    const oldTrace3 = createFakeTrace(TraceType.EVENT, 'fakeEvent', TraceResult.OK, {});
    oldTrace3.timestamp = nowMinus(7199); // 1 hour, 59 minutes and 59 seconds ago

    await store.insert(oldTrace1);
    await store.markAsSynchronized(oldTrace1);
    await store.insert(oldTrace2);
    await store.insert(oldTrace3);
    await store.markAsSynchronized(oldTrace3);

    await store.clearOld(2);

    const remainingTraces = await store.getAll();
    expect(remainingTraces.length).toBe(2);
    expect(remainingTraces[0]).toEqual(oldTrace2);
    expect(remainingTraces[1]).toEqual(oldTrace3);
  });

  afterEach(async () => {
    await store.clear();
  });
});

function fakeTraceCreator() {
  let recordCount = 0;
  return (type: TraceType, name: string, result: TraceResult, content: { [key: string]: unknown }): Trace => {
    return {
      timestamp: new Date(Date.now() + recordCount++ * 1000),
      chainId: uuid(),
      type,
      name,
      result,
      content,
    };
  };
}

function nowMinus(seconds: number) {
  const millis = seconds * 1000;
  return new Date(Date.now() - millis);
}
