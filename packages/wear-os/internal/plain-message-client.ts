import { getPlainMessageClient as getPMC, PlainMessageClient as PMC } from 'nativescript-wearos-sensors/plain-message';
import { getPlainMessageReceiver } from './receiver/plain-message';
import { getWatchInUse } from './setup';
import { PlainMessage, ReceivedMessage } from './entities/plain-message';

export class PlainMessageClient {
  static setup() {
    getPMC().registerListener((receivedMessage) => {
      getPlainMessageReceiver().onReceive(receivedMessage);
    });
  }

  private _plainMessageClient: PMC;
  get plainMessageClient() {
    if (!this._plainMessageClient) {
      this._plainMessageClient = getPMC();
    }
    return this._plainMessageClient;
  }

  public async send(plainMessage: PlainMessage) {
    await this.plainMessageClient.send(getWatchInUse(), plainMessage);
  }

  public async sendAndAwaitResponse(plainMessage: PlainMessage, timeout?: number): Promise<ReceivedMessage> {
    return await this.plainMessageClient.sendExpectingResponse(getWatchInUse(), plainMessage, timeout);
  }
}

let _client: PlainMessageClient;
export function getPlainMessageClient(): PlainMessageClient {
  if (!_client) {
    _client = new PlainMessageClient();
  }
  return _client;
}
