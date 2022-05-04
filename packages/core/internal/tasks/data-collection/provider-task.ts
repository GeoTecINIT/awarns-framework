import { Task, TaskConfig } from 'nativescript-task-dispatcher/tasks';
import { BaseProvider } from '../../providers/base-provider';

export abstract class ProviderTask<T extends BaseProvider> extends Task {
  protected constructor(name: string, protected provider: T, taskConfig: TaskConfig) {
    super(name, taskConfig);
  }

  async checkIfCanRun(): Promise<void> {
    await this.provider.checkIfIsReady();
  }

  async prepare(): Promise<void> {
    await this.provider.prepare();
  }
}
