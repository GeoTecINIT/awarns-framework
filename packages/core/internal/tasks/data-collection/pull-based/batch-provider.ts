import { SinglePullProviderTask } from './single-provider';
import { PullProvider, Record } from '../../../providers';
import { TracerConfig } from '../../tracing';
import { TaskOutcome, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';

export class BatchPullProviderTask extends SinglePullProviderTask {
  constructor(provider: PullProvider, recordPrefix = '', taskConfig?: TracerConfig) {
    super(provider, `Multiple${recordPrefix}`, taskConfig);
  }

  protected async onTracedRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<TaskOutcome> {
    const records: Array<Record> = [];
    const executionTimes = [];
    while (this.remainingTime() > 0 && (executionTimes.length === 0 || average(executionTimes) < this.remainingTime())) {
      const { record, executionTime } = await this.acquireSingleRecord(taskParams, invocationEvent);
      if (record) {
        records.push(record);
      }
      executionTimes.push(executionTime);
    }
    if (records.length === 0) {
      throw new Error('Provider failed to report any records!');
    }
    return { result: records };
  }

  private async acquireSingleRecord(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<SingleExecutionResult> {
    const { maxInterval } = taskParams;
    const start = Date.now();
    let record: Record;
    try {
      const taskOutcome = await super.onTracedRun(taskParams, invocationEvent);
      record = taskOutcome.result;
      if (maxInterval && Date.now() - start < maxInterval) {
        await this.doNothingDuring(maxInterval - (Date.now() - start));
      }
    } catch (err) {
      this.log(`Provider has thrown an error while collecting data: ${err}`);
      await this.doNothingDuring(1000);
    }
    return {
      record,
      executionTime: Date.now() - start,
    };
  }

  private doNothingDuring(millis: number): Promise<void> {
    return new Promise((resolve) => {
      const timeoutId = setTimeout(resolve, millis);
      this.setCancelFunction(() => {
        clearTimeout(timeoutId);
        resolve();
      });
    });
  }
}

function average(executionTimes: Array<number>) {
  return executionTimes.reduce((prev, curr) => prev + curr, 0) / executionTimes.length;
}

interface SingleExecutionResult {
  record?: Record;
  executionTime: number;
}
