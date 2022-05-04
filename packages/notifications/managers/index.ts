import {
  notificationsManager as nm,
  NotificationActionsManager as NAM,
  NotificationCallback as NC,
} from '../internal/manager';
export type NotificationActionsManager = NAM;
export type NotificationCallback = NC;

export const notificationsManager: NotificationActionsManager = nm;
