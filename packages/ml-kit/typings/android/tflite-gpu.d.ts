/// <reference path="android-declarations.d.ts"/>

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export namespace gpu {
        export class CompatibilityList {
          public static class: java.lang.Class<org.tensorflow.lite.gpu.CompatibilityList>;
          public constructor();
          public getBestOptionsForThisDevice(): org.tensorflow.lite.gpu.GpuDelegate.Options;
          public close(): void;
          public isDelegateSupportedOnThisDevice(): boolean;
        }
      }
    }
  }
}

declare namespace org {
  export namespace tensorflow {
    export namespace lite {
      export namespace gpu {
        export class GpuDelegate {
          public static class: java.lang.Class<org.tensorflow.lite.gpu.GpuDelegate>;
          public constructor();
          public getNativeHandle(): number;
          public close(): void;
          public constructor(param0: org.tensorflow.lite.gpu.GpuDelegate.Options);
        }
        export namespace GpuDelegate {
          export class Options {
            public static class: java.lang.Class<org.tensorflow.lite.gpu.GpuDelegate.Options>;
            public static INFERENCE_PREFERENCE_FAST_SINGLE_ANSWER: number;
            public static INFERENCE_PREFERENCE_SUSTAINED_SPEED: number;
            public constructor();
            public setSerializationParams(param0: string, param1: string): org.tensorflow.lite.gpu.GpuDelegate.Options;
            public setPrecisionLossAllowed(param0: boolean): org.tensorflow.lite.gpu.GpuDelegate.Options;
            public setQuantizedModelsAllowed(param0: boolean): org.tensorflow.lite.gpu.GpuDelegate.Options;
            public setInferencePreference(param0: number): org.tensorflow.lite.gpu.GpuDelegate.Options;
          }
        }
      }
    }
  }
}

//Generics information:
