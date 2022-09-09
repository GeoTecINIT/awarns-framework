import { Record } from '@awarns/core/entities';
import { RegressionResult } from '../predictor';

export const RegressionType = 'regression-prediction';

export class Regression extends Record {
  constructor(public regressionResult: RegressionResult) {
    super(RegressionType, regressionResult.timestamp);
  }
}
