import { PushProvider } from '@awarns/core/data-sources';
import { StopPushProviderTask } from '@awarns/core/internal/tasks/data-collection/push-based';
import { createPushProviderMock } from './common.spec';
import { createEvent } from 'nativescript-task-dispatcher/testing/events';

describe('Stop push provider task', () => {
  let provider: PushProvider;
  let task: StopPushProviderTask;

  beforeEach(() => {
    provider = createPushProviderMock();
    task = new StopPushProviderTask(provider, 'Virtual');
  });

  it('should have a predictable name', () => {
    expect(task.name).toEqual('stopDetectingVirtualSampleRecordChanges');
  });

  it('should indicate the underlying provider to stop providing on task run', async () => {
    spyOn(provider, 'stopProviding').and.returnValue(Promise.resolve());
    await task.run({}, createEvent('fake'));
    expect(provider.stopProviding).toHaveBeenCalled();
  });

  it('should propagate any error raised on provider start', async () => {
    spyOn(provider, 'stopProviding').and.returnValue(Promise.reject('Stop error'));
    await expectAsync(task.run({}, createEvent('fake'))).toBeRejectedWith('Stop error');
  });
});
