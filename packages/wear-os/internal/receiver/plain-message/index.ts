import { awarns } from '@awarns/core/index';
import { EventData } from '@awarns/core/events';
import { MessageReceived, ReceivedMessage } from '../../entities/plain-message';

export class PlainMessageReceiver {
  constructor(private emitEvent: (eventName: string, eventData?: EventData) => void) {}

  onReceive(receivedMessage: ReceivedMessage) {
    const messageReceived = new MessageReceived(receivedMessage);
    this.emitEvent('plainMessageReceived', messageReceived);
  }
}

let _receiver: PlainMessageReceiver;
export function getPlainMessageReceiver(): PlainMessageReceiver {
  if (!_receiver) {
    _receiver = new PlainMessageReceiver(awarns.emitEvent);
  }
  return _receiver;
}
