import { TracesStore, TraceType, TraceResult } from '@awarns/tracing';
import { createTracesStoreMock } from './common.spec';
import { TraceableTask } from '@awarns/tracing/tasks';
import { Task, TaskOutcome, TaskParams } from '@awarns/core/tasks';
import { DispatchableEvent, TaskDispatcherEvent } from '@awarns/core/events';
import { createEvent, listenToEventTrigger } from '@awarns/core/testing/events';

const advancedTaskName = 'iAmSuperior';
const dummyTaskName = 'doNothing';
const dummyTaskResult = { secret: 'doNotShare' };
const dummyTaskError = new Error("I've done nothing and still I've failed");

describe('Traceable task', () => {
  let tracesStore: TracesStore;

  beforeEach(() => {
    tracesStore = createTracesStoreMock();
    spyOn(tracesStore, 'insert');
  });

  it('properly overrides and decorates inner task methods', async () => {
    const invocationEvent = createEvent('test');

    const innerTask = new AdvancedTask();
    const traceableTask = new TraceableTask(innerTask, {}, tracesStore);
    // @ts-ignore
    spyOn(traceableTask, 'remainingTime').and.callThrough();
    // @ts-ignore
    spyOn(traceableTask, 'log');
    // @ts-ignore
    spyOn(traceableTask, 'runAgainIn');

    const done = listenToEventTrigger(TaskDispatcherEvent.TaskChainFinished, invocationEvent.id);

    await traceableTask.checkIfCanRun();
    await traceableTask.prepare();

    const runPromise = traceableTask.run({}, invocationEvent);

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        traceableTask.cancel();
        resolve();
      }, 100)
    );

    await runPromise;
    const result = await done;
    expect(result).toEqual({ result: { status: 'cancelled' } });

    expect(innerTask.checked).toBeTrue();
    expect(innerTask.prepared).toBeTrue();

    // @ts-ignore
    expect(traceableTask.remainingTime).toHaveBeenCalled();
    // @ts-ignore
    expect(traceableTask.log).toHaveBeenCalledWith(-1);
    // @ts-ignore
    expect(traceableTask.runAgainIn).toHaveBeenCalledWith(10, undefined);
  });

  it('successfully runs and traces its execution and result', async () => {
    const invocationEvent = createEvent('test');

    const traceableTask = new TraceableTask(new DummyTask(false), {}, tracesStore);

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

    const traceableTask = new TraceableTask(new DummyTask(false), { outputsSensitiveData: true }, tracesStore);

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

    const traceableTask = new TraceableTask(new DummyTask(true), {}, tracesStore);

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

class AdvancedTask extends Task {
  constructor() {
    super(advancedTaskName);
  }

  checked = false;
  prepared = false;
  cancelled = false;

  checkIfCanRun(): Promise<void> {
    this.checked = true;
    return Promise.resolve();
  }

  prepare(): Promise<void> {
    this.prepared = true;
    return Promise.resolve();
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void> {
    this.log(this.remainingTime());
    this.runAgainIn(10);
    return new Promise<void>((resolve) => {
      const timeoutId = setTimeout(resolve, 5000);
      this.setCancelFunction(() => {
        this.cancelled = true;
        clearTimeout(timeoutId);
        resolve();
      });
    });
  }
}

class DummyTask extends Task {
  constructor(private faulty: boolean) {
    super(dummyTaskName);
  }

  protected async onRun(_taskParams: TaskParams, _invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
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
