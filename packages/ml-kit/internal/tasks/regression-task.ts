import { PredictionTask } from './prediction-task';
import { ModelNameResolver, ModelOptionsResolver } from './index';
import { InputData, Regressor } from '../predictor';
import { Record } from '@awarns/core/internal/entities';
import { Regression } from '../entities';
import { BaseModel, ModelOptions, ModelType } from '../model';

export class RegressionTask extends PredictionTask {
  constructor(
    predictionAim: string,
    modelName: string | ModelNameResolver,
    modelOptions: ModelOptions | ModelOptionsResolver,
    tag: string
  ) {
    super(predictionAim, modelName, modelOptions, ModelType.REGRESSION, tag);
  }

  protected async doPrediction(data: InputData): Promise<Record> {
    const model = (await this.getModel()) as BaseModel;
    const regressor = new Regressor(model);
    const regressionResult = regressor.predict(data);
    return new Regression(regressionResult, this.predictionAim);
  }
}
