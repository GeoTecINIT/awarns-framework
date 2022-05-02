import { BaseProvider } from '@awarns/core/internal/providers/base-provider';
import { ProviderTask } from '@awarns/core/internal/tasks/data-collection/provider-task';
import { createBaseProviderMock } from './common.spec';
import { TaskOutcome, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';

describe('Provider task', () => {
  let provider: BaseProvider;
  let task: ProviderTask<BaseProvider>;

  beforeEach(() => {
    provider = createBaseProviderMock();
    task = new ProviderChecker(provider);
  });

  it('checks the underlying provider to be ready', async () => {
    spyOn(provider, 'checkIfIsReady').and.returnValue(Promise.resolve());
    await task.checkIfCanRun();
    expect(provider.checkIfIsReady).toHaveBeenCalled();
  });

  it('throws an error when the provider is not ready', async () => {
    spyOn(provider, 'checkIfIsReady').and.returnValue(Promise.reject('Not yet'));
    await expectAsync(task.checkIfCanRun()).toBeRejectedWith('Not yet');
  });

  it('is able to prepare the underlying provider', async () => {
    spyOn(provider, 'prepare').and.returnValue(Promise.resolve());
    await task.prepare();
    expect(provider.prepare).toHaveBeenCalled();
  });
});

class ProviderChecker extends ProviderTask<BaseProvider> {
  constructor(provider: BaseProvider) {
    super('', provider, {});
  }

  protected onRun(_taskParams: TaskParams, _invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    throw new Error('Method not implemented.');
  }
}
