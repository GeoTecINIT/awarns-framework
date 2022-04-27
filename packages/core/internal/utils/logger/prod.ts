import { AbstractLogger } from './common';

export class ProdLogger extends AbstractLogger {
  constructor(tag: string) {
    super(tag);
  }

  protected logDebug(_message: never) {
    /* Ignored */
  }

  protected logInfo(message: never) {
    console.log(message);
  }

  protected logWarning(message: never) {
    console.warn(message);
  }

  protected logError(message: never) {
    console.error(message);
  }
}
