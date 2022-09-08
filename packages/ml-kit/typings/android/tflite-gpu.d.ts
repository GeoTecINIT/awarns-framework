/// <reference path="android-declarations.d.ts"/>

declare module org {
  export module tensorflow {
    export module lite {
      export module gpu {
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

declare module org {
  export module tensorflow {
    export module lite {
      export module gpu {
        export class GpuDelegate {
          public static class: java.lang.Class<org.tensorflow.lite.gpu.GpuDelegate>;
          public constructor(param0: org.tensorflow.lite.gpu.GpuDelegateFactory.Options);
          public constructor();
          public getNativeHandle(): number;
          public close(): void;
        }
        export module GpuDelegate {
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
