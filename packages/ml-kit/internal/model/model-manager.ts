import { Model } from './model';
import { File, FileSystemEntity, Folder, knownFolders, path } from '@nativescript/core';
import { ModelType } from './type';
import { ModelOptions } from './options';
import { modelArchitectureFrom } from './architecture';
import { BaseModel } from './base-model';
import { ClassificationModel } from './classification-model';

const MODELS_FOLDER = 'ml-models';

export class ModelManager {
  private models: Map<string, Model>;

  constructor(private baseModelsPath = path.join(knownFolders.currentApp().path, MODELS_FOLDER)) {
    this.models = new Map<string, BaseModel>();
  }

  public async listModels(): Promise<Model[]> {
    if (this.models.size === 0) {
      const modelsFolder = Folder.fromPath(this.baseModelsPath);
      const modelFiles = await modelsFolder.getEntities();

      modelFiles.forEach((modelFile) => this.loadModel(modelFile));
    }

    return Array.from(this.models.values());
  }

  public async getModel(modelName: string, modelType: ModelType, modelOptions?: ModelOptions): Promise<Model> {
    if (this.models.has(modelName)) {
      const model = this.models.get(modelName) as BaseModel;
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
    return this.loadModel(modelFile, modelType, modelOptions);
  }

  private loadModel(modelFile: FileSystemEntity, modelType?: ModelType, modelOptions?: ModelOptions): Model {
    const modelName = modelFile.name.split('.')[0];
    const modelArchitecture = modelArchitectureFrom(modelName);

    let model: Model;
    switch (modelType) {
      case ModelType.CLASSIFICATION:
        model = new ClassificationModel(modelFile.path, modelArchitecture, modelOptions);
        break;
      default:
        model = new BaseModel(modelFile.path, modelArchitecture, modelOptions);
    }

    this.models.set(modelName, model);
    return model;
  }
}

let _instance: ModelManager;
export function getModelManager(): ModelManager {
  if (!_instance) {
    _instance = new ModelManager();
  }
  return _instance;
}
