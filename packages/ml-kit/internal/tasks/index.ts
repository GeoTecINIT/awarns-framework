import { Task } from '@awarns/core/tasks';
import { ModelOptions } from '../model';
import { ClassificationTask } from './classification-task';
import { RegressionTask } from './regression-task';

export type ModelNameResolver = () => string;
export type ModelOptionsResolver = () => ModelOptions;

export function classificationTask(
  classificationAim: string,
  modelName: string | ModelNameResolver,
  modelOptions?: ModelOptions | ModelOptionsResolver
): Task {
  return new ClassificationTask(classificationAim, modelName, modelOptions);
}

export function regressionTask(
  regressionAim: string,
  modelName: string | ModelNameResolver,
  modelOptions?: ModelOptions | ModelOptionsResolver
): Task {
  return new RegressionTask(regressionAim, modelName, modelOptions);
}
