import { Prediction } from './prediction';
import { RegressionResult } from '../predictor';

export class Regression extends Prediction {
  constructor(public regressionResult: RegressionResult, regressionAim: string) {
    super(regressionAim);
  }
}
