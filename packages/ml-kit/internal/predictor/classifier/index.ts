import { PredictionResult } from '../prediction-result';
import { AbstractPredictor } from '../abstract-predictor';
import { ClassificationModel } from '../../model';

export type ClassificationPrediction = { label: string; score: number };

export interface ClassificationResult extends PredictionResult {
  prediction: ClassificationPrediction[];
}

export class Classifier extends AbstractPredictor<ClassificationResult> {
  constructor(model: ClassificationModel) {
    super(model);
  }

  protected interpretResults(results: number[]): ClassificationResult {
    const labels = (this.model as ClassificationModel).labels;

    const predictions = results.map((result, i) => {
      return {
        label: labels[i],
        score: result,
      };
    });

    return {
      prediction: predictions,
      timestamp: new Date(),
    };
  }
}
