import { PullProvider } from '@awarns/core/internal/providers';
import { BatchPullProviderTask } from '@awarns/core/internal/tasks/data-collection/pull-based';
import { createPullProviderMock } from './common.spec';
import { Geolocation } from '@awarns/core/internal/providers/geolocation/geolocation';
import { RecordType } from '@awarns/core/internal/providers/base-record';
import { ProviderInterrupter } from '@awarns/core/internal/providers/provider-interrupter';
import { createEvent, listenToEventTrigger } from 'nativescript-task-dispatcher/testing/events';
import { TaskDispatcherEvent } from 'nativescript-task-dispatcher/internal/events';

describe('Batch pull-based provider task', () => {
  let provider: PullProvider;
  let task: BatchPullProviderTask;

  beforeEach(() => {
    provider = createPullProviderMock();
    task = new BatchPullProviderTask(provider, 'Phone');
  });

  it('should have a predictable name', () => {
    expect(task.name).toEqual('acquireMultiplePhoneGeolocation');
  });

  it('runs and generates an event with multiple measurements collected', async () => {
    spyOn(provider, 'next').and.callFake(() => {
      return [new Promise((resolve) => setTimeout(() => resolve(createFakeGeolocation()), 200)), () => null];
    });

    const igniter = createEvent('fake', {
      expirationTimestamp: Date.now() + 1000,
    });
    const done = listenToGeolocationAcquiredEvent(igniter.id);

    task.run({}, igniter);
    const acquiredData = await done;
    expect(acquiredData.length).toBe(4);
    for (let i = 0; i < 4; i++) {
      expect(acquiredData[i].type).toEqual(RecordType.Geolocation);
    }
  });

  it('allows to limit the frequency at which measurements should be collected at maximum', async () => {
    spyOn(provider, 'next').and.callFake(() => {
      return [new Promise((resolve) => setTimeout(() => resolve(createFakeGeolocation()), 200)), () => null];
    });

    const igniter = createEvent('fake', {
      expirationTimestamp: Date.now() + 1000,
    });
    const done = listenToGeolocationAcquiredEvent(igniter.id);

    task.run({ maxInterval: 400 }, igniter);
    const acquiredData = await done;
    expect(acquiredData.length).toBe(2);
    for (let i = 0; i < 2; i++) {
      expect(acquiredData[i].type).toEqual(RecordType.Geolocation);
    }
  });

  it('throws an error and finishes the task chain when no record is obtained', async () => {
    spyOn(provider, 'next').and.callFake(() => {
      return [new Promise((_, reject) => setTimeout(() => reject('Could not get location!'), 200)), () => null];
    });

    const igniter = createEvent('fake', {
      expirationTimestamp: Date.now() + 1000,
    });

    const runPromise = task.run({}, igniter);
    await expectAsync(runPromise).toBeRejectedWithError('Provider failed to report any records!');
  });

  it('gracefully finishes when timeout rises', async () => {
    spyOn(provider, 'next').and.callFake(() => {
      const interrupter = new ProviderInterrupter();
      const promise = new Promise<Geolocation>((resolve) => {
        const listenerId = setTimeout(() => resolve(createFakeGeolocation()), 10000);
        interrupter.interruption = () => {
          clearTimeout(listenerId);
          resolve(null);
        };
      });

      return [promise, () => interrupter.interrupt()];
    });

    const igniter = createEvent('fake', {
      expirationTimestamp: Date.now() + 1000,
    });

    const done = listenToEventTrigger(TaskDispatcherEvent.TaskChainFinished, igniter.id);

    task.run({}, igniter);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
    task.cancel();

    await done;
  });

  it('indicates the underlying provider to stop collecting data on cancel', async () => {
    const interrupter = jasmine.createSpy();
    spyOn(provider, 'next').and.callFake(() => {
      return [
        new Promise((resolve) =>
          setTimeout(
            () => resolve(createFakeGeolocation()),

            200
          )
        ),
        interrupter,
      ];
    });

    const runPromise = task.run({}, createEvent('fake', { expirationTimestamp: Date.now() + 1000 }));
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 300));
    task.cancel();
    await runPromise;

    expect(interrupter).toHaveBeenCalled();
  });
});

function createFakeGeolocation(): Geolocation {
  return new Geolocation(0.0, 0.0, 0, 0, 0, 0, 0, new Date());
}

async function listenToGeolocationAcquiredEvent(id: string): Promise<Array<Geolocation>> {
  const data = await listenToEventTrigger('geolocationAcquired', id);
  return data as Array<Geolocation>;
}
