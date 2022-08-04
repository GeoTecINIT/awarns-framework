import {
  MessageSender,
  MessageSenderTask,
  noMessageIncludedError,
} from '@awarns/wear-os/internal/tasks/plain-message/message-sender-task';
import { featuresNotEnabledError, setWatchFeaturesState } from '@awarns/wear-os/internal/setup';
import { createEvent, listenToEventTrigger } from '@awarns/core/testing/events';
import { MessageSent } from '@awarns/wear-os/internal/entities/plain-message';
import { clear } from '@nativescript/core/application-settings';

describe('Message sender task', () => {
  const eventName = 'testing';
  let sender: MessageSender;
  let messageSender: MessageSenderTask;

  beforeEach(() => {
    setWatchFeaturesState(true);
    sender = fakeSender();
    messageSender = new MessageSenderTask('messageSender', eventName, sender);
  });

  it('throws an error when watch features are not enabled', async () => {
    setWatchFeaturesState(false);
    const invocationEvent = createEvent('triggerEvent');
    await expectAsync(messageSender.run({}, invocationEvent)).toBeRejectedWith(featuresNotEnabledError);
  });

  it('throws an error when the message is not included neither in the invocation event nor the task params', async () => {
    const invocationEvent = createEvent('triggerEvent');
    await expectAsync(messageSender.run({}, invocationEvent)).toBeRejectedWith(noMessageIncludedError);
  });

  it('emits an event with the sent message injected through task params', async () => {
    const invocationEvent = createEvent('triggerEvent');
    const done = listenToEventTrigger(eventName, invocationEvent.id);

    const messageToSend = {
      message: 'Hi :D',
      inResponseTo: {
        message: 'Hello!',
      },
    };
    const expectedOutputRecord = new MessageSent(messageToSend);
    const { id, timestamp, ...expectedProperties } = expectedOutputRecord;

    messageSender.run(messageToSend, invocationEvent);

    const event = await done;
    expect(event).toEqual(jasmine.objectContaining(expectedProperties));
  });

  it('emits an event with the sent message injected through invocation event', async () => {
    const messageToSend = {
      message: 'Hi :D',
      inResponseTo: {
        message: 'Hello!',
      },
    };

    const invocationEvent = createEvent('triggerEvent', {
      data: messageToSend,
    });
    const done = listenToEventTrigger(eventName, invocationEvent.id);

    const expectedOutputRecord = new MessageSent(messageToSend);
    const { id, timestamp, ...expectedProperties } = expectedOutputRecord;

    messageSender.run(messageToSend, invocationEvent);

    const event = await done;
    expect(event).toEqual(jasmine.objectContaining(expectedProperties));
  });

  afterEach(() => {
    clear();
  });
});

function fakeSender(): MessageSender {
  return async (content) => new MessageSent(content);
}
