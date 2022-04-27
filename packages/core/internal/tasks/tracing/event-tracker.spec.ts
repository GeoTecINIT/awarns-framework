import { EventTrackerTask } from './event-tracker';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';
import { TracesStore } from '../../persistence/stores/timeseries';
import { createTracesStoreMock } from './common.spec';
import { TraceResult, TraceType } from './index';
import { createEvent, listenToEventTrigger } from 'nativescript-task-dispatcher/testing/events';

describe('Event tracker task', () => {
  const taskName = 'trackEvent';
  let tracesStore: TracesStore;

  beforeEach(() => {
    tracesStore = createTracesStoreMock();
    spyOn(tracesStore, 'insert');
  });

  it('tracks an event and its data', async () => {
    const fakeEvent = createEvent(taskName, {
      data: { with: 'testData' },
    });

    const eventTracker = new EventTrackerTask('trackEvent', {}, tracesStore);

    const done = listenToTaskFinished(fakeEvent);

    eventTracker.run({}, fakeEvent);
    await done;

    expect(tracesStore.insert).toHaveBeenCalledWith(
      jasmine.objectContaining({
        chainId: fakeEvent.id,
        type: TraceType.EVENT,
        name: fakeEvent.name,
        result: TraceResult.OK,
        content: fakeEvent.data,
      })
    );
  });

  it('tracks a sensitive event without its data', async () => {
    const fakeEvent = createEvent('testEvent', {
      data: { with: 'sensitiveData' },
    });

    const eventTracker = new EventTrackerTask(
      'trackEvent',
      {
        sensitiveData: true,
      },
      tracesStore
    );

    const done = listenToTaskFinished(fakeEvent);

    eventTracker.run({}, fakeEvent);
    await done;

    expect(tracesStore.insert).toHaveBeenCalledWith(
      jasmine.objectContaining({
        chainId: fakeEvent.id,
        type: TraceType.EVENT,
        name: fakeEvent.name,
        result: TraceResult.OK,
        content: {},
      })
    );
  });
});

function listenToTaskFinished(source: DispatchableEvent) {
  return listenToEventTrigger('trackEventFinished', source.id);
}
