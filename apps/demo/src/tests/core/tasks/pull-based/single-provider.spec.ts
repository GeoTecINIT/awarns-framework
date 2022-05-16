import { PullProvider } from '@awarns/core/providers';
import { SinglePullProviderTask } from '@awarns/core/internal/tasks/pull-based';
import { createPullProviderMock, SampleRecord, SampleRecordType } from './common.spec';
import { createEvent, listenToEventTrigger } from '@awarns/core/testing/events';

describe('Single pull-based provider task', () => {
  let provider: PullProvider;
  let task: SinglePullProviderTask;

  beforeEach(() => {
    provider = createPullProviderMock();
    task = new SinglePullProviderTask(provider, 'Fake');
  });

  it('should have a predictable name', () => {
    expect(task.name).toEqual('acquireFakeSampleRecord');
  });

  it('runs and generates an event with the collected data', async () => {
    const expectedData = new SampleRecord();
    spyOn(provider, 'next').and.returnValue([Promise.resolve(expectedData), () => null]);

    const igniter = createEvent('fake');
    const outputEventName = 'sampleRecordAcquired';
    const done = listenToEventTrigger(outputEventName, igniter.id);

    task.run({}, igniter);
    const acquiredData = (await done) as SampleRecord;
    expect(acquiredData.type).toEqual(SampleRecordType);
  });

  it('indicates the underlying provider to stop collecting data on cancel', async () => {
    const interrupter = jasmine.createSpy();
    spyOn(provider, 'next').and.returnValue([
      new Promise((resolve) => setTimeout(() => resolve(null), 2000)),
      interrupter,
    ]);

    const runPromise = task.run({}, createEvent('fake'));
    const cancelPromise = new Promise<void>((resolve) =>
      setTimeout(() => {
        task.cancel();
        resolve();
      })
    );
    await runPromise;
    await cancelPromise;

    expect(interrupter).toHaveBeenCalled();
  });
});
