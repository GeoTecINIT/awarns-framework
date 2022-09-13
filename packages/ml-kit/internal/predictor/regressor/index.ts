import { PredictionResult } from '../prediction-result';
import { AbstractPredictor } from '../abstract-predictor';
import { BaseModel } from '../../model';

export type RegressionPrediction = number;

export interface RegressionResult extends PredictionResult {
  prediction: RegressionPrediction[];
}

export class Regressor extends AbstractPredictor<RegressionResult> {
  constructor(model: BaseModel) {
    super(model);
  }

  protected interpretResults(results: number[]): RegressionResult {
    return {
      prediction: results,
      timestamp: new Date(),
    };
  }
}
