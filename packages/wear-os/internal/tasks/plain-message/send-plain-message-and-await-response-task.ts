import { MessageSenderTask } from './message-sender-task';
import { Message, MessageReceived, PlainMessage } from '../../entities/plain-message';

const EVENT = 'plainMessageSentAndResponseReceived';

export class SendPlainMessageAndAwaitResponseTask extends MessageSenderTask {
  constructor() {
    super('sendPlainMessageToWatchAndAwaitResponse', EVENT);
  }

  protected async sendMessage(content: PlainMessage, timeout?: number): Promise<Message> {
    const response = await this.plainMessageClient.sendAndAwaitResponse(content, timeout);
    return new MessageReceived(response);
  }
}
