import { ModelArchitecture } from './architecture';
import MetadataExtractor = org.tensorflow.lite.support.metadata.MetadataExtractor;

export interface ModelInfo {
  id: string;
  name: string;
  architecture: ModelArchitecture;
  version: string;
  author: string;
}

export class Model {
  protected readonly modelFile: java.io.File;

  private _modelInfo: ModelInfo;
  get modelInfo(): ModelInfo {
    if (!this._modelInfo) {
      this._modelInfo = this.loadModelInfo();
    }
    return this._modelInfo;
  }

  constructor(modelFilePath: string, private modelArchitecture: ModelArchitecture) {
    this.modelFile = new java.io.File(modelFilePath);
  }

  protected createModelByteBuffer(): java.nio.ByteBuffer {
    const inputStream = new java.io.FileInputStream(this.modelFile);
    const channel = inputStream.getChannel();
    const buf = java.nio.ByteBuffer.allocate(channel.size());
    channel.read(buf);
    buf.rewind();

    return buf;
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
        architecture: this.modelArchitecture,
        version: '-',
        author: 'Unknown',
      };
    }

    const modelMetadata = metadataExtractor.getModelMetadata();
    return {
      id: this.modelFile.getName(),
      name: modelMetadata.name(),
      architecture: this.modelArchitecture,
      version: modelMetadata.version(),
      author: modelMetadata.author(),
    };
  }
}
