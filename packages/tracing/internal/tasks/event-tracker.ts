import { Task, TaskParams } from '@awarns/core/tasks';
import { DispatchableEvent } from '@awarns/core/events';
import { TracerConfig } from './tracer-config';
import { syncedTracesStore, TracesStore } from '../stores';
import { Trace, TraceResult, TraceType } from '../entities';

export class EventTrackerTask extends Task {
  private readonly sensitiveData: boolean;

  constructor(name: string, tracerConfig?: TracerConfig, private tracesStore: TracesStore = syncedTracesStore) {
    super(name);
    this.sensitiveData = tracerConfig && tracerConfig.outputsSensitiveData;
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void> {
    const { id, name, data } = invocationEvent;

    const trace = new Trace(id, TraceType.EVENT, name, TraceResult.OK, this.sensitiveData ? {} : data);

    await this.tracesStore.insert(trace);
    this.log(`Event trace recorded: ${JSON.stringify(trace)}`);
  }
}
