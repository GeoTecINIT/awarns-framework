import { MessageSenderTask } from './message-sender-task';
import { MessageSent } from '../../entities/plain-message';

const EVENT = 'plainMessageSent';

export class SendPlainMessageTask extends MessageSenderTask {
  constructor() {
    super('sendPlainMessageToWatch', EVENT, async (content) => {
      await this.plainMessageClient.send(content);
      return new MessageSent(content);
    });
  }
}
