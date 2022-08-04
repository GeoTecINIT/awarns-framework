import { Record } from '@awarns/core/entities';
import { PlainMessage as PM, ReceivedMessage as RM } from 'nativescript-wearos-sensors/plain-message';

export type PlainMessage = PM;
export type ReceivedMessage = RM;

export abstract class Message extends Record {
  protected constructor(type: string, public content: PlainMessage | ReceivedMessage) {
    super(type);
  }
}

export class MessageSent extends Message {
  constructor(content: PlainMessage) {
    super('plain-message-sent', content);
  }
}

export class MessageReceived extends Message {
  constructor(content: ReceivedMessage) {
    super('plain-message-received', content);
  }
}
