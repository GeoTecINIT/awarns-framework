import { Task, TaskOutcome, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { TracerConfig } from './tracer-config';
import { TracesStore, syncedTracesStore } from '../stores';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';
import { Trace, TraceResult, TraceType } from '../entities';
import { flatten } from '@awarns/core/utils/serialization';

export abstract class TraceableTask extends Task {
  private readonly sensibleData: boolean;

  constructor(name: string, taskConfig?: TracerConfig, private tracesStore: TracesStore = syncedTracesStore) {
    super(name, taskConfig);
    this.sensibleData = taskConfig && taskConfig.sensitiveData;
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
      taskOutcome = await this.onTracedRun(taskParams, invocationEvent);
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

  protected abstract onTracedRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome>;
}
