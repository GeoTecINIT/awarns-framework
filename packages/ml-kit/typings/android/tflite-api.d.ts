/// <reference path="android-declarations.d.ts"/>

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class DataType {
        public static class: java.lang.Class<org.tensorflow.lite.DataType>;
        public static FLOAT32: org.tensorflow.lite.DataType;
        public static INT32: org.tensorflow.lite.DataType;
        public static UINT8: org.tensorflow.lite.DataType;
        public static INT64: org.tensorflow.lite.DataType;
        public static STRING: org.tensorflow.lite.DataType;
        public static BOOL: org.tensorflow.lite.DataType;
        public static INT16: org.tensorflow.lite.DataType;
        public static INT8: org.tensorflow.lite.DataType;
        public byteSize(): number;
        public static values(): androidNative.Array<org.tensorflow.lite.DataType>;
        public static valueOf(param0: string): org.tensorflow.lite.DataType;
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
      export class InterpreterApi {
        public static class: java.lang.Class<org.tensorflow.lite.InterpreterApi>;
        /**
         * Constructs a new instance of the org.tensorflow.lite.InterpreterApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          create(
            param0: java.io.File,
            param1: org.tensorflow.lite.InterpreterApi.Options
          ): org.tensorflow.lite.InterpreterApi;
          create(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.InterpreterApi.Options
          ): org.tensorflow.lite.InterpreterApi;
          run(param0: any, param1: any): void;
          runForMultipleInputsOutputs(
            param0: androidNative.Array<any>,
            param1: java.util.Map<java.lang.Integer, any>
          ): void;
          allocateTensors(): void;
          resizeInput(param0: number, param1: androidNative.Array<number>): void;
          resizeInput(param0: number, param1: androidNative.Array<number>, param2: boolean): void;
          getInputTensorCount(): number;
          getInputIndex(param0: string): number;
          getInputTensor(param0: number): org.tensorflow.lite.Tensor;
          getOutputTensorCount(): number;
          getOutputIndex(param0: string): number;
          getOutputTensor(param0: number): org.tensorflow.lite.Tensor;
          getLastNativeInferenceDurationNanoseconds(): java.lang.Long;
          close(): void;
        });
        public constructor();
        public close(): void;
        public getLastNativeInferenceDurationNanoseconds(): java.lang.Long;
        public static create(
          param0: java.nio.ByteBuffer,
          param1: org.tensorflow.lite.InterpreterApi.Options
        ): org.tensorflow.lite.InterpreterApi;
        public allocateTensors(): void;
        public getInputTensorCount(): number;
        public getOutputTensor(param0: number): org.tensorflow.lite.Tensor;
        public resizeInput(param0: number, param1: androidNative.Array<number>, param2: boolean): void;
        public run(param0: any, param1: any): void;
        public getInputTensor(param0: number): org.tensorflow.lite.Tensor;
        public static create(
          param0: java.io.File,
          param1: org.tensorflow.lite.InterpreterApi.Options
        ): org.tensorflow.lite.InterpreterApi;
        public getInputIndex(param0: string): number;
        public getOutputIndex(param0: string): number;
        public runForMultipleInputsOutputs(
          param0: androidNative.Array<any>,
          param1: java.util.Map<java.lang.Integer, any>
        ): void;
        public resizeInput(param0: number, param1: androidNative.Array<number>): void;
        public getOutputTensorCount(): number;
      }
      export namespace InterpreterApi {
        export class Options {
          public static class: java.lang.Class<org.tensorflow.lite.InterpreterApi.Options>;
          public setUseNNAPI(param0: boolean): org.tensorflow.lite.InterpreterApi.Options;
          public addDelegate(param0: org.tensorflow.lite.Delegate): org.tensorflow.lite.InterpreterApi.Options;
          public getRuntime(): org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime;
          public setCancellable(param0: boolean): org.tensorflow.lite.InterpreterApi.Options;
          public getNumThreads(): number;
          public constructor();
          public setNumThreads(param0: number): org.tensorflow.lite.InterpreterApi.Options;
          public getUseNNAPI(): boolean;
          public getDelegates(): java.util.List<org.tensorflow.lite.Delegate>;
          public isCancellable(): boolean;
          public constructor(param0: org.tensorflow.lite.InterpreterApi.Options);
          public setRuntime(
            param0: org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime
          ): org.tensorflow.lite.InterpreterApi.Options;
        }
        export namespace Options {
          export class TfLiteRuntime {
            public static class: java.lang.Class<org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime>;
            public static FROM_APPLICATION_ONLY: org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime;
            public static FROM_SYSTEM_ONLY: org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime;
            public static PREFER_SYSTEM_OVER_APPLICATION: org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime;
            public static values(): androidNative.Array<org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime>;
            public static valueOf(param0: string): org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime;
          }
        }
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class InterpreterFactory {
        public static class: java.lang.Class<org.tensorflow.lite.InterpreterFactory>;
        public create(
          param0: java.io.File,
          param1: org.tensorflow.lite.InterpreterApi.Options
        ): org.tensorflow.lite.InterpreterApi;
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
      export class InterpreterFactoryApi {
        public static class: java.lang.Class<org.tensorflow.lite.InterpreterFactoryApi>;
        /**
         * Constructs a new instance of the org.tensorflow.lite.InterpreterFactoryApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          create(
            param0: java.io.File,
            param1: org.tensorflow.lite.InterpreterApi.Options
          ): org.tensorflow.lite.InterpreterApi;
          create(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.InterpreterApi.Options
          ): org.tensorflow.lite.InterpreterApi;
          runtimeVersion(): string;
          schemaVersion(): string;
          createNnApiDelegateImpl(
            param0: org.tensorflow.lite.nnapi.NnApiDelegate.Options
          ): org.tensorflow.lite.nnapi.NnApiDelegate.PrivateInterface;
        });
        public constructor();
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
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class Tensor {
        public static class: java.lang.Class<org.tensorflow.lite.Tensor>;
        /**
         * Constructs a new instance of the org.tensorflow.lite.Tensor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          dataType(): org.tensorflow.lite.DataType;
          numDimensions(): number;
          numBytes(): number;
          numElements(): number;
          shape(): androidNative.Array<number>;
          shapeSignature(): androidNative.Array<number>;
          index(): number;
          name(): string;
          quantizationParams(): org.tensorflow.lite.Tensor.QuantizationParams;
          asReadOnlyBuffer(): java.nio.ByteBuffer;
        });
        public constructor();
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
      export namespace Tensor {
        export class QuantizationParams {
          public static class: java.lang.Class<org.tensorflow.lite.Tensor.QuantizationParams>;
          public getZeroPoint(): number;
          public getScale(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export class TensorFlowLite {
        public static class: java.lang.Class<org.tensorflow.lite.TensorFlowLite>;
        public static schemaVersion(param0: org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime): string;
        public static init(): void;
        /** @deprecated */
        public static version(): string;
        public static runtimeVersion(param0: org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime): string;
        public static schemaVersion(): string;
        public static runtimeVersion(): string;
      }
      export namespace TensorFlowLite {
        export class PossiblyAvailableRuntime {
          public static class: java.lang.Class<org.tensorflow.lite.TensorFlowLite.PossiblyAvailableRuntime>;
          public constructor(param0: string, param1: string);
          public getFactory(): org.tensorflow.lite.InterpreterFactoryApi;
          public getException(): java.lang.Exception;
        }
        export class RuntimeFromApplication {
          public static class: java.lang.Class<org.tensorflow.lite.TensorFlowLite.RuntimeFromApplication>;
        }
        export class RuntimeFromSystem {
          public static class: java.lang.Class<org.tensorflow.lite.TensorFlowLite.RuntimeFromSystem>;
        }
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export namespace annotations {
        export class UsedByReflection {
          public static class: java.lang.Class<org.tensorflow.lite.annotations.UsedByReflection>;
          /**
           * Constructs a new instance of the org.tensorflow.lite.annotations.UsedByReflection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { value(): string });
          public constructor();
          public value(): string;
        }
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export namespace nnapi {
        export class NnApiDelegate extends org.tensorflow.lite.Delegate {
          public static class: java.lang.Class<org.tensorflow.lite.nnapi.NnApiDelegate>;
          public constructor();
          public hasErrors(): boolean;
          public constructor(param0: org.tensorflow.lite.nnapi.NnApiDelegate.Options);
          public getNativeHandle(): number;
          public close(): void;
          public initWithInterpreterFactoryApi(param0: org.tensorflow.lite.InterpreterFactoryApi): void;
          public getNnapiErrno(): number;
        }
        export namespace NnApiDelegate {
          export class Options {
            public static class: java.lang.Class<org.tensorflow.lite.nnapi.NnApiDelegate.Options>;
            public static EXECUTION_PREFERENCE_UNDEFINED: number;
            public static EXECUTION_PREFERENCE_LOW_POWER: number;
            public static EXECUTION_PREFERENCE_FAST_SINGLE_ANSWER: number;
            public static EXECUTION_PREFERENCE_SUSTAINED_SPEED: number;
            public getUseNnapiCpu(): java.lang.Boolean;
            public constructor();
            public setExecutionPreference(param0: number): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
            public setAcceleratorName(param0: string): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
            public setAllowFp16(param0: boolean): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
            public getModelToken(): string;
            public getCacheDir(): string;
            public getAllowFp16(): boolean;
            public getNnApiSupportLibraryHandle(): number;
            public setUseNnapiCpu(param0: boolean): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
            public getAcceleratorName(): string;
            public setModelToken(param0: string): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
            public setMaxNumberOfDelegatedPartitions(param0: number): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
            public getExecutionPreference(): number;
            public setNnApiSupportLibraryHandle(param0: number): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
            public getMaxNumberOfDelegatedPartitions(): number;
            public setCacheDir(param0: string): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
          }
          export class PrivateInterface extends org.tensorflow.lite.Delegate {
            public static class: java.lang.Class<org.tensorflow.lite.nnapi.NnApiDelegate.PrivateInterface>;
            /**
             * Constructs a new instance of the org.tensorflow.lite.nnapi.NnApiDelegate$PrivateInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getNnapiErrno(): number; close(): void; getNativeHandle(): number });
            public constructor();
            public getNativeHandle(): number;
            public getNnapiErrno(): number;
            public close(): void;
          }
        }
      }
    }
  }
}

//Generics information:
