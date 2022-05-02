import { Task, TaskOutcome, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { TracerConfig } from './tracer-config';
import { TracesStore, syncedTracesStore } from '../stores';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';
import { Trace, TraceResult, TraceType } from '../entities';
import { flatten } from '@awarns/core/utils/serialization';

export class TraceableTask extends Task {
  private readonly sensibleData: boolean;

  constructor(
    private innerTask: Task,
    tracerConfig?: TracerConfig,
    private tracesStore: TracesStore = syncedTracesStore
  ) {
    // @ts-ignore
    super(innerTask.name, innerTask._taskConfig);
    this.sensibleData = tracerConfig && tracerConfig.outputsSensitiveData;

    // Use task method overrides
    this.checkIfCanRun = () => innerTask.checkIfCanRun();
    this.prepare = () => innerTask.prepare();

    // Override methods that can potentially be used inside onRun with decorator methods
    // @ts-ignore
    innerTask.setCancelFunction = (f) => this.setCancelFunction(f);
    // @ts-ignore
    innerTask.runAgainIn = (seconds, params) => this.runAgainIn(seconds, params);
    // @ts-ignore
    innerTask.remainingTime = () => this.remainingTime();
    // @ts-ignore
    innerTask.log = (message) => this.log(message);
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const { id, name } = invocationEvent;
    const trace: Trace = {
      timestamp: new Date(),
      chainId: id,
      type: TraceType.TASK,
      result: TraceResult.OK,
      name: this.name,
      content: { invokedBy: name },
    };

    let taskOutcome: void | TaskOutcome;
    let execError: Error;
    try {
      // @ts-ignore
      taskOutcome = await this.innerTask.onRun(taskParams, invocationEvent);

      trace.content.emitted = taskOutcome && taskOutcome.eventName ? taskOutcome.eventName : this.outputEventNames[0];
      trace.content.outcome = this.sensibleData || !taskOutcome ? {} : flatten(taskOutcome.result);
    } catch (err) {
      execError = err;
      trace.result = TraceResult.ERROR;
      trace.content.message = err.stack ? err.stack : `${err}`;
    }
    trace.content.took = Date.now() - trace.timestamp.getTime();
    await this.tracesStore.insert(trace);
    this.log(`Task trace recorded: ${JSON.stringify(trace)}`);

    if (execError) {
      throw execError;
    }
    return taskOutcome;
  }
}
