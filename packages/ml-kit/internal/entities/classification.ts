import { Prediction } from './prediction';
import { ClassificationResult } from '../predictor';

export class Classification extends Prediction {
  constructor(public classificationResult: ClassificationResult, classificationAim: string) {
    super(classificationAim);
  }
}
