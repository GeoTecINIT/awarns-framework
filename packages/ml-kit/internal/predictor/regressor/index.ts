import { PredictionResult } from '../prediction-result';
import { AbstractPredictor } from '../abstract-predictor';
import { Model } from '../../model';

export type RegressionPrediction = number;

export interface RegressionResult extends PredictionResult {
  prediction: RegressionPrediction[];
}

export class Regressor extends AbstractPredictor<RegressionResult> {
  constructor(model: Model) {
    super(model);
  }

  protected interpretResults(results: number[]): RegressionResult {
    return {
      prediction: results,
      timestamp: new Date(),
    };
  }
}
