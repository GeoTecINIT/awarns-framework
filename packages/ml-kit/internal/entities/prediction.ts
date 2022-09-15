import { Record } from '@awarns/core/entities';

export abstract class Prediction extends Record {
  protected constructor(predictionAim: string) {
    super(`${predictionAim}-prediction`);
  }
}
