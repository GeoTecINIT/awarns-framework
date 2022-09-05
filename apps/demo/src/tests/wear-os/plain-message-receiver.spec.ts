import { EventData } from '@awarns/core/events';
import { PlainMessageReceiver } from '@awarns/wear-os/internal/receiver/plain-message';
import { MessageReceived, ReceivedMessage } from '@awarns/wear-os/internal/entities/plain-message';

describe('Plain message receiver ', () => {
  let eventEmitter: (eventName: string, eventData?: EventData) => void;
  let receiver: PlainMessageReceiver;

  beforeEach(() => {
    eventEmitter = jasmine.createSpy();
    receiver = new PlainMessageReceiver(eventEmitter);
  });

  it('emits the corresponding event when receives a message', () => {
    const receivedMessage: ReceivedMessage = {
      senderNodeId: '5353',
      plainMessage: {
        message: 'Whats up!',
      },
    };
    const expectedRecord = new MessageReceived(receivedMessage);
    const { id, timestamp, ...expectedProperties } = expectedRecord;

    receiver.onReceive(receivedMessage);
    expect(eventEmitter).toHaveBeenCalledWith('plainMessageReceived', jasmine.objectContaining(expectedProperties));
  });
});
