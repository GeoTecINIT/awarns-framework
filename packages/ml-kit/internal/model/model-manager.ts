import { Model } from './model';
import { File, FileSystemEntity, Folder, knownFolders, path } from '@nativescript/core';
import { modelTypeFrom } from './type';

const MODELS_FOLDER = 'ml-models';

export class ModelManager {
  private models: Map<string, Model>;

  constructor(private baseModelsPath = path.join(knownFolders.currentApp().path, MODELS_FOLDER)) {
    this.models = new Map<string, Model>();
  }

  public async listModels(): Promise<Model[]> {
    if (this.models.size === 0) {
      const modelsFolder = Folder.fromPath(this.baseModelsPath);
      const modelFiles = await modelsFolder.getEntities();

      modelFiles.forEach((modelFile) => this.loadModel(modelFile));
    }

    return Array.from(this.models.values());
  }

  public async getModel(modelName: string): Promise<Model> {
    if (this.models.has(modelName)) {
      return this.models.get(modelName);
    }

    const modelPath = path.join(this.baseModelsPath, `${modelName}.tflite`);
    if (!File.exists(modelPath)) {
      throw new Error(`Model ${modelName} not found in ml-models.`);
    }

    const modelFile = File.fromPath(modelPath);
    return this.loadModel(modelFile);
  }

  private loadModel(modelFile: FileSystemEntity): Model {
    const modelName = modelFile.name.split('.')[0];
    const modelType = modelTypeFrom(modelName);
    const model = new Model(modelFile.path, modelType);
    this.models.set(modelName, model);
    return model;
  }
}
