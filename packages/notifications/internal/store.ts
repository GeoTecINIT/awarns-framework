import { Notification } from './entities';
import { EMAIStore } from '@awarns/core/storage';
import { Observable } from 'rxjs';
import { deserialize, serialize } from 'nativescript-task-dispatcher/internal/utils/serialization';

export interface NotificationsStore {
  insert(notification: Notification): Promise<void>;
  get(id: number): Promise<Notification>;
  list(): Observable<Array<Notification>>;
  delete(id: number): Promise<void>;
}

const DOC_TYPE = 'notification';

class NotificationsStoreDB implements NotificationsStore {
  private readonly store: EMAIStore<Notification>;

  constructor() {
    this.store = new EMAIStore<Notification>(DOC_TYPE, docFrom, notificationFrom);
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
