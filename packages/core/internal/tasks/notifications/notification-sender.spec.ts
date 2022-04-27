import { NotificationsManager } from '../../notifications/manager';
import { createNotificationsManagerMock } from './common.spec';
import { NotificationSenderTask } from './notification-sender';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';
import { TapActionType } from '../../notifications';
import { createEvent, listenToEventTrigger } from 'nativescript-task-dispatcher/testing/events';

describe('Notification sender task', () => {
  let manager: NotificationsManager;
  let notificationSender: NotificationSenderTask;

  beforeEach(() => {
    manager = createNotificationsManagerMock();
    notificationSender = new NotificationSenderTask('sendNotification', {}, manager);

    spyOn(manager, 'display');
  });

  it('is able to check if notification permission has been granted', async () => {
    spyOn(manager, 'hasPermission').and.returnValue(Promise.resolve(true));

    await notificationSender.checkIfCanRun();
    expect(manager.hasPermission).toHaveBeenCalled();
  });

  it('throws an error if notification permission has not been granted', async () => {
    spyOn(manager, 'hasPermission').and.returnValue(Promise.resolve(false));

    await expectAsync(notificationSender.checkIfCanRun()).toBeRejectedWithError('Notification permission has not been granted');
  });

  it('can ask the native notification mechanism to ask for a missing notification permission', async () => {
    spyOn(manager, 'hasPermission').and.returnValue(Promise.resolve(false));
    spyOn(manager, 'requestPermission').and.returnValue(Promise.resolve(true));

    await notificationSender.prepare();
    expect(manager.hasPermission).toHaveBeenCalled();
    expect(manager.requestPermission).toHaveBeenCalled();
  });

  it('throws an error it the notification permission has been denied', async () => {
    spyOn(manager, 'hasPermission').and.returnValue(Promise.resolve(false));
    spyOn(manager, 'requestPermission').and.returnValue(Promise.resolve(false));

    await expectAsync(notificationSender.prepare()).toBeRejectedWithError('Notification permission has not been granted');
  });

  it('does not ask for a missing notification permission if it has already been granted', async () => {
    spyOn(manager, 'hasPermission').and.returnValue(Promise.resolve(true));
    spyOn(manager, 'requestPermission');

    await notificationSender.prepare();
    expect(manager.hasPermission).toHaveBeenCalled();
    expect(manager.requestPermission).not.toHaveBeenCalled();
  });

  it('displays a notification with a parameterized title and body', async () => {
    const title = 'Test notification';
    const body = 'Parameterized content';

    const invocationEvent = createEvent('dummyEvent');

    const done = listenToTaskFinished(invocationEvent);

    notificationSender.run(
      {
        title,
        body,
      },
      invocationEvent
    );
    await done;

    expect(manager.display).toHaveBeenCalledWith(
      jasmine.objectContaining({
        title,
        body,
        tapAction: {
          type: TapActionType.OPEN_APP,
          id: null,
          metadata: {},
        },
        timestamp: jasmine.any(Date),
        bigTextStyle: false,
      })
    );
  });

  it('displays a notification with a parameterized title and no body', async () => {
    const title = 'Test notification';
    const data = { result: 'Some result' };

    const invocationEvent = createEvent('dummyEvent', {
      data,
    });

    const done = listenToTaskFinished(invocationEvent);

    notificationSender.run(
      {
        title,
      },
      invocationEvent
    );
    await done;

    expect(manager.display).toHaveBeenCalledWith(
      jasmine.objectContaining({
        title,
        body: '',
        tapAction: {
          type: TapActionType.OPEN_APP,
          id: null,
          metadata: data,
        },
        timestamp: jasmine.any(Date),
        bigTextStyle: false,
      })
    );
  });

  it('displays a notification with a parameterized title and the body contained in the invocation event', async () => {
    const title = 'Test notification';
    const body = 'A curated text result';
    const data = { body };

    const invocationEvent = createEvent('dummyEvent', {
      data,
    });

    const done = listenToTaskFinished(invocationEvent);

    notificationSender.run(
      {
        title,
      },
      invocationEvent
    );
    await done;

    expect(manager.display).toHaveBeenCalledWith(
      jasmine.objectContaining({
        title,
        body: data.body,
        tapAction: {
          type: TapActionType.OPEN_APP,
          id: null,
          metadata: data,
        },
        timestamp: jasmine.any(Date),
        bigTextStyle: false,
      })
    );
  });

  it('displays a notification with a parameterized title and body and a reference to some rich-text content', async () => {
    const title = 'Test notification';
    const body = 'Parameterized content';
    const tapAction = {
      type: TapActionType.OPEN_CONTENT,
      id: 'rtc1',
    };

    const invocationEvent = createEvent('dummyEvent');

    const done = listenToTaskFinished(invocationEvent);

    notificationSender.run(
      {
        title,
        body,
        tapAction,
      },
      invocationEvent
    );
    await done;

    expect(manager.display).toHaveBeenCalledWith(
      jasmine.objectContaining({
        title,
        body,
        tapAction,
        timestamp: jasmine.any(Date),
        bigTextStyle: false,
      })
    );
  });

  it('displays a notification with a parameterized title and body and a reference to some questions to be answered', async () => {
    const title = 'Test notification';
    const body = 'Some barely long parameterized content';
    const tapAction = {
      type: TapActionType.DELIVER_QUESTIONS,
      id: 'qs1',
    };

    const invocationEvent = createEvent('dummyEvent');

    const done = listenToTaskFinished(invocationEvent);

    notificationSender.run(
      {
        title,
        body,
        tapAction,
      },
      invocationEvent
    );
    await done;

    expect(manager.display).toHaveBeenCalledWith(
      jasmine.objectContaining({
        title,
        body,
        tapAction,
        timestamp: jasmine.any(Date),
        bigTextStyle: true,
      })
    );
  });
});

function listenToTaskFinished(source: DispatchableEvent) {
  return listenToEventTrigger('sendNotificationFinished', source.id);
}
