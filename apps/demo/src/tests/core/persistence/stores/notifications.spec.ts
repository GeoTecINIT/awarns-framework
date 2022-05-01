import { Notification, TapActionType } from '@awarns/core/internal/notifications';
import { notificationsStoreDB } from '@awarns/core/internal/persistence/stores/notifications';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';

describe('Notifications store', () => {
  const notification1Id = 1;
  const expectedNotification1: Notification = {
    id: notification1Id,
    title: 'Notification title',
    tapAction: {
      type: TapActionType.DELIVER_QUESTIONS,
      id: 'qs1',
      metadata: {
        param1: 'Some config param',
        param2: false,
      },
    },
    body: 'Notification body',
    timestamp: new Date(Date.now() - 60000),
  };

  const notification2Id = 2;
  const expectedNotification2: Notification = {
    id: notification2Id,
    title: 'Notification title',
    tapAction: {
      type: TapActionType.OPEN_CONTENT,
      id: 'rtc1',
    },
    body: 'Notification body',
    timestamp: new Date(),
  };
  const store = notificationsStoreDB;

  it('allows to persist a notification without error', async () => {
    await store.insert(expectedNotification1);
  });

  it('allows to recover a notification by its given id', async () => {
    await store.insert(expectedNotification1);
    const notification = await store.get(notification1Id);

    expect(notification).toEqual(expectedNotification1);
  });

  it('allows to delete a persisted notification', async () => {
    await store.insert(expectedNotification1);
    await store.delete(notification1Id);
    await expectAsync(store.get(notification1Id)).toBeRejectedWithError(`Notification not found (id=${notification1Id})`);
  });

  it('allows to query all stored notifications', async () => {
    await store.insert(expectedNotification1);
    await store.insert(expectedNotification2);

    const storedNotifications = await firstValueFrom(store.list());

    expect(storedNotifications.length).toBe(2);
    expect(storedNotifications[0]).toEqual(expectedNotification2);
    expect(storedNotifications[1]).toEqual(expectedNotification1);
  });

  it('allows to listen to stored notification changes', async () => {
    await store.insert(expectedNotification1);

    const updates = lastValueFrom(store.list().pipe(take(2)));
    store.insert(expectedNotification2);
    const storedNotifications = await updates;

    expect(storedNotifications.length).toBe(2);
    expect(storedNotifications[0]).toEqual(expectedNotification2);
  });

  it('allows to get all the persisted notifications sorted by most recent', async () => {
    await store.insert(expectedNotification1);
    await store.insert(expectedNotification2);

    await expectAsync(store.getAll()).toBeResolvedTo([expectedNotification2, expectedNotification1]);
  });

  afterEach(async () => {
    await store.delete(notification1Id);
    await store.delete(notification2Id);
  });
});
