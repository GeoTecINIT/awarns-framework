import { Task } from '@awarns/core/tasks';
import { ModelOptions } from '../model';
import { ClassificationTask } from './classification-task';
import { ModelNameResolver } from './prediction-task';
import { RegressionTask } from './regression-task';

export function classificationTask(
  classificationAim: string,
  modelName: string | ModelNameResolver,
  modelOptions?: ModelOptions
): Task {
  return new ClassificationTask(classificationAim, modelName, modelOptions);
}

export function regressionTask(
  regressionAim: string,
  modelName: string | ModelNameResolver,
  modelOptions?: ModelOptions
): Task {
  return new RegressionTask(regressionAim, modelName, modelOptions);
}
