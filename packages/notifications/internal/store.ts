import { Notification } from './entities';
import { AwarnsStore } from '@awarns/persistence';
import { Observable } from 'rxjs';
import { deserialize, serialize } from '@awarns/core/utils/serialization';

export interface NotificationsStore {
  get(id: number): Promise<Notification>;
  list(): Observable<Array<Notification>>;
}

export interface InternalNotificationsStore extends NotificationsStore {
  insert(notification: Notification): Promise<void>;
  delete(id: number): Promise<void>;
  clear(): Promise<void>;
}

const DOC_TYPE = 'notification';

class NotificationsStoreDB implements InternalNotificationsStore {
  private readonly store: AwarnsStore<Notification>;

  constructor() {
    this.store = new AwarnsStore<Notification>(DOC_TYPE, docFrom, notificationFrom);
  }

  async insert(notification: Notification): Promise<void> {
    const id = notification.id;
    try {
      await this.get(id);
      return;
    } catch (err) {
      await this.store.create(notification, `${id}`);
    }
  }

  async get(id: number): Promise<Notification> {
    const notification = await this.store.get(`${id}`);
    if (!notification) {
      throw new Error(`Notification not found (id=${id})`);
    }
    return notification;
  }

  list(): Observable<Array<Notification>> {
    return new Observable<Array<Notification>>((subscriber) => {
      const subscription = this.store.changes.subscribe(() => {
        this.getAll()
          .then((notifications) => {
            subscriber.next(notifications);
          })
          .catch((error) => {
            subscriber.error(error);
          });
      });

      this.getAll()
        .then((notifications) => {
          subscriber.next(notifications);
        })
        .catch((error) => {
          subscriber.error(error);
        });

      return () => {
        subscription.unsubscribe();
      };
    });
  }

  async getAll(): Promise<Array<Notification>> {
    return await this.store.fetch({
      select: [],
      order: [{ property: 'timestamp', direction: 'desc' }],
    });
  }

  async delete(id: number): Promise<void> {
    await this.store.delete(`${id}`);
  }

  async clear(): Promise<void> {
    await this.store.clear();
  }
}

interface NotificationDoc {
  id?: string;
  title: string;
  tapActionType: string;
  tapActionId: string;
  tapActionMetadata: string;
  body: string;
  timestamp: number;
}

function docFrom(notification: Notification): NotificationDoc {
  const { title, tapAction, body, timestamp } = notification;
  return {
    title,
    tapActionType: tapAction.type,
    tapActionId: tapAction.id,
    tapActionMetadata: tapAction.metadata ? serialize(tapAction.metadata) : null,
    body,
    timestamp: timestamp.getTime(),
  };
}

function notificationFrom(doc: NotificationDoc): Notification {
  const { id, title, tapActionType, tapActionId, tapActionMetadata, body, timestamp } = doc;
  return {
    id: parseInt(id),
    title,
    tapAction: {
      type: tapActionType,
      id: tapActionId,
      ...(tapActionMetadata !== null && {
        metadata: deserialize(tapActionMetadata),
      }),
    },
    body,
    timestamp: new Date(timestamp),
  };
}

export const notificationsStoreDB = new NotificationsStoreDB();
