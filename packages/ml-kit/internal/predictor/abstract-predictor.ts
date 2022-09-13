import { BaseModel } from '../model';
import { PredictionResult } from './prediction-result';
import ByteBuffer = java.nio.ByteBuffer;

export type InputData = number[];

export abstract class AbstractPredictor<T extends PredictionResult> {
  protected constructor(protected model: BaseModel) {}

  public predict(inputData: InputData): T {
    const inputBuffer = this.createInputBuffer(inputData);
    const outputBuffer = this.createOutputBuffer();

    this.model.interpreter.run(inputBuffer, outputBuffer);

    return this.getPredictionResult(outputBuffer);
  }

  private createInputBuffer(inputData: InputData): ByteBuffer {
    const inputByteSize = this.model.interpreter.getInputTensor(0).numBytes();
    const inputBuffer = createBuffer(inputByteSize);

    for (let value of inputData) {
      inputBuffer.putFloat(value);
    }
    return inputBuffer;
  }

  private createOutputBuffer(): ByteBuffer {
    const outputByteSize = this.model.interpreter.getOutputTensor(0).numBytes();
    return createBuffer(outputByteSize);
  }

  private getPredictionResult(outputBuffer: ByteBuffer): T {
    outputBuffer.rewind();
    const resultBuffer = outputBuffer.asFloatBuffer();

    const results: number[] = [];
    for (let i = 0; i < resultBuffer.capacity(); i++) {
      results.push(resultBuffer.get(i));
    }

    return this.interpretResults(results);
  }

  protected abstract interpretResults(results: number[]): T;
}

function createBuffer(size: number): ByteBuffer {
  return ByteBuffer.allocateDirect(size).order(java.nio.ByteOrder.nativeOrder());
}
