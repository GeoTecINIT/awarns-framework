import { Record } from '@awarns/core/entities';
import { ClassificationResult } from '../predictor';

export const ClassificationType = 'classification-prediction';

export class Classification extends Record {
  constructor(public classificationResult: ClassificationResult) {
    super(ClassificationType, classificationResult.timestamp);
  }
}
