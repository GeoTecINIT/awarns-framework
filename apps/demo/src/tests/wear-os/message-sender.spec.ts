import {
  MessageSenderTask,
  noMessageIncludedError,
} from '@awarns/wear-os/internal/tasks/plain-message/message-sender-task';
import { setWatchFeaturesState } from '@awarns/wear-os/internal/setup';
import { createEvent, listenToEventTrigger } from '@awarns/core/testing/events';
import { MessageSent } from '@awarns/wear-os/internal/entities/plain-message';
import { clear } from '@nativescript/core/application-settings';
import { SendPlainMessageTask } from '@awarns/wear-os/internal/tasks/plain-message';

describe('Message sender task', () => {
  const eventName = 'plainMessageSent';
  let spiedMessageClient;
  let spiedSender;
  let messageSender: MessageSenderTask;

  beforeEach(() => {
    setWatchFeaturesState(true);
    messageSender = new SendPlainMessageTask();
    spiedMessageClient = jasmine.createSpyObj('messageClient', ['enabled']);
    spiedMessageClient.enabled.and.returnValue(true);
    spyOnProperty(messageSender, 'plainMessageClient').and.returnValue(spiedMessageClient);
    spiedSender = spyOn<any>(messageSender, 'sendMessage').and.callFake(fakeSender());
  });

  it('does nothing when watch features are not enabled', async () => {
    setWatchFeaturesState(false);
    const invocationEvent = createEvent('triggerEvent');
    const done = listenToEventTrigger('sendPlainMessageToWatchFinished', invocationEvent.id);

    messageSender.run({}, invocationEvent);

    const event = await done;
    expect(event).toEqual({});
  });

  it('does nothing when messaging features are not enabled', async () => {
    spiedMessageClient.enabled.and.returnValue(false);
    const invocationEvent = createEvent('triggerEvent');
    const done = listenToEventTrigger('sendPlainMessageToWatchFinished', invocationEvent.id);

    messageSender.run({}, invocationEvent);

    const event = await done;
    expect(event).toEqual({});
  });

  it('throws an error when the message is not included neither in the invocation event nor the task params', async () => {
    const invocationEvent = createEvent('triggerEvent');
    await expectAsync(messageSender.run({}, invocationEvent)).toBeRejectedWith(noMessageIncludedError);
  });

  it('emits an event with the sent message injected through task params', async () => {
    const invocationEvent = createEvent('triggerEvent');
    const done = listenToEventTrigger(eventName, invocationEvent.id);

    const plainMessage = {
      message: 'Hi :D',
      inResponseTo: {
        message: 'Hello!',
      },
    };
    const timeout = 1000;
    const taskParams = {
      plainMessage,
      timeout,
    };

    const expectedOutputRecord = new MessageSent(plainMessage);
    const { id, timestamp, ...expectedProperties } = expectedOutputRecord;

    messageSender.run(taskParams, invocationEvent);

    const event = await done;
    expect(event).toEqual(jasmine.objectContaining(expectedProperties));
    expect(spiedSender).toHaveBeenCalledWith(plainMessage, timeout);
  });

  it('emits an event with the sent message injected through invocation event', async () => {
    const plainMessage = {
      message: 'Hi :D',
      inResponseTo: {
        message: 'Hello!',
      },
    };
    const timeout = 1000;

    const invocationEvent = createEvent('triggerEvent', {
      data: {
        plainMessage,
        timeout,
      },
    });
    const done = listenToEventTrigger(eventName, invocationEvent.id);

    const expectedOutputRecord = new MessageSent(plainMessage);
    const { id, timestamp, ...expectedProperties } = expectedOutputRecord;

    messageSender.run(plainMessage, invocationEvent);

    const event = await done;
    expect(event).toEqual(jasmine.objectContaining(expectedProperties));
    expect(spiedSender).toHaveBeenCalledWith(plainMessage, timeout);
  });

  afterEach(() => {
    clear();
  });
});

function fakeSender() {
  return async (content, _timeout?) => new MessageSent(content);
}
