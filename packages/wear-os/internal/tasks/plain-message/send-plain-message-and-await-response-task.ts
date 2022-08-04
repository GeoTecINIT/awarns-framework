import { MessageSenderTask } from './message-sender-task';
import { MessageReceived } from '../../entities/plain-message';

const EVENT = 'plainMessageSentAndResponseReceived';

export class SendPlainMessageAndAwaitResponseTask extends MessageSenderTask {
  constructor() {
    super('sendPlainMessageToWatchAndAwaitResponse', EVENT, async (content) => {
      const response = await this.plainMessageClient.sendAndAwaitResponse(content);
      return new MessageReceived(response);
    });
  }
}
