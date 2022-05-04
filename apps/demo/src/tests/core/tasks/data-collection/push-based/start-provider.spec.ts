import { PushProvider } from '@awarns/core/providers';
import { StartPushProviderTask } from '@awarns/core/internal/tasks/data-collection/push-based';
import { createPushProviderMock } from './common.spec';
import { createEvent } from '@awarns/core/testing/events';

describe('Start push provider task', () => {
  let provider: PushProvider;
  let task: StartPushProviderTask;

  beforeEach(() => {
    provider = createPushProviderMock();
    task = new StartPushProviderTask(provider, 'Fake');
  });

  it('should have a predictable name', () => {
    expect(task.name).toEqual('startDetectingFakeSampleRecordChanges');
  });

  it('should indicate the underlying provider to start providing on task run', async () => {
    spyOn(provider, 'startProviding').and.returnValue(Promise.resolve());
    await task.run({}, createEvent('fake'));
    expect(provider.startProviding).toHaveBeenCalled();
  });

  it('should propagate any error raised on provider start', async () => {
    spyOn(provider, 'startProviding').and.returnValue(Promise.reject('Start error'));
    await expectAsync(task.run({}, createEvent('fake'))).toBeRejectedWith('Start error');
  });
});
