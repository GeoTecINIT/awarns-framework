import { Model } from './model';
import { ModelArchitecture } from './architecture';
import { ModelOptions } from './options';
import { Delegate, getDelegate } from './delegates';
import Interpreter = org.tensorflow.lite.Interpreter;
import InterpreterOptions = org.tensorflow.lite.Interpreter.Options;

export class BaseModel extends Model {
  private _interpreter: Interpreter;
  get interpreter(): Interpreter {
    if (!this._interpreter) this._interpreter = this.loadInterpreter();
    return this._interpreter;
  }

  private delegate: Delegate;

  constructor(modelFilePath: string, modelArchitecture: ModelArchitecture, private modelOptions?: ModelOptions) {
    super(modelFilePath, modelArchitecture);
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
    if (this.modelOptions === options) {
      return;
    }

    this.modelOptions = options;
    this.closeInterpreter();
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
}
