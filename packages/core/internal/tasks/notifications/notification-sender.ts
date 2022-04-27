import { TraceableTask, TracerConfig } from '../tracing';
import { NotificationsManager, notificationsManager } from '../../notifications/manager';
import { TaskOutcome, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';
import { extractIdAndActionFrom, generateNotificationId, Notification, TapActionType } from '../../notifications';

export const notificationPermissionMissingErr = new Error('Notification permission has not been granted');

const NOTIFICATION_DELIVERY_DELAY = 1000;

export class NotificationSenderTask extends TraceableTask {
  constructor(name: string, taskConfig?: TracerConfig, private manager: NotificationsManager = notificationsManager) {
    super(name, taskConfig);
  }

  async checkIfCanRun(): Promise<void> {
    const granted = await this.manager.hasPermission();
    if (!granted) {
      throw notificationPermissionMissingErr;
    }
  }

  async prepare(): Promise<void> {
    const granted = await this.manager.hasPermission();
    if (granted) {
      return;
    }

    const success = await this.manager.requestPermission();
    if (!success) {
      throw notificationPermissionMissingErr;
    }
  }

  protected async onTracedRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<TaskOutcome> {
    const notification = NotificationSenderTask.createNotificationFromParamsOrEvent(taskParams, invocationEvent);
    await this.delayNotificationDelivery();
    await this.manager.display(notification);

    return {
      result: extractIdAndActionFrom(notification),
    };
  }

  private static createNotificationFromParamsOrEvent(params: TaskParams, evt: DispatchableEvent): Notification {
    const { title, tapAction } = params;
    if (!title) {
      throw new Error('A title must be included as a task parameter!');
    }
    if (tapAction && tapAction.type !== TapActionType.OPEN_APP && !tapAction.id) {
      throw new Error('When tap action is not declared as OPEN_APP an id must be provided!');
    }

    const body = params.body ? params.body : evt.data.body ? evt.data.body : '';
    const timestamp = new Date();
    const bigTextStyle = body.length >= 25;

    const notification = {
      id: generateNotificationId(),
      title,
      body,
      tapAction: tapAction
        ? tapAction
        : {
            type: TapActionType.OPEN_APP,
            id: null,
          },
      timestamp,
      bigTextStyle,
    };
    notification.tapAction.metadata = evt.data;
    return notification;
  }

  private delayNotificationDelivery(): Promise<void> {
    return new Promise<void>((resolve) => {
      const timeoutId = setTimeout(resolve, NOTIFICATION_DELIVERY_DELAY);
      this.setCancelFunction(() => {
        clearTimeout(timeoutId);
        resolve();
      });
    });
  }
}
