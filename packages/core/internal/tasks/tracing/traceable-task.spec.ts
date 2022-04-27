import { TracesStore } from '../../persistence/stores/timeseries';
import { createTracesStoreMock } from './common.spec';
import { TraceableTask, TracerConfig, TraceType, TraceResult } from './index';
import { TaskOutcome, TaskParams } from 'nativescript-task-dispatcher/internal/tasks/task';
import { DispatchableEvent, TaskDispatcherEvent } from 'nativescript-task-dispatcher/internal/events';
import { createEvent, listenToEventTrigger } from 'nativescript-task-dispatcher/testing/events';

const dummyTaskName = 'doNothing';
const dummyTaskResult = { secret: 'doNotShare' };
const dummyTaskError = new Error("I've done nothing and still I've failed");

describe('Traceable task', () => {
  let tracesStore: TracesStore;

  beforeEach(() => {
    tracesStore = createTracesStoreMock();
    spyOn(tracesStore, 'insert');
  });

  it('successfully runs and traces its execution and result', async () => {
    const invocationEvent = createEvent('test');

    const traceableTask = new DummyTraceableTask({}, tracesStore, false);

    const done = listenToTaskFinished(invocationEvent);

    traceableTask.run({}, invocationEvent);
    await done;

    expect(tracesStore.insert).toHaveBeenCalledWith(
      jasmine.objectContaining({
        chainId: invocationEvent.id,
        type: TraceType.TASK,
        name: dummyTaskName,
        result: TraceResult.OK,
        content: {
          took: jasmine.anything(),
          invokedBy: invocationEvent.name,
          emitted: `${dummyTaskName}Finished`,
          outcome: dummyTaskResult,
        },
      })
    );
  });

  it('successfully runs and traces its execution and but not its sensitive result', async () => {
    const invocationEvent = createEvent('test');

    const traceableTask = new DummyTraceableTask({ sensitiveData: true }, tracesStore, false);

    const done = listenToTaskFinished(invocationEvent);

    traceableTask.run({}, invocationEvent);
    await done;

    expect(tracesStore.insert).toHaveBeenCalledWith(
      jasmine.objectContaining({
        chainId: invocationEvent.id,
        type: TraceType.TASK,
        name: dummyTaskName,
        result: TraceResult.OK,
        content: {
          took: jasmine.anything(),
          invokedBy: invocationEvent.name,
          emitted: `${dummyTaskName}Finished`,
          outcome: {},
        },
      })
    );
  });

  it('fails to run but traces its execution and its error message', async () => {
    const invocationEvent = createEvent('test');

    const traceableTask = new DummyTraceableTask({}, tracesStore, true);

    const done = listenToTaskFinished(invocationEvent, true);

    traceableTask.run({}, invocationEvent);
    await done;

    expect(tracesStore.insert).toHaveBeenCalledWith(
      jasmine.objectContaining({
        chainId: invocationEvent.id,
        type: TraceType.TASK,
        name: dummyTaskName,
        result: TraceResult.ERROR,
        content: {
          took: jasmine.anything(),
          invokedBy: invocationEvent.name,
          message: dummyTaskError.stack,
        },
      })
    );
  });
});

class DummyTraceableTask extends TraceableTask {
  constructor(taskConfig: TracerConfig, tracesStore: TracesStore, private faulty: boolean) {
    super(dummyTaskName, taskConfig, tracesStore);
  }

  protected async onTracedRun(_taskParams: TaskParams, _invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    if (this.faulty) {
      throw dummyTaskError;
    }
    return { result: dummyTaskResult };
  }
}

function listenToTaskFinished(source: DispatchableEvent, error = false) {
  const eventName = error ? TaskDispatcherEvent.TaskChainFinished : 'doNothingFinished';
  return listenToEventTrigger(eventName, source.id);
}
