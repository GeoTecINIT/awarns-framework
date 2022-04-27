import { Notification as N, NotificationIdentifiers, TapAction as TA, TapActionType } from './notification';
export type Notification = N;
export type TapAction = TA;
export { TapActionType };

export function generateNotificationId(): number {
  // From nativescript-local-notifications
  // https://github.com/EddyVerbruggen/nativescript-local-notifications/blob/master/src/local-notifications-common.ts
  return Math.round((Date.now() + Math.round(100000 * Math.random())) / 1000);
}

export function extractIdAndActionFrom(notification: Notification): NotificationIdentifiers {
  const { id, tapAction } = notification;
  return {
    id,
    tapAction,
  };
}
