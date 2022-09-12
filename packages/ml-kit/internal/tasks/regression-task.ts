import { PredictionTask } from './prediction-task';
import { ModelNameResolver, ModelOptionsResolver } from './index';
import { Regressor, InputData } from '../predictor';
import { Record } from '@awarns/core/internal/entities';
import { Regression } from '../entities';
import { ModelOptions } from '../model';

export class RegressionTask extends PredictionTask {
  constructor(
    predictionAim: string,
    modelName: string | ModelNameResolver,
    modelOptions: ModelOptions | ModelOptionsResolver
  ) {
    super(predictionAim, modelName, modelOptions, 'Regression');
  }

  protected async doPrediction(data: InputData): Promise<Record> {
    const model = await this.getModel();
    const regressor = new Regressor(model);
    const regressionResult = regressor.predict(data);
    return new Regression(regressionResult);
  }
}
