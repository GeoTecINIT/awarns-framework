import { ProdLogger } from './prod';

export class DevLogger extends ProdLogger {
  constructor(tag: string) {
    super(tag);
  }

  protected logDebug(message: string) {
    console.info(message);
  }
}
