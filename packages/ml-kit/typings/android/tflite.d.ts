/// <reference path="android-declarations.d.ts"/>

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class DataTypeUtils {
        public static class: java.lang.Class<org.tensorflow.lite.DataTypeUtils>;
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class Delegate {
        public static class: java.lang.Class<org.tensorflow.lite.Delegate>;
        /**
         * Constructs a new instance of the org.tensorflow.lite.Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getNativeHandle(): number });
        public constructor();
        public getNativeHandle(): number;
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class Interpreter extends org.tensorflow.lite.InterpreterImpl {
        public static class: java.lang.Class<org.tensorflow.lite.Interpreter>;
        public constructor(param0: java.nio.ByteBuffer);
        public constructor(param0: java.io.File);
        public getSignatureOutputs(param0: string): androidNative.Array<string>;
        public constructor(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.Interpreter.Options);
        public runSignature(param0: java.util.Map<string, any>, param1: java.util.Map<string, any>): void;
        public runSignature(
          param0: java.util.Map<string, any>,
          param1: java.util.Map<string, any>,
          param2: string
        ): void;
        public getSignatureKeys(): androidNative.Array<string>;
        public constructor(param0: java.io.File, param1: org.tensorflow.lite.InterpreterImpl.Options);
        public constructor(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.InterpreterImpl.Options);
        public getSignatureInputs(param0: string): androidNative.Array<string>;
        public constructor(param0: java.io.File, param1: org.tensorflow.lite.Interpreter.Options);
        public getOutputTensorFromSignature(param0: string, param1: string): org.tensorflow.lite.Tensor;
        public getInputTensorFromSignature(param0: string, param1: string): org.tensorflow.lite.Tensor;
        public resetVariableTensors(): void;
        public setCancelled(param0: boolean): void;
      }
      export namespace Interpreter {
        export class Options extends org.tensorflow.lite.InterpreterImpl.Options {
          public static class: java.lang.Class<org.tensorflow.lite.Interpreter.Options>;
          public setUseNNAPI(param0: boolean): org.tensorflow.lite.Interpreter.Options;
          public constructor();
          public addDelegate(param0: org.tensorflow.lite.Delegate): org.tensorflow.lite.Interpreter.Options;
          public addDelegateFactory(
            param0: org.tensorflow.lite.DelegateFactory
          ): org.tensorflow.lite.Interpreter.Options;
          public setNumThreads(param0: number): org.tensorflow.lite.Interpreter.Options;
          public constructor(param0: org.tensorflow.lite.InterpreterImpl.Options);
          public setAllowBufferHandleOutput(param0: boolean): org.tensorflow.lite.Interpreter.Options;
          public setRuntime(
            param0: org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime
          ): org.tensorflow.lite.Interpreter.Options;
          /** @deprecated */
          public setAllowFp16PrecisionForFp32(param0: boolean): org.tensorflow.lite.Interpreter.Options;
          public setCancellable(param0: boolean): org.tensorflow.lite.Interpreter.Options;
          public setUseXNNPACK(param0: boolean): org.tensorflow.lite.Interpreter.Options;
          public constructor(param0: org.tensorflow.lite.InterpreterApi.Options);
        }
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class InterpreterFactoryImpl {
        public static class: java.lang.Class<org.tensorflow.lite.InterpreterFactoryImpl>;
        public runtimeVersion(): string;
        public create(
          param0: java.io.File,
          param1: org.tensorflow.lite.InterpreterApi.Options
        ): org.tensorflow.lite.InterpreterApi;
        public createNnApiDelegateImpl(
          param0: org.tensorflow.lite.nnapi.NnApiDelegate.Options
        ): org.tensorflow.lite.nnapi.NnApiDelegate.PrivateInterface;
        public schemaVersion(): string;
        public create(
          param0: java.nio.ByteBuffer,
          param1: org.tensorflow.lite.InterpreterApi.Options
        ): org.tensorflow.lite.InterpreterApi;
        public constructor();
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class InterpreterImpl {
        public static class: java.lang.Class<org.tensorflow.lite.InterpreterImpl>;
        public constructor(param0: java.nio.ByteBuffer);
        public close(): void;
        public getLastNativeInferenceDurationNanoseconds(): java.lang.Long;
        public constructor(param0: java.io.File);
        public finalize(): void;
        public allocateTensors(): void;
        public getInputTensorCount(): number;
        public getOutputTensor(param0: number): org.tensorflow.lite.Tensor;
        public resizeInput(param0: number, param1: androidNative.Array<number>, param2: boolean): void;
        public run(param0: any, param1: any): void;
        public getInputTensor(param0: number): org.tensorflow.lite.Tensor;
        public constructor(param0: java.io.File, param1: org.tensorflow.lite.InterpreterImpl.Options);
        public constructor(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.InterpreterImpl.Options);
        public getInputIndex(param0: string): number;
        public getOutputIndex(param0: string): number;
        public runForMultipleInputsOutputs(
          param0: androidNative.Array<any>,
          param1: java.util.Map<java.lang.Integer, any>
        ): void;
        public resizeInput(param0: number, param1: androidNative.Array<number>): void;
        public getOutputTensorCount(): number;
      }
      export namespace InterpreterImpl {
        export class Options {
          public static class: java.lang.Class<org.tensorflow.lite.InterpreterImpl.Options>;
          public constructor();
          public constructor(param0: org.tensorflow.lite.InterpreterImpl.Options);
          public constructor(param0: org.tensorflow.lite.InterpreterApi.Options);
        }
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class NativeInterpreterWrapper {
        public static class: java.lang.Class<org.tensorflow.lite.NativeInterpreterWrapper>;
        public close(): void;
        public getSignatureKeys(): androidNative.Array<string>;
        public runSignature(
          param0: java.util.Map<string, any>,
          param1: java.util.Map<string, any>,
          param2: string
        ): void;
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class NativeInterpreterWrapperExperimental extends org.tensorflow.lite.NativeInterpreterWrapper {
        public static class: java.lang.Class<org.tensorflow.lite.NativeInterpreterWrapperExperimental>;
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class NativeSignatureRunnerWrapper {
        public static class: java.lang.Class<org.tensorflow.lite.NativeSignatureRunnerWrapper>;
        public invoke(): void;
        public outputNames(): androidNative.Array<string>;
        public resizeInput(param0: string, param1: androidNative.Array<number>): boolean;
        public getInputIndex(param0: string): number;
        public getOutputIndex(param0: string): number;
        public allocateTensorsIfNeeded(): void;
        public inputNames(): androidNative.Array<string>;
        public getInputTensor(param0: string): org.tensorflow.lite.TensorImpl;
        public getOutputTensor(param0: string): org.tensorflow.lite.TensorImpl;
        public getSubgraphIndex(): number;
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class TensorImpl {
        public static class: java.lang.Class<org.tensorflow.lite.TensorImpl>;
        public name(): string;
        public asReadOnlyBuffer(): java.nio.ByteBuffer;
        public shapeSignature(): androidNative.Array<number>;
        public numBytes(): number;
        public shape(): androidNative.Array<number>;
        public quantizationParams(): org.tensorflow.lite.Tensor.QuantizationParams;
        public dataType(): org.tensorflow.lite.DataType;
        public index(): number;
        public numDimensions(): number;
        public numElements(): number;
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export namespace nnapi {
        export class NnApiDelegateImpl {
          public static class: java.lang.Class<org.tensorflow.lite.nnapi.NnApiDelegateImpl>;
          public constructor(param0: org.tensorflow.lite.nnapi.NnApiDelegate.Options);
          public getNativeHandle(): number;
          public close(): void;
          public getNnapiErrno(): number;
        }
      }
    }
  }
}

//Generics information:
