import { Task, TaskParams, DispatchableEvent, TaskOutcome } from '@awarns/core/tasks';
import { ModelNameResolver, ModelOptionsResolver } from './index';
import { camelCase, pascalCase } from '@awarns/core/utils/strings';
import { getModelManager, Model, ModelOptions, ModelType } from '../model';
import { InputData } from '../predictor';
import { Record } from '@awarns/core/internal/entities';
import { Dialogs } from '@nativescript/core';

export abstract class PredictionTask extends Task {
  protected constructor(
    protected predictionAim: string,
    private modelName: string | ModelNameResolver,
    private modelOptions: ModelOptions | ModelOptionsResolver,
    private modelType: ModelType,
    tag: string,
    private modelManager = getModelManager()
  ) {
    super(`${camelCase(predictionAim)}${pascalCase(modelType)}${tag}`, {
      outputEventNames: [`${camelCase(predictionAim)}Predicted`],
    });
  }

  async checkIfCanRun(): Promise<void> {
    await this.getModel(); // Internal API throws error if it is unable to find the model
  }

  async prepare(): Promise<void> {
    await Dialogs.alert({
      title: 'Model not found',
      message: `Model ${this.modelName} for task ${this.name} was not found in ml-models.`,
      okButtonText: 'Ok',
    });

    throw new Error(`Model ${this.modelName} not found. Please, place it in ml-models directory`);
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const data: InputData = invocationEvent.data as InputData;
    if (!data) {
      throw new Error('PredictionTask was called without input data to make the prediction');
    }

    const prediction = await this.doPrediction(data);

    return {
      result: prediction,
    };
  }

  protected async getModel(): Promise<Model> {
    const name = typeof this.modelName === 'function' ? this.modelName() : this.modelName;
    const options = typeof this.modelOptions === 'function' ? this.modelOptions() : this.modelOptions;

    return await this.modelManager.getModel(name, this.modelType, options);
  }

  protected abstract doPrediction(data: InputData): Promise<Record>;
}
