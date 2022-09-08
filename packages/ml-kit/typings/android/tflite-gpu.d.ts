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
          public constructor(param0: org.tensorflow.lite.gpu.GpuDelegateFactory.Options);
          public constructor();
          public getNativeHandle(): number;
          public close(): void;
        }
        export namespace GpuDelegate {
          export class Options {
            public static class: java.lang.Class<org.tensorflow.lite.gpu.GpuDelegate.Options>;
            public constructor();
          }
        }
      }
    }
  }
}

//Generics information:
