import { ModelType } from './type';
import { ModelOptions } from './options';
import { Delegate, getDelegate } from './delegates';

import Interpreter = org.tensorflow.lite.Interpreter;
import InterpreterOptions = org.tensorflow.lite.Interpreter.Options;
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

  private delegate: Delegate;

  constructor(modelFilePath: string, private modelType: ModelType, private modelOptions?: ModelOptions) {
    this.modelFile = new java.io.File(modelFilePath);
  }

  public closeInterpreter(): void {
    this.interpreter.close();
    this._interpreter = undefined;
    if (this.delegate) {
      this.delegate.close();
      this.delegate = undefined;
    }
  }

  public setModelOptions(options: ModelOptions): void {
    this.modelOptions = options;
    this.closeInterpreter();
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
    const interpreterOptions = this.getInterpreterOptions();
    return new Interpreter(this.modelFile, interpreterOptions);
  }

  private getInterpreterOptions(): InterpreterOptions {
    const options = new Interpreter.Options();

    if (this.modelOptions) {
      const acceleration = this.modelOptions.acceleration;
      if (typeof acceleration === 'number') {
        if (acceleration >= 0) {
          // Value 0 is accepted (no multithreading)
          options.setNumThreads(acceleration);
        }
      } else {
        this.delegate = getDelegate(acceleration);
        if (this.delegate) {
          options.addDelegate(this.delegate.getDelegate());
        }
      }
    }

    return options;
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
