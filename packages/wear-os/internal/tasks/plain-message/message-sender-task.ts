import { Task, TaskOutcome, TaskParams, DispatchableEvent } from '@awarns/core/tasks';
import { Message, PlainMessage } from '../../entities/plain-message';
import { getPlainMessageClient, PlainMessageClient } from '../../plain-message-client';
import { areWatchFeaturesEnabled, featuresNotEnabledError } from '../../setup';

export const noMessageIncludedError = new Error(
  'A message must be included as task parameter or injected via the invocation event!'
);

export abstract class MessageSenderTask extends Task {
  private _plainMessageClient: PlainMessageClient;
  get plainMessageClient() {
    if (!this._plainMessageClient) {
      this._plainMessageClient = getPlainMessageClient();
    }
    return this._plainMessageClient;
  }

  protected constructor(name: string, eventName: string) {
    super(name, {
      outputEventNames: [eventName],
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    if (!areWatchFeaturesEnabled()) {
      throw featuresNotEnabledError;
    }

    const { plainMessage, timeout } = invocationEvent.data;
    if (!plainMessage && !taskParams.plainMessage) {
      throw noMessageIncludedError;
    }

    const messageContent: PlainMessage = plainMessage ? plainMessage : taskParams.plainMessage;
    const waitTimeout = timeout ? timeout : taskParams.timeout;

    const record = await this.sendMessage(messageContent, waitTimeout);

    return {
      result: record,
    };
  }

  protected abstract sendMessage(content: PlainMessage, timeout?: number): Promise<Message>;
}
