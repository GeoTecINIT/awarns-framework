import { MessageSenderTask } from './message-sender-task';
import { Message, MessageSent, PlainMessage } from '../../entities/plain-message';

const EVENT = 'plainMessageSent';

export class SendPlainMessageTask extends MessageSenderTask {
  constructor() {
    super('sendPlainMessageToWatch', EVENT);
  }

  protected async sendMessage(content: PlainMessage, _timeout?: number): Promise<Message> {
    await this.plainMessageClient.send(content);
    return new MessageSent(content);
  }
}
