import { RandomNotificationSenderTask } from '@awarns/notifications/internal/random-sender';
import { NotificationsManager } from '@awarns/notifications/internal/manager';
import { Notification, TapAction, TapActionType } from '@awarns/notifications';
import { createEvent } from '@awarns/core/testing/events';

describe('Random notification sender', () => {
  const initialTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  beforeAll(() => (jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000));
  afterAll(() => (jasmine.DEFAULT_TIMEOUT_INTERVAL = initialTimeout));

  it('delivers a random notification among the ones provided', async () => {
    const [fakeNotificationManager, deliveredNotifications] = createFakeNotificationsManager();

    const task = new RandomNotificationSenderTask('sendRandomNotification', {}, fakeNotificationManager);

    const options = [
      { title: 'Random notification 1' },
      {
        title: 'Random notification 2',
        body: 'Random notification 2 body',
        tapAction: {
          type: TapActionType.DELIVER_QUESTIONS,
          id: 'random-questions',
        },
      },
    ];

    const defaultTapAction: TapAction = {
      type: TapActionType.ASK_FEEDBACK,
      id: 'random-feedback',
    };

    const taskParams = { options, defaultTapAction };

    for (let i = 0; i < 10; i++) {
      const eventTrigger = createEvent('fakeEvent');
      await task.run(taskParams, eventTrigger);
    }

    for (const option of options) {
      const match = deliveredNotifications.find((notification) => notification.title === option.title);
      expect(match).not.toBeUndefined(`Notification with title=${option.title} was never delivered`);
      expect(match.title).toEqual(option.title);
      expect(match.body).toEqual(option.body ?? '');

      const expectedTapAction = option.tapAction ?? defaultTapAction;
      expect(match.tapAction.type).toEqual(expectedTapAction.type);
      expect(match.tapAction.id).toEqual(expectedTapAction.id);
    }
  });
});

function createFakeNotificationsManager(): [NotificationsManager, Array<Notification>] {
  const receivedNotifications: Array<Notification> = [];
  const fakeNotificationManager: NotificationsManager = {
    hasPermission(): Promise<boolean> {
      return Promise.resolve(true);
    },
    requestPermission(): Promise<boolean> {
      return Promise.resolve(true);
    },
    display(notification: Notification): Promise<void> {
      receivedNotifications.push(notification);

      return Promise.resolve();
    },
  };

  return [fakeNotificationManager, receivedNotifications];
}
