import { ModelType } from './type';

import Interpreter = org.tensorflow.lite.Interpreter;
import MetadataExtractor = org.tensorflow.lite.support.metadata.MetadataExtractor;

export interface ModelInfo {
  id: string;
  name: string;
  modelType: ModelType;
  version: string;
  author: string;
}

export class Model {
  private modelFile: java.io.File;

  private _interpreter: Interpreter;
  get interpreter(): Interpreter {
    if (!this._interpreter) this._interpreter = this.loadInterpreter();
    return this._interpreter;
  }

  private _modelInfo: ModelInfo;
  get modelInfo(): ModelInfo {
    if (!this._modelInfo) {
      this._modelInfo = this.loadModelInfo();
    }
    return this._modelInfo;
  }

  constructor(modelFilePath: string, private modelType: ModelType) {
    this.modelFile = new java.io.File(modelFilePath);
  }

  public closeInterpreter(): void {
    this.interpreter.close();
    this._interpreter = undefined;
  }

  protected createModelByteBuffer(): java.nio.ByteBuffer {
    const inputStream = new java.io.FileInputStream(this.modelFile);
    const channel = inputStream.getChannel();
    const buf = java.nio.ByteBuffer.allocate(channel.size());
    channel.read(buf);
    buf.rewind();

    return buf;
  }

  private loadInterpreter(): Interpreter {
    return new Interpreter(this.modelFile);
  }

  private loadModelInfo(): ModelInfo {
    const byteBuffer = this.createModelByteBuffer();
    return this.extractModelInfo(byteBuffer);
  }

  private extractModelInfo(byteBuffer: java.nio.ByteBuffer): ModelInfo {
    const metadataExtractor = new MetadataExtractor(byteBuffer);

    if (!metadataExtractor.hasMetadata()) {
      return {
        id: this.modelFile.getName(),
        name: this.modelFile.getName(),
        modelType: this.modelType,
        version: '-',
        author: 'Unknown',
      };
    }

    const modelMetadata = metadataExtractor.getModelMetadata();
    return {
      id: `${modelMetadata.name()}#${modelMetadata.version()}`,
      name: modelMetadata.name(),
      modelType: this.modelType,
      version: modelMetadata.version(),
      author: modelMetadata.author(),
    };
  }
}
