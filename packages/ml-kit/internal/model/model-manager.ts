import { Model } from './model';
import { File, FileSystemEntity, Folder, knownFolders, path } from '@nativescript/core';
import { ModelType } from './type';
import { ModelOptions } from './options';
import { modelArchitectureFrom } from './architecture';
import { BaseModel } from './base-model';
import { ClassificationModel } from './classification-model';

type LoadedModel<T> = T extends ModelType.CLASSIFICATION ? ClassificationModel : BaseModel;

const MODELS_FOLDER = 'ml-models';

export class ModelManager {
  private models: Map<string, Model>;
  private loadedModels: Map<string, Model>;

  constructor(private baseModelsPath = path.join(knownFolders.currentApp().path, MODELS_FOLDER)) {
    this.models = new Map<string, Model>();
    this.loadedModels = new Map<string, Model>();
  }

  public async listModels(): Promise<Model[]> {
    if (this.models.size === 0) {
      const modelsFolder = Folder.fromPath(this.baseModelsPath);
      const modelFiles = await modelsFolder.getEntities();

      modelFiles.forEach((modelFile) => {
        const model = loadModel(modelFile);
        this.models.set(model.modelInfo.id, model);
      });
    }

    return Array.from(this.models.values());
  }

  public async getModel<T extends ModelType>(
    modelName: string,
    modelType: T,
    modelOptions?: ModelOptions
  ): Promise<LoadedModel<T>> {
    if (this.loadedModels.has(modelName)) {
      const model = this.loadedModels.get(modelName) as LoadedModel<T>;
      if (modelOptions) {
        model.setModelOptions(modelOptions);
      }
      return model;
    }

    const modelPath = path.join(this.baseModelsPath, `${modelName}.tflite`);
    if (!File.exists(modelPath)) {
      throw new Error(`Model ${modelName} not found in ml-models.`);
    }

    const modelFile = File.fromPath(modelPath);
    const model = loadModel(modelFile, modelType, modelOptions);
    this.loadedModels.set(model.modelInfo.id, model);
    return model as LoadedModel<T>;
  }
}

export function loadModel(modelFile: FileSystemEntity, modelType?: ModelType, modelOptions?: ModelOptions): Model {
  const modelName = modelFile.name.split('.')[0];
  const modelArchitecture = modelArchitectureFrom(modelName);

  let model: Model;
  switch (modelType) {
    case ModelType.CLASSIFICATION:
      model = new ClassificationModel(modelFile.path, modelArchitecture, modelOptions);
      break;
    case ModelType.REGRESSION:
      model = new BaseModel(modelFile.path, modelArchitecture, modelOptions);
      break;
    default:
      model = new Model(modelFile.path, modelArchitecture);
  }

  return model;
}

let _instance: ModelManager;
export function getModelManager(): ModelManager {
  if (!_instance) {
    _instance = new ModelManager();
  }
  return _instance;
}
