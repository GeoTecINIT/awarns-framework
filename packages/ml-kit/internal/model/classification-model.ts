import { BaseModel } from './base-model';
import { ModelArchitecture } from './architecture';
import { ModelOptions } from './options';
import MetadataExtractor = org.tensorflow.lite.support.metadata.MetadataExtractor;

export type Label = string;
const DEFAULT_LABELS_FILE = 'labels.txt';

export class ClassificationModel extends BaseModel {
  private _labels: Label[];
  get labels(): Label[] {
    if (!this._labels) {
      this._labels = this.loadLabels();
    }
    return this._labels;
  }

  constructor(modelFilePath: string, modelArchitecture: ModelArchitecture, modelOptions?: ModelOptions) {
    super(modelFilePath, modelArchitecture, modelOptions);
  }

  private loadLabels(): Label[] {
    const byteBuffer = this.createModelByteBuffer();
    return extractLabels(byteBuffer);
  }
}

function extractLabels(byteBuffer: java.nio.ByteBuffer): Label[] {
  const metadataExtractor = new MetadataExtractor(byteBuffer);
  const labelInputStream = metadataExtractor.getAssociatedFile(DEFAULT_LABELS_FILE);

  const reader = new java.io.BufferedReader(new java.io.InputStreamReader(labelInputStream));

  let next: string;
  const labels: Label[] = [];
  while ((next = reader.readLine()) !== null) {
    labels.push(next);
  }

  reader.close();

  return labels;
}
