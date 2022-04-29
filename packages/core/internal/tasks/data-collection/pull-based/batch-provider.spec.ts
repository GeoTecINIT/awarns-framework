import { PullProvider } from '../../../providers';
import { BatchPullProviderTask } from './index';
import { createPullProviderMock, SampleRecord, SampleRecordType } from './common.spec';
import { ProviderInterrupter } from '../../../providers/provider-interrupter';
import { createEvent, listenToEventTrigger } from 'nativescript-task-dispatcher/testing/events';
import { TaskDispatcherEvent } from 'nativescript-task-dispatcher/internal/events';

describe('Batch pull-based provider task', () => {
  let provider: PullProvider;
  let task: BatchPullProviderTask;

  beforeEach(() => {
    provider = createPullProviderMock();
    task = new BatchPullProviderTask(provider, 'Imaginary');
  });

  it('should have a predictable name', () => {
    expect(task.name).toEqual('acquireMultipleImaginarySampleRecord');
  });

  it('runs and generates an event with multiple measurements collected', async () => {
    spyOn(provider, 'next').and.callFake(() => {
      return [new Promise((resolve) => setTimeout(() => resolve(new SampleRecord()), 200)), () => null];
    });

    const igniter = createEvent('fake', {
      expirationTimestamp: Date.now() + 1000,
    });
    const done = listenToSampleRecordAcquiredEvent(igniter.id);

    task.run({}, igniter);
    const acquiredData = await done;
    expect(acquiredData.length).toBe(4);
    for (let i = 0; i < 4; i++) {
      expect(acquiredData[i].type).toEqual(SampleRecordType);
    }
  });

  it('allows to limit the frequency at which measurements should be collected at maximum', async () => {
    spyOn(provider, 'next').and.callFake(() => {
      return [new Promise((resolve) => setTimeout(() => resolve(new SampleRecord()), 200)), () => null];
    });

    const igniter = createEvent('fake', {
      expirationTimestamp: Date.now() + 1000,
    });
    const done = listenToSampleRecordAcquiredEvent(igniter.id);

    task.run({ maxInterval: 400 }, igniter);
    const acquiredData = await done;
    expect(acquiredData.length).toBe(2);
    for (let i = 0; i < 2; i++) {
      expect(acquiredData[i].type).toEqual(SampleRecordType);
    }
  });

  it('throws an error and finishes the task chain when no record is obtained', async () => {
    spyOn(provider, 'next').and.callFake(() => {
      return [new Promise((_, reject) => setTimeout(() => reject('Could not get a sample!'), 200)), () => null];
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
      const promise = new Promise<SampleRecord>((resolve) => {
        const listenerId = setTimeout(() => resolve(new SampleRecord()), 10000);
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
            () => resolve(new SampleRecord()),

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

async function listenToSampleRecordAcquiredEvent(id: string): Promise<Array<SampleRecord>> {
  const data = await listenToEventTrigger('sampleRecordAcquired', id);
  return data as Array<SampleRecord>;
}
