import { PredictionTask } from './prediction-task';
import { ModelNameResolver, ModelOptionsResolver } from './index';
import { Classifier, InputData } from '../predictor';
import { ClassificationModel, ModelOptions } from '../model';
import { Record } from '@awarns/core/entities';
import { Classification } from '../entities';

export class ClassificationTask extends PredictionTask {
  constructor(
    predictionAim: string,
    modelName: string | ModelNameResolver,
    modelOptions: ModelOptions | ModelOptionsResolver,
    tag: string
  ) {
    super(predictionAim, modelName, modelOptions, 'Classification', tag);
  }

  protected async doPrediction(data: InputData): Promise<Record> {
    const model = (await this.getModel()) as ClassificationModel;
    const classifier = new Classifier(model);
    const classificationResult = classifier.predict(data);
    return new Classification(classificationResult);
  }
}
