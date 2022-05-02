import { ShownModallyData } from '@nativescript/core';
import { Notification } from '@awarns/notifications';
import { getNotificationHandlerService } from './notification-handler-service';

export function onShownModally(args: ShownModallyData) {
  const notification = <Notification>args.context;
  const tappingTimestamp = new Date().getTime();
  getNotificationHandlerService().tappedNotification = {
    ...notification,
    tappingTimestamp,
  };
}
