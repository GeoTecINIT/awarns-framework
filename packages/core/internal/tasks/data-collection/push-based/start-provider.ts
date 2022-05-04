import { ProviderTask } from '../provider-task';
import { PushProvider } from '../../../providers';

import { pascalCase } from '../../../utils/string';
import { TaskConfig, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';

export class StartPushProviderTask extends ProviderTask<PushProvider> {
  constructor(provider: PushProvider, recordPrefix = '', taskConfig?: TaskConfig) {
    super(`startDetecting${recordPrefix}${pascalCase(provider.provides)}Changes`, provider, {
      ...taskConfig,
      // Descendant classes should not declare custom output events
      outputEventNames: [],
    });
  }

  protected async onRun(_taskParams: TaskParams, _invocationEvent: DispatchableEvent): Promise<void> {
    await this.provider.startProviding();
    this.log('Change detection started');
  }
}
