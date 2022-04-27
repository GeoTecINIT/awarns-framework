import { Notification as N, TapAction as TA, TapActionType } from '../internal/notifications';
export type Notification = N;
export type TapAction = TA;
export { TapActionType };

import { notificationsManager as nm, NotificationActionsManager as NAM, NotificationCallback as NC } from '../internal/notifications/manager';
export type NotificationActionsManager = NAM;
export type NotificationCallback = NC;

export const notificationsManager: NotificationActionsManager = nm;
