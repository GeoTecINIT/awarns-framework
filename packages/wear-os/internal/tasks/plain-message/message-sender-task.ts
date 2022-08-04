import { Task, TaskOutcome, TaskParams, DispatchableEvent } from '@awarns/core/tasks';
import { Message, PlainMessage } from '../../entities/plain-message';
import { getPlainMessageClient, PlainMessageClient } from '../../plain-message-client';
import { areWatchFeaturesEnabled } from '../../setup';

export type MessageSender = (content: PlainMessage) => Promise<Message>;

export class MessageSenderTask extends Task {
  private _plainMessageClient: PlainMessageClient;
  get plainMessageClient() {
    if (!this._plainMessageClient) {
      this._plainMessageClient = getPlainMessageClient();
    }
    return this._plainMessageClient;
  }

  constructor(name: string, eventName: string, private sender: MessageSender) {
    super(name, {
      outputEventNames: [eventName],
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    if (!areWatchFeaturesEnabled()) {
      throw new Error('Watch features are not enabled!');
    }

    const { message, inResponseTo } = taskParams;
    const { plainMessage } = invocationEvent.data;

    if (!plainMessage && !message) {
      throw new Error('A message must be included as task parameter or injected via the invocation event!');
    }

    const messageContent: PlainMessage = plainMessage
      ? plainMessage
      : {
          message,
          inResponseTo,
        };

    const record = await this.sender(messageContent);

    return {
      result: record,
    };
  }
}
