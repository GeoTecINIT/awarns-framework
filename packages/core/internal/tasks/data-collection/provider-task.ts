import { TraceableTask, TracerConfig } from '../tracing';
import { BaseProvider } from '../../providers/base-provider';

export abstract class ProviderTask<T extends BaseProvider> extends TraceableTask {
  protected constructor(name: string, protected provider: T, taskConfig: TracerConfig) {
    super(name, taskConfig);
  }

  async checkIfCanRun(): Promise<void> {
    await this.provider.checkIfIsReady();
  }

  async prepare(): Promise<void> {
    await this.provider.prepare();
  }
}
