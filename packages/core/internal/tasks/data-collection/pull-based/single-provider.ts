import { ProviderTask } from '../provider-task';
import { PullProvider } from '../../../providers';

import { camelCase, pascalCase } from '../../../utils/string';
import { TaskConfig, TaskOutcome, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';

export class SinglePullProviderTask extends ProviderTask<PullProvider> {
  constructor(provider: PullProvider, recordPrefix = '', taskConfig?: TaskConfig) {
    super(`acquire${recordPrefix}${pascalCase(provider.provides)}`, provider, {
      ...taskConfig,
      // Override declared output events with:
      // {recordType}Acquired
      // Where recordType is the provider output type (turned into camel case)
      outputEventNames: [`${camelCase(provider.provides)}Acquired`],
    });
  }

  protected async onRun(_taskParams: TaskParams, _invocationEvent: DispatchableEvent): Promise<TaskOutcome> {
    const [recordPromise, stopCollecting] = this.provider.next();
    this.setCancelFunction(() => stopCollecting());
    const record = await recordPromise;

    return { result: record };
  }
}
