/// <reference path="android-declarations.d.ts"/>

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AbsOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AbsOptions>;
          public static endAbsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.AbsOptionsT): void;
          public static startAbsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.AbsOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.AbsOptions;
          public static ValidateVersion(): void;
          public static getRootAsAbsOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.AbsOptions
          ): org.tensorflow.lite.schema.AbsOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.AbsOptionsT
          ): number;
          public static getRootAsAbsOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.AbsOptions;
        }
        export module AbsOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.AbsOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.AbsOptions,
              param1: number
            ): org.tensorflow.lite.schema.AbsOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.AbsOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.AbsOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AbsOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AbsOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ActivationFunctionType {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ActivationFunctionType>;
          public static NONE: number;
          public static RELU: number;
          public static RELU_N1_TO_1: number;
          public static RELU6: number;
          public static TANH: number;
          public static SIGN_BIT: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AddNOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AddNOptions>;
          public unpackTo(param0: org.tensorflow.lite.schema.AddNOptionsT): void;
          public static getRootAsAddNOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.AddNOptions
          ): org.tensorflow.lite.schema.AddNOptions;
          public constructor();
          public static endAddNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsAddNOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddNOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.AddNOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startAddNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.AddNOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddNOptions;
        }
        export module AddNOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.AddNOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.AddNOptions.Vector;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.AddNOptions,
              param1: number
            ): org.tensorflow.lite.schema.AddNOptions;
            public get(param0: number): org.tensorflow.lite.schema.AddNOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AddNOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AddNOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AddOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AddOptions>;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.AddOptionsT
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.AddOptionsT): void;
          public static createAddOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: boolean
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddOptions;
          public static startAddOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.AddOptionsT;
          public static endAddOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsAddOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.AddOptions
          ): org.tensorflow.lite.schema.AddOptions;
          public fusedActivationFunction(): number;
          public constructor();
          public static getRootAsAddOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddOptions;
          public potScaleInt16(): boolean;
          public static addPotScaleInt16(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
        }
        export module AddOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.AddOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.AddOptions;
            public get(
              param0: org.tensorflow.lite.schema.AddOptions,
              param1: number
            ): org.tensorflow.lite.schema.AddOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.AddOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AddOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AddOptionsT>;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getPotScaleInt16(): boolean;
          public setPotScaleInt16(param0: boolean): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ArgMaxOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMaxOptions>;
          public outputType(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMaxOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ArgMaxOptionsT
          ): number;
          public static getRootAsArgMaxOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMaxOptions;
          public static getRootAsArgMaxOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ArgMaxOptions
          ): org.tensorflow.lite.schema.ArgMaxOptions;
          public static createArgMaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public unpack(): org.tensorflow.lite.schema.ArgMaxOptionsT;
          public static addOutputType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public constructor();
          public static startArgMaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endArgMaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.ArgMaxOptionsT): void;
        }
        export module ArgMaxOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMaxOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.ArgMaxOptions,
              param1: number
            ): org.tensorflow.lite.schema.ArgMaxOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ArgMaxOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ArgMaxOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ArgMaxOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMaxOptionsT>;
          public constructor();
          public getOutputType(): number;
          public setOutputType(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ArgMinOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMinOptions>;
          public outputType(): number;
          public static getRootAsArgMinOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMinOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.ArgMinOptionsT): void;
          public static startArgMinOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.ArgMinOptionsT;
          public static ValidateVersion(): void;
          public static addOutputType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public constructor();
          public static endArgMinOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static createArgMinOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMinOptions;
          public static getRootAsArgMinOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ArgMinOptions
          ): org.tensorflow.lite.schema.ArgMinOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ArgMinOptionsT
          ): number;
        }
        export module ArgMinOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMinOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.ArgMinOptions,
              param1: number
            ): org.tensorflow.lite.schema.ArgMinOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ArgMinOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ArgMinOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ArgMinOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMinOptionsT>;
          public constructor();
          public getOutputType(): number;
          public setOutputType(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AssignVariableOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AssignVariableOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.AssignVariableOptionsT
          ): number;
          public static getRootAsAssignVariableOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.AssignVariableOptions
          ): org.tensorflow.lite.schema.AssignVariableOptions;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.AssignVariableOptions;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.AssignVariableOptionsT;
          public static endAssignVariableOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsAssignVariableOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.AssignVariableOptions;
          public static startAssignVariableOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.AssignVariableOptionsT): void;
        }
        export module AssignVariableOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.AssignVariableOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.AssignVariableOptions,
              param1: number
            ): org.tensorflow.lite.schema.AssignVariableOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.AssignVariableOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.AssignVariableOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class AssignVariableOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.AssignVariableOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BatchMatMulOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BatchMatMulOptions>;
          public static startBatchMatMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsBatchMatMulOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BatchMatMulOptions;
          public unpack(): org.tensorflow.lite.schema.BatchMatMulOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BatchMatMulOptionsT
          ): number;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.BatchMatMulOptions;
          public asymmetricQuantizeInputs(): boolean;
          public static getRootAsBatchMatMulOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.BatchMatMulOptions
          ): org.tensorflow.lite.schema.BatchMatMulOptions;
          public static endBatchMatMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public adjY(): boolean;
          public static addAdjY(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public constructor();
          public static createBatchMatMulOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean,
            param2: boolean,
            param3: boolean
          ): number;
          public static addAdjX(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
          public adjX(): boolean;
          public unpackTo(param0: org.tensorflow.lite.schema.BatchMatMulOptionsT): void;
        }
        export module BatchMatMulOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.BatchMatMulOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.BatchMatMulOptions,
              param1: number
            ): org.tensorflow.lite.schema.BatchMatMulOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.BatchMatMulOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.BatchMatMulOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BatchMatMulOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BatchMatMulOptionsT>;
          public getAdjX(): boolean;
          public getAdjY(): boolean;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public setAdjX(param0: boolean): void;
          public setAdjY(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BatchToSpaceNDOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BatchToSpaceNDOptions>;
          public static endBatchToSpaceNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
          public constructor();
          public static getRootAsBatchToSpaceNDOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.BatchToSpaceNDOptions
          ): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.BatchToSpaceNDOptionsT): void;
          public unpack(): org.tensorflow.lite.schema.BatchToSpaceNDOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsBatchToSpaceNDOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BatchToSpaceNDOptionsT
          ): number;
          public static startBatchToSpaceNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module BatchToSpaceNDOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.BatchToSpaceNDOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.BatchToSpaceNDOptions,
              param1: number
            ): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.BatchToSpaceNDOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BatchToSpaceNDOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BatchToSpaceNDOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BidirectionalSequenceLSTMOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions>;
          public static startBidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public projClip(): number;
          public timeMajor(): boolean;
          public static createBidirectionalSequenceLSTMOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: boolean,
            param5: boolean,
            param6: boolean
          ): number;
          public unpack(): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptionsT;
          public cellClip(): number;
          public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endBidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptionsT): void;
          public static ValidateVersion(): void;
          public asymmetricQuantizeInputs(): boolean;
          public static addProjClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addMergeOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static getRootAsBidirectionalSequenceLSTMOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
          public static addCellClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptionsT
          ): number;
          public fusedActivationFunction(): number;
          public constructor();
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
          public static getRootAsBidirectionalSequenceLSTMOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions
          ): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
          public mergeOutputs(): boolean;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
        }
        export module BidirectionalSequenceLSTMOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions,
              param1: number
            ): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BidirectionalSequenceLSTMOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptionsT>;
          public getMergeOutputs(): boolean;
          public getProjClip(): number;
          public setMergeOutputs(param0: boolean): void;
          public setFusedActivationFunction(param0: number): void;
          public setProjClip(param0: number): void;
          public getFusedActivationFunction(): number;
          public getTimeMajor(): boolean;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public getCellClip(): number;
          public setCellClip(param0: number): void;
          public setTimeMajor(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BidirectionalSequenceRNNOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions>;
          public static startBidirectionalSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptionsT;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public timeMajor(): boolean;
          public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static endBidirectionalSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
          public asymmetricQuantizeInputs(): boolean;
          public static addMergeOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static getRootAsBidirectionalSequenceRNNOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
          public fusedActivationFunction(): number;
          public constructor();
          public static createBidirectionalSequenceRNNOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean,
            param2: number,
            param3: boolean,
            param4: boolean
          ): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BidirectionalSequenceRNNOptionsT
          ): number;
          public mergeOutputs(): boolean;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
          public static getRootAsBidirectionalSequenceRNNOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions
          ): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.BidirectionalSequenceRNNOptionsT): void;
        }
        export module BidirectionalSequenceRNNOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions,
              param1: number
            ): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BidirectionalSequenceRNNOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceRNNOptionsT>;
          public getTimeMajor(): boolean;
          public getMergeOutputs(): boolean;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public setMergeOutputs(param0: boolean): void;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public setTimeMajor(param0: boolean): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BroadcastToOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BroadcastToOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BroadcastToOptionsT
          ): number;
          public static getRootAsBroadcastToOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.BroadcastToOptions
          ): org.tensorflow.lite.schema.BroadcastToOptions;
          public static endBroadcastToOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static getRootAsBroadcastToOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BroadcastToOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.BroadcastToOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startBroadcastToOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.BroadcastToOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.BroadcastToOptionsT): void;
        }
        export module BroadcastToOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.BroadcastToOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.BroadcastToOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.BroadcastToOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.BroadcastToOptions,
              param1: number
            ): org.tensorflow.lite.schema.BroadcastToOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BroadcastToOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BroadcastToOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BucketizeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BucketizeOptions>;
          public boundariesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static getRootAsBucketizeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.BucketizeOptions
          ): org.tensorflow.lite.schema.BucketizeOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.BucketizeOptionsT;
          public static ValidateVersion(): void;
          public static createBoundariesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static startBoundariesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startBucketizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsBucketizeOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.BucketizeOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.BucketizeOptionsT): void;
          public boundariesAsByteBuffer(): java.nio.ByteBuffer;
          public static createBucketizeOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public constructor();
          public static endBucketizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.BucketizeOptions;
          public boundariesVector(): com.google.flatbuffers.FloatVector;
          public static addBoundaries(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BucketizeOptionsT
          ): number;
          public boundaries(param0: number): number;
          public boundariesLength(): number;
          public boundariesVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
        }
        export module BucketizeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.BucketizeOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.BucketizeOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.BucketizeOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.BucketizeOptions,
              param1: number
            ): org.tensorflow.lite.schema.BucketizeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BucketizeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BucketizeOptionsT>;
          public setBoundaries(param0: androidNative.Array<number>): void;
          public constructor();
          public getBoundaries(): androidNative.Array<number>;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Buffer {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Buffer>;
          public static createBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public static createDataVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Buffer;
          public static getRootAsBuffer(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Buffer
          ): org.tensorflow.lite.schema.Buffer;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BufferT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startDataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public dataVector(): com.google.flatbuffers.ByteVector;
          public static getRootAsBuffer(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Buffer;
          public static endBuffer(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addData(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public dataAsByteBuffer(): java.nio.ByteBuffer;
          public dataInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static startBuffer(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.BufferT): void;
          public data(param0: number): number;
          public static createDataVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: java.nio.ByteBuffer
          ): number;
          public dataLength(): number;
          public unpack(): org.tensorflow.lite.schema.BufferT;
          public dataVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
        }
        export module Buffer {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Buffer.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.Buffer;
            public constructor();
            public get(param0: org.tensorflow.lite.schema.Buffer, param1: number): org.tensorflow.lite.schema.Buffer;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Buffer.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BufferT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BufferT>;
          public constructor();
          public getData(): androidNative.Array<number>;
          public setData(param0: androidNative.Array<number>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BuiltinOperator {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BuiltinOperator>;
          public static ADD: number;
          public static AVERAGE_POOL_2D: number;
          public static CONCATENATION: number;
          public static CONV_2D: number;
          public static DEPTHWISE_CONV_2D: number;
          public static DEPTH_TO_SPACE: number;
          public static DEQUANTIZE: number;
          public static EMBEDDING_LOOKUP: number;
          public static FLOOR: number;
          public static FULLY_CONNECTED: number;
          public static HASHTABLE_LOOKUP: number;
          public static L2_NORMALIZATION: number;
          public static L2_POOL_2D: number;
          public static LOCAL_RESPONSE_NORMALIZATION: number;
          public static LOGISTIC: number;
          public static LSH_PROJECTION: number;
          public static LSTM: number;
          public static MAX_POOL_2D: number;
          public static MUL: number;
          public static RELU: number;
          public static RELU_N1_TO_1: number;
          public static RELU6: number;
          public static RESHAPE: number;
          public static RESIZE_BILINEAR: number;
          public static RNN: number;
          public static SOFTMAX: number;
          public static SPACE_TO_DEPTH: number;
          public static SVDF: number;
          public static TANH: number;
          public static CONCAT_EMBEDDINGS: number;
          public static SKIP_GRAM: number;
          public static CALL: number;
          public static CUSTOM: number;
          public static EMBEDDING_LOOKUP_SPARSE: number;
          public static PAD: number;
          public static UNIDIRECTIONAL_SEQUENCE_RNN: number;
          public static GATHER: number;
          public static BATCH_TO_SPACE_ND: number;
          public static SPACE_TO_BATCH_ND: number;
          public static TRANSPOSE: number;
          public static MEAN: number;
          public static SUB: number;
          public static DIV: number;
          public static SQUEEZE: number;
          public static UNIDIRECTIONAL_SEQUENCE_LSTM: number;
          public static STRIDED_SLICE: number;
          public static BIDIRECTIONAL_SEQUENCE_RNN: number;
          public static EXP: number;
          public static TOPK_V2: number;
          public static SPLIT: number;
          public static LOG_SOFTMAX: number;
          public static DELEGATE: number;
          public static BIDIRECTIONAL_SEQUENCE_LSTM: number;
          public static CAST: number;
          public static PRELU: number;
          public static MAXIMUM: number;
          public static ARG_MAX: number;
          public static MINIMUM: number;
          public static LESS: number;
          public static NEG: number;
          public static PADV2: number;
          public static GREATER: number;
          public static GREATER_EQUAL: number;
          public static LESS_EQUAL: number;
          public static SELECT: number;
          public static SLICE: number;
          public static SIN: number;
          public static TRANSPOSE_CONV: number;
          public static SPARSE_TO_DENSE: number;
          public static TILE: number;
          public static EXPAND_DIMS: number;
          public static EQUAL: number;
          public static NOT_EQUAL: number;
          public static LOG: number;
          public static SUM: number;
          public static SQRT: number;
          public static RSQRT: number;
          public static SHAPE: number;
          public static POW: number;
          public static ARG_MIN: number;
          public static FAKE_QUANT: number;
          public static REDUCE_PROD: number;
          public static REDUCE_MAX: number;
          public static PACK: number;
          public static LOGICAL_OR: number;
          public static ONE_HOT: number;
          public static LOGICAL_AND: number;
          public static LOGICAL_NOT: number;
          public static UNPACK: number;
          public static REDUCE_MIN: number;
          public static FLOOR_DIV: number;
          public static REDUCE_ANY: number;
          public static SQUARE: number;
          public static ZEROS_LIKE: number;
          public static FILL: number;
          public static FLOOR_MOD: number;
          public static RANGE: number;
          public static RESIZE_NEAREST_NEIGHBOR: number;
          public static LEAKY_RELU: number;
          public static SQUARED_DIFFERENCE: number;
          public static MIRROR_PAD: number;
          public static ABS: number;
          public static SPLIT_V: number;
          public static UNIQUE: number;
          public static CEIL: number;
          public static REVERSE_V2: number;
          public static ADD_N: number;
          public static GATHER_ND: number;
          public static COS: number;
          public static WHERE: number;
          public static RANK: number;
          public static ELU: number;
          public static REVERSE_SEQUENCE: number;
          public static MATRIX_DIAG: number;
          public static QUANTIZE: number;
          public static MATRIX_SET_DIAG: number;
          public static ROUND: number;
          public static HARD_SWISH: number;
          public static IF: number;
          public static WHILE: number;
          public static NON_MAX_SUPPRESSION_V4: number;
          public static NON_MAX_SUPPRESSION_V5: number;
          public static SCATTER_ND: number;
          public static SELECT_V2: number;
          public static DENSIFY: number;
          public static SEGMENT_SUM: number;
          public static BATCH_MATMUL: number;
          public static PLACEHOLDER_FOR_GREATER_OP_CODES: number;
          public static CUMSUM: number;
          public static CALL_ONCE: number;
          public static BROADCAST_TO: number;
          public static RFFT2D: number;
          public static CONV_3D: number;
          public static IMAG: number;
          public static REAL: number;
          public static COMPLEX_ABS: number;
          public static HASHTABLE: number;
          public static HASHTABLE_FIND: number;
          public static HASHTABLE_IMPORT: number;
          public static HASHTABLE_SIZE: number;
          public static REDUCE_ALL: number;
          public static CONV_3D_TRANSPOSE: number;
          public static VAR_HANDLE: number;
          public static READ_VARIABLE: number;
          public static ASSIGN_VARIABLE: number;
          public static BROADCAST_ARGS: number;
          public static RANDOM_STANDARD_NORMAL: number;
          public static BUCKETIZE: number;
          public static RANDOM_UNIFORM: number;
          public static MULTINOMIAL: number;
          public static GELU: number;
          public static DYNAMIC_UPDATE_SLICE: number;
          public static RELU_0_TO_1: number;
          public static UNSORTED_SEGMENT_PROD: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BuiltinOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BuiltinOptions>;
          public static NONE: number;
          public static Conv2DOptions: number;
          public static DepthwiseConv2DOptions: number;
          public static ConcatEmbeddingsOptions: number;
          public static LSHProjectionOptions: number;
          public static Pool2DOptions: number;
          public static SVDFOptions: number;
          public static RNNOptions: number;
          public static FullyConnectedOptions: number;
          public static SoftmaxOptions: number;
          public static ConcatenationOptions: number;
          public static AddOptions: number;
          public static L2NormOptions: number;
          public static LocalResponseNormalizationOptions: number;
          public static LSTMOptions: number;
          public static ResizeBilinearOptions: number;
          public static CallOptions: number;
          public static ReshapeOptions: number;
          public static SkipGramOptions: number;
          public static SpaceToDepthOptions: number;
          public static EmbeddingLookupSparseOptions: number;
          public static MulOptions: number;
          public static PadOptions: number;
          public static GatherOptions: number;
          public static BatchToSpaceNDOptions: number;
          public static SpaceToBatchNDOptions: number;
          public static TransposeOptions: number;
          public static ReducerOptions: number;
          public static SubOptions: number;
          public static DivOptions: number;
          public static SqueezeOptions: number;
          public static SequenceRNNOptions: number;
          public static StridedSliceOptions: number;
          public static ExpOptions: number;
          public static TopKV2Options: number;
          public static SplitOptions: number;
          public static LogSoftmaxOptions: number;
          public static CastOptions: number;
          public static DequantizeOptions: number;
          public static MaximumMinimumOptions: number;
          public static ArgMaxOptions: number;
          public static LessOptions: number;
          public static NegOptions: number;
          public static PadV2Options: number;
          public static GreaterOptions: number;
          public static GreaterEqualOptions: number;
          public static LessEqualOptions: number;
          public static SelectOptions: number;
          public static SliceOptions: number;
          public static TransposeConvOptions: number;
          public static SparseToDenseOptions: number;
          public static TileOptions: number;
          public static ExpandDimsOptions: number;
          public static EqualOptions: number;
          public static NotEqualOptions: number;
          public static ShapeOptions: number;
          public static PowOptions: number;
          public static ArgMinOptions: number;
          public static FakeQuantOptions: number;
          public static PackOptions: number;
          public static LogicalOrOptions: number;
          public static OneHotOptions: number;
          public static LogicalAndOptions: number;
          public static LogicalNotOptions: number;
          public static UnpackOptions: number;
          public static FloorDivOptions: number;
          public static SquareOptions: number;
          public static ZerosLikeOptions: number;
          public static FillOptions: number;
          public static BidirectionalSequenceLSTMOptions: number;
          public static BidirectionalSequenceRNNOptions: number;
          public static UnidirectionalSequenceLSTMOptions: number;
          public static FloorModOptions: number;
          public static RangeOptions: number;
          public static ResizeNearestNeighborOptions: number;
          public static LeakyReluOptions: number;
          public static SquaredDifferenceOptions: number;
          public static MirrorPadOptions: number;
          public static AbsOptions: number;
          public static SplitVOptions: number;
          public static UniqueOptions: number;
          public static ReverseV2Options: number;
          public static AddNOptions: number;
          public static GatherNdOptions: number;
          public static CosOptions: number;
          public static WhereOptions: number;
          public static RankOptions: number;
          public static ReverseSequenceOptions: number;
          public static MatrixDiagOptions: number;
          public static QuantizeOptions: number;
          public static MatrixSetDiagOptions: number;
          public static HardSwishOptions: number;
          public static IfOptions: number;
          public static WhileOptions: number;
          public static DepthToSpaceOptions: number;
          public static NonMaxSuppressionV4Options: number;
          public static NonMaxSuppressionV5Options: number;
          public static ScatterNdOptions: number;
          public static SelectV2Options: number;
          public static DensifyOptions: number;
          public static SegmentSumOptions: number;
          public static BatchMatMulOptions: number;
          public static CumsumOptions: number;
          public static CallOnceOptions: number;
          public static BroadcastToOptions: number;
          public static Rfft2dOptions: number;
          public static Conv3DOptions: number;
          public static HashtableOptions: number;
          public static HashtableFindOptions: number;
          public static HashtableImportOptions: number;
          public static HashtableSizeOptions: number;
          public static VarHandleOptions: number;
          public static ReadVariableOptions: number;
          public static AssignVariableOptions: number;
          public static RandomOptions: number;
          public static BucketizeOptions: number;
          public static GeluOptions: number;
          public static DynamicUpdateSliceOptions: number;
          public static UnsortedSegmentProdOptions: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class BuiltinOptionsUnion {
          public static class: java.lang.Class<org.tensorflow.lite.schema.BuiltinOptionsUnion>;
          public getValue(): any;
          public asConcatenationOptions(): org.tensorflow.lite.schema.ConcatenationOptionsT;
          public asZerosLikeOptions(): org.tensorflow.lite.schema.ZerosLikeOptionsT;
          public asPackOptions(): org.tensorflow.lite.schema.PackOptionsT;
          public asDynamicUpdateSliceOptions(): org.tensorflow.lite.schema.DynamicUpdateSliceOptionsT;
          public asUnidirectionalSequenceLSTMOptions(): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptionsT;
          public asL2NormOptions(): org.tensorflow.lite.schema.L2NormOptionsT;
          public asSplitOptions(): org.tensorflow.lite.schema.SplitOptionsT;
          public asConcatEmbeddingsOptions(): org.tensorflow.lite.schema.ConcatEmbeddingsOptionsT;
          public asHashtableImportOptions(): org.tensorflow.lite.schema.HashtableImportOptionsT;
          public asConv3DOptions(): org.tensorflow.lite.schema.Conv3DOptionsT;
          public asBroadcastToOptions(): org.tensorflow.lite.schema.BroadcastToOptionsT;
          public asTransposeConvOptions(): org.tensorflow.lite.schema.TransposeConvOptionsT;
          public asPool2DOptions(): org.tensorflow.lite.schema.Pool2DOptionsT;
          public asResizeNearestNeighborOptions(): org.tensorflow.lite.schema.ResizeNearestNeighborOptionsT;
          public asTopKV2Options(): org.tensorflow.lite.schema.TopKV2OptionsT;
          public asFloorDivOptions(): org.tensorflow.lite.schema.FloorDivOptionsT;
          public constructor();
          public asLeakyReluOptions(): org.tensorflow.lite.schema.LeakyReluOptionsT;
          public asQuantizeOptions(): org.tensorflow.lite.schema.QuantizeOptionsT;
          public asCosOptions(): org.tensorflow.lite.schema.CosOptionsT;
          public asLogicalAndOptions(): org.tensorflow.lite.schema.LogicalAndOptionsT;
          public asLogicalOrOptions(): org.tensorflow.lite.schema.LogicalOrOptionsT;
          public asDequantizeOptions(): org.tensorflow.lite.schema.DequantizeOptionsT;
          public asLSTMOptions(): org.tensorflow.lite.schema.LSTMOptionsT;
          public asSpaceToBatchNDOptions(): org.tensorflow.lite.schema.SpaceToBatchNDOptionsT;
          public asAssignVariableOptions(): org.tensorflow.lite.schema.AssignVariableOptionsT;
          public asReadVariableOptions(): org.tensorflow.lite.schema.ReadVariableOptionsT;
          public asRangeOptions(): org.tensorflow.lite.schema.RangeOptionsT;
          public asConv2DOptions(): org.tensorflow.lite.schema.Conv2DOptionsT;
          public asAbsOptions(): org.tensorflow.lite.schema.AbsOptionsT;
          public asNegOptions(): org.tensorflow.lite.schema.NegOptionsT;
          public asStridedSliceOptions(): org.tensorflow.lite.schema.StridedSliceOptionsT;
          public asLessEqualOptions(): org.tensorflow.lite.schema.LessEqualOptionsT;
          public asSVDFOptions(): org.tensorflow.lite.schema.SVDFOptionsT;
          public asUnpackOptions(): org.tensorflow.lite.schema.UnpackOptionsT;
          public asSubOptions(): org.tensorflow.lite.schema.SubOptionsT;
          public asDepthToSpaceOptions(): org.tensorflow.lite.schema.DepthToSpaceOptionsT;
          public asArgMinOptions(): org.tensorflow.lite.schema.ArgMinOptionsT;
          public asFloorModOptions(): org.tensorflow.lite.schema.FloorModOptionsT;
          public asTileOptions(): org.tensorflow.lite.schema.TileOptionsT;
          public asDivOptions(): org.tensorflow.lite.schema.DivOptionsT;
          public asSliceOptions(): org.tensorflow.lite.schema.SliceOptionsT;
          public asSquareOptions(): org.tensorflow.lite.schema.SquareOptionsT;
          public asHardSwishOptions(): org.tensorflow.lite.schema.HardSwishOptionsT;
          public asPadOptions(): org.tensorflow.lite.schema.PadOptionsT;
          public asSegmentSumOptions(): org.tensorflow.lite.schema.SegmentSumOptionsT;
          public asSoftmaxOptions(): org.tensorflow.lite.schema.SoftmaxOptionsT;
          public asBidirectionalSequenceRNNOptions(): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptionsT;
          public asGreaterOptions(): org.tensorflow.lite.schema.GreaterOptionsT;
          public asVarHandleOptions(): org.tensorflow.lite.schema.VarHandleOptionsT;
          public asIfOptions(): org.tensorflow.lite.schema.IfOptionsT;
          public asBatchMatMulOptions(): org.tensorflow.lite.schema.BatchMatMulOptionsT;
          public asCallOptions(): org.tensorflow.lite.schema.CallOptionsT;
          public asCallOnceOptions(): org.tensorflow.lite.schema.CallOnceOptionsT;
          public asMirrorPadOptions(): org.tensorflow.lite.schema.MirrorPadOptionsT;
          public asTransposeOptions(): org.tensorflow.lite.schema.TransposeOptionsT;
          public asHashtableSizeOptions(): org.tensorflow.lite.schema.HashtableSizeOptionsT;
          public asNotEqualOptions(): org.tensorflow.lite.schema.NotEqualOptionsT;
          public asGeluOptions(): org.tensorflow.lite.schema.GeluOptionsT;
          public asWhereOptions(): org.tensorflow.lite.schema.WhereOptionsT;
          public asSelectV2Options(): org.tensorflow.lite.schema.SelectV2OptionsT;
          public asMatrixSetDiagOptions(): org.tensorflow.lite.schema.MatrixSetDiagOptionsT;
          public asFillOptions(): org.tensorflow.lite.schema.FillOptionsT;
          public asResizeBilinearOptions(): org.tensorflow.lite.schema.ResizeBilinearOptionsT;
          public asSkipGramOptions(): org.tensorflow.lite.schema.SkipGramOptionsT;
          public asRankOptions(): org.tensorflow.lite.schema.RankOptionsT;
          public asHashtableFindOptions(): org.tensorflow.lite.schema.HashtableFindOptionsT;
          public asOneHotOptions(): org.tensorflow.lite.schema.OneHotOptionsT;
          public getType(): number;
          public asGatherOptions(): org.tensorflow.lite.schema.GatherOptionsT;
          public asMulOptions(): org.tensorflow.lite.schema.MulOptionsT;
          public asCastOptions(): org.tensorflow.lite.schema.CastOptionsT;
          public asGreaterEqualOptions(): org.tensorflow.lite.schema.GreaterEqualOptionsT;
          public asLSHProjectionOptions(): org.tensorflow.lite.schema.LSHProjectionOptionsT;
          public asPowOptions(): org.tensorflow.lite.schema.PowOptionsT;
          public asBucketizeOptions(): org.tensorflow.lite.schema.BucketizeOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.BuiltinOptionsUnion
          ): number;
          public asExpandDimsOptions(): org.tensorflow.lite.schema.ExpandDimsOptionsT;
          public asArgMaxOptions(): org.tensorflow.lite.schema.ArgMaxOptionsT;
          public setType(param0: number): void;
          public asRandomOptions(): org.tensorflow.lite.schema.RandomOptionsT;
          public asBatchToSpaceNDOptions(): org.tensorflow.lite.schema.BatchToSpaceNDOptionsT;
          public asRfft2dOptions(): org.tensorflow.lite.schema.Rfft2dOptionsT;
          public setValue(param0: any): void;
          public asEmbeddingLookupSparseOptions(): org.tensorflow.lite.schema.EmbeddingLookupSparseOptionsT;
          public asSelectOptions(): org.tensorflow.lite.schema.SelectOptionsT;
          public asDensifyOptions(): org.tensorflow.lite.schema.DensifyOptionsT;
          public asSqueezeOptions(): org.tensorflow.lite.schema.SqueezeOptionsT;
          public asReverseSequenceOptions(): org.tensorflow.lite.schema.ReverseSequenceOptionsT;
          public asDepthwiseConv2DOptions(): org.tensorflow.lite.schema.DepthwiseConv2DOptionsT;
          public asReshapeOptions(): org.tensorflow.lite.schema.ReshapeOptionsT;
          public asUniqueOptions(): org.tensorflow.lite.schema.UniqueOptionsT;
          public asAddNOptions(): org.tensorflow.lite.schema.AddNOptionsT;
          public asNonMaxSuppressionV4Options(): org.tensorflow.lite.schema.NonMaxSuppressionV4OptionsT;
          public asFakeQuantOptions(): org.tensorflow.lite.schema.FakeQuantOptionsT;
          public asLocalResponseNormalizationOptions(): org.tensorflow.lite.schema.LocalResponseNormalizationOptionsT;
          public asScatterNdOptions(): org.tensorflow.lite.schema.ScatterNdOptionsT;
          public asReverseV2Options(): org.tensorflow.lite.schema.ReverseV2OptionsT;
          public asShapeOptions(): org.tensorflow.lite.schema.ShapeOptionsT;
          public asLogicalNotOptions(): org.tensorflow.lite.schema.LogicalNotOptionsT;
          public asUnsortedSegmentProdOptions(): org.tensorflow.lite.schema.UnsortedSegmentProdOptionsT;
          public asLogSoftmaxOptions(): org.tensorflow.lite.schema.LogSoftmaxOptionsT;
          public asWhileOptions(): org.tensorflow.lite.schema.WhileOptionsT;
          public asExpOptions(): org.tensorflow.lite.schema.ExpOptionsT;
          public asEqualOptions(): org.tensorflow.lite.schema.EqualOptionsT;
          public asSequenceRNNOptions(): org.tensorflow.lite.schema.SequenceRNNOptionsT;
          public asGatherNdOptions(): org.tensorflow.lite.schema.GatherNdOptionsT;
          public asLessOptions(): org.tensorflow.lite.schema.LessOptionsT;
          public asRNNOptions(): org.tensorflow.lite.schema.RNNOptionsT;
          public asPadV2Options(): org.tensorflow.lite.schema.PadV2OptionsT;
          public asMatrixDiagOptions(): org.tensorflow.lite.schema.MatrixDiagOptionsT;
          public asAddOptions(): org.tensorflow.lite.schema.AddOptionsT;
          public asReducerOptions(): org.tensorflow.lite.schema.ReducerOptionsT;
          public asCumsumOptions(): org.tensorflow.lite.schema.CumsumOptionsT;
          public asSplitVOptions(): org.tensorflow.lite.schema.SplitVOptionsT;
          public asSparseToDenseOptions(): org.tensorflow.lite.schema.SparseToDenseOptionsT;
          public asSpaceToDepthOptions(): org.tensorflow.lite.schema.SpaceToDepthOptionsT;
          public asSquaredDifferenceOptions(): org.tensorflow.lite.schema.SquaredDifferenceOptionsT;
          public asFullyConnectedOptions(): org.tensorflow.lite.schema.FullyConnectedOptionsT;
          public asNonMaxSuppressionV5Options(): org.tensorflow.lite.schema.NonMaxSuppressionV5OptionsT;
          public asHashtableOptions(): org.tensorflow.lite.schema.HashtableOptionsT;
          public asBidirectionalSequenceLSTMOptions(): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptionsT;
          public asMaximumMinimumOptions(): org.tensorflow.lite.schema.MaximumMinimumOptionsT;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CallOnceOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CallOnceOptions>;
          public static startCallOnceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static createCallOnceOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public static endCallOnceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.CallOnceOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.CallOnceOptionsT
          ): number;
          public static getRootAsCallOnceOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.CallOnceOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CallOnceOptions;
          public static getRootAsCallOnceOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.CallOnceOptions
          ): org.tensorflow.lite.schema.CallOnceOptions;
          public constructor();
          public static addInitSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.CallOnceOptionsT;
          public initSubgraphIndex(): number;
        }
        export module CallOnceOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.CallOnceOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.CallOnceOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.CallOnceOptions,
              param1: number
            ): org.tensorflow.lite.schema.CallOnceOptions;
            public get(param0: number): org.tensorflow.lite.schema.CallOnceOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CallOnceOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CallOnceOptionsT>;
          public getInitSubgraphIndex(): number;
          public setInitSubgraphIndex(param0: number): void;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CallOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CallOptions>;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CallOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.CallOptionsT): void;
          public static getRootAsCallOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CallOptions;
          public static endCallOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addSubgraph(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public subgraph(): number;
          public constructor();
          public static startCallOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsCallOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.CallOptions
          ): org.tensorflow.lite.schema.CallOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.CallOptionsT
          ): number;
          public static createCallOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public unpack(): org.tensorflow.lite.schema.CallOptionsT;
        }
        export module CallOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.CallOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.CallOptions,
              param1: number
            ): org.tensorflow.lite.schema.CallOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.CallOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.CallOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CallOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CallOptionsT>;
          public constructor();
          public setSubgraph(param0: number): void;
          public getSubgraph(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CastOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CastOptions>;
          public static getRootAsCastOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.CastOptions
          ): org.tensorflow.lite.schema.CastOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static createCastOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public static startCastOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.CastOptionsT;
          public static addOutDataType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public inDataType(): number;
          public static addInDataType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpackTo(param0: org.tensorflow.lite.schema.CastOptionsT): void;
          public constructor();
          public static getRootAsCastOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CastOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CastOptions;
          public outDataType(): number;
          public static endCastOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.CastOptionsT
          ): number;
        }
        export module CastOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.CastOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.CastOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.CastOptions,
              param1: number
            ): org.tensorflow.lite.schema.CastOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.CastOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CastOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CastOptionsT>;
          public setInDataType(param0: number): void;
          public getOutDataType(): number;
          public constructor();
          public getInDataType(): number;
          public setOutDataType(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CombinerType {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CombinerType>;
          public static SUM: number;
          public static MEAN: number;
          public static SQRTN: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ConcatEmbeddingsOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatEmbeddingsOptions>;
          public embeddingDimPerChannelInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public numColumnsPerChannelVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public embeddingDimPerChannelVector(
            param0: com.google.flatbuffers.IntVector
          ): com.google.flatbuffers.IntVector;
          public embeddingDimPerChannelVector(): com.google.flatbuffers.IntVector;
          public embeddingDimPerChannelLength(): number;
          public unpack(): org.tensorflow.lite.schema.ConcatEmbeddingsOptionsT;
          public static endConcatEmbeddingsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public embeddingDimPerChannelAsByteBuffer(): java.nio.ByteBuffer;
          public static startEmbeddingDimPerChannelVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static getRootAsConcatEmbeddingsOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
          public numColumnsPerChannelLength(): number;
          public static createNumColumnsPerChannelVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ConcatEmbeddingsOptionsT
          ): number;
          public constructor();
          public numColumnsPerChannelAsByteBuffer(): java.nio.ByteBuffer;
          public embeddingDimPerChannel(param0: number): number;
          public unpackTo(param0: org.tensorflow.lite.schema.ConcatEmbeddingsOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static addNumColumnsPerChannel(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static ValidateVersion(): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
          public numChannels(): number;
          public numColumnsPerChannelInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public numColumnsPerChannel(param0: number): number;
          public static startConcatEmbeddingsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public numColumnsPerChannelVector(): com.google.flatbuffers.IntVector;
          public static getRootAsConcatEmbeddingsOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ConcatEmbeddingsOptions
          ): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
          public static addNumChannels(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addEmbeddingDimPerChannel(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static startNumColumnsPerChannelVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static createConcatEmbeddingsOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number
          ): number;
          public static createEmbeddingDimPerChannelVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
        }
        export module ConcatEmbeddingsOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatEmbeddingsOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ConcatEmbeddingsOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.ConcatEmbeddingsOptions,
              param1: number
            ): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ConcatEmbeddingsOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatEmbeddingsOptionsT>;
          public getEmbeddingDimPerChannel(): androidNative.Array<number>;
          public setNumColumnsPerChannel(param0: androidNative.Array<number>): void;
          public getNumChannels(): number;
          public constructor();
          public setNumChannels(param0: number): void;
          public getNumColumnsPerChannel(): androidNative.Array<number>;
          public setEmbeddingDimPerChannel(param0: androidNative.Array<number>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ConcatenationOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatenationOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ConcatenationOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ConcatenationOptions;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpackTo(param0: org.tensorflow.lite.schema.ConcatenationOptionsT): void;
          public unpack(): org.tensorflow.lite.schema.ConcatenationOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startConcatenationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsConcatenationOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ConcatenationOptions;
          public fusedActivationFunction(): number;
          public static createConcatenationOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public constructor();
          public axis(): number;
          public static endConcatenationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsConcatenationOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ConcatenationOptions
          ): org.tensorflow.lite.schema.ConcatenationOptions;
        }
        export module ConcatenationOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatenationOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.ConcatenationOptions,
              param1: number
            ): org.tensorflow.lite.schema.ConcatenationOptions;
            public get(param0: number): org.tensorflow.lite.schema.ConcatenationOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ConcatenationOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ConcatenationOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatenationOptionsT>;
          public constructor();
          public getAxis(): number;
          public setFusedActivationFunction(param0: number): void;
          public setAxis(param0: number): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Conv2DOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Conv2DOptions>;
          public static startConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static addDilationWFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.Conv2DOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsConv2DOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Conv2DOptions;
          public static addDilationHFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpackTo(param0: org.tensorflow.lite.schema.Conv2DOptionsT): void;
          public fusedActivationFunction(): number;
          public padding(): number;
          public static createConv2DOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number
          ): number;
          public constructor();
          public strideH(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Conv2DOptions;
          public static getRootAsConv2DOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Conv2DOptions
          ): org.tensorflow.lite.schema.Conv2DOptions;
          public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.Conv2DOptionsT;
          public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public strideW(): number;
          public dilationWFactor(): number;
          public dilationHFactor(): number;
        }
        export module Conv2DOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Conv2DOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Conv2DOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.Conv2DOptions;
            public get(
              param0: org.tensorflow.lite.schema.Conv2DOptions,
              param1: number
            ): org.tensorflow.lite.schema.Conv2DOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Conv2DOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Conv2DOptionsT>;
          public getDilationHFactor(): number;
          public setFusedActivationFunction(param0: number): void;
          public setDilationWFactor(param0: number): void;
          public setStrideH(param0: number): void;
          public getFusedActivationFunction(): number;
          public getDilationWFactor(): number;
          public getStrideH(): number;
          public getPadding(): number;
          public getStrideW(): number;
          public setDilationHFactor(param0: number): void;
          public constructor();
          public setPadding(param0: number): void;
          public setStrideW(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Conv3DOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Conv3DOptions>;
          public static addDilationDFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addDilationWFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.Conv3DOptionsT
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.Conv3DOptionsT): void;
          public static addDilationHFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public padding(): number;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.Conv3DOptionsT;
          public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public dilationDFactor(): number;
          public static addStrideD(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsConv3DOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Conv3DOptions
          ): org.tensorflow.lite.schema.Conv3DOptions;
          public dilationHFactor(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Conv3DOptions;
          public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsConv3DOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Conv3DOptions;
          public static createConv3DOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number,
            param7: number,
            param8: number
          ): number;
          public fusedActivationFunction(): number;
          public static startConv3DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endConv3DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public strideH(): number;
          public strideD(): number;
          public strideW(): number;
          public dilationWFactor(): number;
        }
        export module Conv3DOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Conv3DOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.Conv3DOptions,
              param1: number
            ): org.tensorflow.lite.schema.Conv3DOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.Conv3DOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Conv3DOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Conv3DOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Conv3DOptionsT>;
          public getDilationHFactor(): number;
          public setFusedActivationFunction(param0: number): void;
          public setStrideD(param0: number): void;
          public setDilationWFactor(param0: number): void;
          public setStrideH(param0: number): void;
          public getFusedActivationFunction(): number;
          public getDilationDFactor(): number;
          public getDilationWFactor(): number;
          public getStrideH(): number;
          public getPadding(): number;
          public setDilationDFactor(param0: number): void;
          public getStrideW(): number;
          public setDilationHFactor(param0: number): void;
          public constructor();
          public setPadding(param0: number): void;
          public getStrideD(): number;
          public setStrideW(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CosOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CosOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.CosOptionsT
          ): number;
          public unpack(): org.tensorflow.lite.schema.CosOptionsT;
          public static endCosOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsCosOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.CosOptions
          ): org.tensorflow.lite.schema.CosOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CosOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.CosOptionsT): void;
          public static getRootAsCosOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CosOptions;
          public static startCosOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module CosOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.CosOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.CosOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.CosOptions,
              param1: number
            ): org.tensorflow.lite.schema.CosOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.CosOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CosOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CosOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CumsumOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CumsumOptions>;
          public unpackTo(param0: org.tensorflow.lite.schema.CumsumOptionsT): void;
          public static getRootAsCumsumOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.CumsumOptions
          ): org.tensorflow.lite.schema.CumsumOptions;
          public static getRootAsCumsumOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CumsumOptions;
          public static addReverse(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.CumsumOptionsT;
          public static addExclusive(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public reverse(): boolean;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.CumsumOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CumsumOptions;
          public static createCumsumOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean,
            param2: boolean
          ): number;
          public constructor();
          public static endCumsumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static startCumsumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public exclusive(): boolean;
        }
        export module CumsumOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.CumsumOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.CumsumOptions,
              param1: number
            ): org.tensorflow.lite.schema.CumsumOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.CumsumOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.CumsumOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CumsumOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CumsumOptionsT>;
          public getExclusive(): boolean;
          public constructor();
          public getReverse(): boolean;
          public setExclusive(param0: boolean): void;
          public setReverse(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CustomOptionsFormat {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CustomOptionsFormat>;
          public static FLEXBUFFERS: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CustomQuantization {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CustomQuantization>;
          public customVector(): com.google.flatbuffers.ByteVector;
          public static startCustomQuantization(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public customLength(): number;
          public customVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CustomQuantization;
          public custom(param0: number): number;
          public static addCustom(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createCustomVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static createCustomQuantization(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public static getRootAsCustomQuantization(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.CustomQuantization
          ): org.tensorflow.lite.schema.CustomQuantization;
          public customAsByteBuffer(): java.nio.ByteBuffer;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.CustomQuantizationT
          ): number;
          public unpack(): org.tensorflow.lite.schema.CustomQuantizationT;
          public constructor();
          public static getRootAsCustomQuantization(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.CustomQuantization;
          public static startCustomVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createCustomVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: java.nio.ByteBuffer
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.CustomQuantizationT): void;
          public static endCustomQuantization(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public customInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
        }
        export module CustomQuantization {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.CustomQuantization.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.CustomQuantization;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.CustomQuantization.Vector;
            public get(
              param0: org.tensorflow.lite.schema.CustomQuantization,
              param1: number
            ): org.tensorflow.lite.schema.CustomQuantization;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class CustomQuantizationT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.CustomQuantizationT>;
          public getCustom(): androidNative.Array<number>;
          public constructor();
          public setCustom(param0: androidNative.Array<number>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DensifyOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DensifyOptions>;
          public static startDensifyOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.DensifyOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.DensifyOptionsT
          ): number;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.DensifyOptionsT): void;
          public static getRootAsDensifyOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DensifyOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DensifyOptions;
          public static getRootAsDensifyOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.DensifyOptions
          ): org.tensorflow.lite.schema.DensifyOptions;
          public static endDensifyOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module DensifyOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.DensifyOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.DensifyOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.DensifyOptions;
            public get(
              param0: org.tensorflow.lite.schema.DensifyOptions,
              param1: number
            ): org.tensorflow.lite.schema.DensifyOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DensifyOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DensifyOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DepthToSpaceOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DepthToSpaceOptions>;
          public static endDepthToSpaceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static createDepthToSpaceOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.DepthToSpaceOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public blockSize(): number;
          public static ValidateVersion(): void;
          public static getRootAsDepthToSpaceOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.DepthToSpaceOptions
          ): org.tensorflow.lite.schema.DepthToSpaceOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.DepthToSpaceOptionsT): void;
          public static startDepthToSpaceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsDepthToSpaceOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.DepthToSpaceOptions;
          public static addBlockSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.DepthToSpaceOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DepthToSpaceOptions;
          public constructor();
        }
        export module DepthToSpaceOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.DepthToSpaceOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.DepthToSpaceOptions,
              param1: number
            ): org.tensorflow.lite.schema.DepthToSpaceOptions;
            public get(param0: number): org.tensorflow.lite.schema.DepthToSpaceOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.DepthToSpaceOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DepthToSpaceOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DepthToSpaceOptionsT>;
          public setBlockSize(param0: number): void;
          public constructor();
          public getBlockSize(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DepthwiseConv2DOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DepthwiseConv2DOptions>;
          public static getRootAsDepthwiseConv2DOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
          public static addDilationWFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createDepthwiseConv2DOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number,
            param7: number
          ): number;
          public static addDilationHFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public padding(): number;
          public unpack(): org.tensorflow.lite.schema.DepthwiseConv2DOptionsT;
          public constructor();
          public depthMultiplier(): number;
          public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addDepthMultiplier(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.DepthwiseConv2DOptionsT
          ): number;
          public static getRootAsDepthwiseConv2DOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.DepthwiseConv2DOptions
          ): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
          public dilationHFactor(): number;
          public unpackTo(param0: org.tensorflow.lite.schema.DepthwiseConv2DOptionsT): void;
          public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static endDepthwiseConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
          public fusedActivationFunction(): number;
          public static startDepthwiseConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public strideH(): number;
          public strideW(): number;
          public dilationWFactor(): number;
        }
        export module DepthwiseConv2DOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.DepthwiseConv2DOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.DepthwiseConv2DOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.DepthwiseConv2DOptions,
              param1: number
            ): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DepthwiseConv2DOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DepthwiseConv2DOptionsT>;
          public getDilationHFactor(): number;
          public setFusedActivationFunction(param0: number): void;
          public setDilationWFactor(param0: number): void;
          public setDepthMultiplier(param0: number): void;
          public setStrideH(param0: number): void;
          public getFusedActivationFunction(): number;
          public getDilationWFactor(): number;
          public getStrideH(): number;
          public getPadding(): number;
          public getDepthMultiplier(): number;
          public getStrideW(): number;
          public setDilationHFactor(param0: number): void;
          public constructor();
          public setPadding(param0: number): void;
          public setStrideW(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DequantizeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DequantizeOptions>;
          public static getRootAsDequantizeOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.DequantizeOptions;
          public unpack(): org.tensorflow.lite.schema.DequantizeOptionsT;
          public static endDequantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DequantizeOptions;
          public constructor();
          public static getRootAsDequantizeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.DequantizeOptions
          ): org.tensorflow.lite.schema.DequantizeOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.DequantizeOptionsT
          ): number;
          public static startDequantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.DequantizeOptionsT): void;
        }
        export module DequantizeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.DequantizeOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.DequantizeOptions,
              param1: number
            ): org.tensorflow.lite.schema.DequantizeOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.DequantizeOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.DequantizeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DequantizeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DequantizeOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DimensionMetadata {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DimensionMetadata>;
          public static addFormat(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addArraySegmentsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createDimensionMetadata(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number
          ): number;
          public denseSize(): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DimensionMetadata;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.DimensionMetadataT
          ): number;
          public static addArrayIndicesType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addDenseSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public format(): number;
          public arrayIndices(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
          public unpackTo(param0: org.tensorflow.lite.schema.DimensionMetadataT): void;
          public static startDimensionMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addArrayIndices(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public arraySegments(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
          public arraySegmentsType(): number;
          public static addArraySegments(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.DimensionMetadataT;
          public static getRootAsDimensionMetadata(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.DimensionMetadata
          ): org.tensorflow.lite.schema.DimensionMetadata;
          public static getRootAsDimensionMetadata(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.DimensionMetadata;
          public static endDimensionMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public arrayIndicesType(): number;
        }
        export module DimensionMetadata {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.DimensionMetadata.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.DimensionMetadata.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.DimensionMetadata;
            public get(
              param0: org.tensorflow.lite.schema.DimensionMetadata,
              param1: number
            ): org.tensorflow.lite.schema.DimensionMetadata;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DimensionMetadataT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DimensionMetadataT>;
          public getFormat(): number;
          public setDenseSize(param0: number): void;
          public getArraySegments(): org.tensorflow.lite.schema.SparseIndexVectorUnion;
          public constructor();
          public setArraySegments(param0: org.tensorflow.lite.schema.SparseIndexVectorUnion): void;
          public setFormat(param0: number): void;
          public getArrayIndices(): org.tensorflow.lite.schema.SparseIndexVectorUnion;
          public setArrayIndices(param0: org.tensorflow.lite.schema.SparseIndexVectorUnion): void;
          public getDenseSize(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DimensionType {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DimensionType>;
          public static DENSE: number;
          public static SPARSE_CSR: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DivOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DivOptions>;
          public static startDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsDivOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.DivOptions
          ): org.tensorflow.lite.schema.DivOptions;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.DivOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DivOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsDivOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DivOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.DivOptionsT): void;
          public static createDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public fusedActivationFunction(): number;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.DivOptionsT;
          public static endDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module DivOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.DivOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.DivOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.DivOptions,
              param1: number
            ): org.tensorflow.lite.schema.DivOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.DivOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DivOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DivOptionsT>;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DynamicUpdateSliceOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DynamicUpdateSliceOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.DynamicUpdateSliceOptionsT
          ): number;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.DynamicUpdateSliceOptionsT;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.DynamicUpdateSliceOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endDynamicUpdateSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.DynamicUpdateSliceOptionsT): void;
          public static ValidateVersion(): void;
          public static getRootAsDynamicUpdateSliceOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.DynamicUpdateSliceOptions
          ): org.tensorflow.lite.schema.DynamicUpdateSliceOptions;
          public static getRootAsDynamicUpdateSliceOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.DynamicUpdateSliceOptions;
          public static startDynamicUpdateSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module DynamicUpdateSliceOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.DynamicUpdateSliceOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.DynamicUpdateSliceOptions;
            public get(
              param0: org.tensorflow.lite.schema.DynamicUpdateSliceOptions,
              param1: number
            ): org.tensorflow.lite.schema.DynamicUpdateSliceOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.DynamicUpdateSliceOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class DynamicUpdateSliceOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.DynamicUpdateSliceOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class EmbeddingLookupSparseOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.EmbeddingLookupSparseOptions>;
          public static addCombiner(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startEmbeddingLookupSparseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.EmbeddingLookupSparseOptionsT;
          public static createEmbeddingLookupSparseOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static endEmbeddingLookupSparseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.EmbeddingLookupSparseOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.EmbeddingLookupSparseOptionsT
          ): number;
          public combiner(): number;
          public constructor();
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
          public static getRootAsEmbeddingLookupSparseOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
          public static getRootAsEmbeddingLookupSparseOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.EmbeddingLookupSparseOptions
          ): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
        }
        export module EmbeddingLookupSparseOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.EmbeddingLookupSparseOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.EmbeddingLookupSparseOptions,
              param1: number
            ): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
            public get(param0: number): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class EmbeddingLookupSparseOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.EmbeddingLookupSparseOptionsT>;
          public constructor();
          public getCombiner(): number;
          public setCombiner(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class EqualOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.EqualOptions>;
          public static endEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.EqualOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.EqualOptionsT
          ): number;
          public static getRootAsEqualOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.EqualOptions
          ): org.tensorflow.lite.schema.EqualOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.EqualOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.EqualOptionsT): void;
          public static getRootAsEqualOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.EqualOptions;
        }
        export module EqualOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.EqualOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.EqualOptions;
            public get(
              param0: org.tensorflow.lite.schema.EqualOptions,
              param1: number
            ): org.tensorflow.lite.schema.EqualOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.EqualOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class EqualOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.EqualOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ExpOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ExpOptions>;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpOptions;
          public static startExpOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.ExpOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ExpOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static endExpOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.ExpOptionsT;
          public static getRootAsExpOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ExpOptions
          ): org.tensorflow.lite.schema.ExpOptions;
          public static getRootAsExpOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpOptions;
        }
        export module ExpOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ExpOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.ExpOptions,
              param1: number
            ): org.tensorflow.lite.schema.ExpOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ExpOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.ExpOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ExpOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ExpOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ExpandDimsOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ExpandDimsOptions>;
          public unpackTo(param0: org.tensorflow.lite.schema.ExpandDimsOptionsT): void;
          public constructor();
          public static endExpandDimsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ExpandDimsOptionsT
          ): number;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpandDimsOptions;
          public static getRootAsExpandDimsOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ExpandDimsOptions;
          public unpack(): org.tensorflow.lite.schema.ExpandDimsOptionsT;
          public static getRootAsExpandDimsOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ExpandDimsOptions
          ): org.tensorflow.lite.schema.ExpandDimsOptions;
          public static startExpandDimsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module ExpandDimsOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ExpandDimsOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.ExpandDimsOptions,
              param1: number
            ): org.tensorflow.lite.schema.ExpandDimsOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ExpandDimsOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ExpandDimsOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ExpandDimsOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ExpandDimsOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FakeQuantOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FakeQuantOptions>;
          public static addNumBits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsFakeQuantOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.FakeQuantOptions;
          public static startFakeQuantOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.FakeQuantOptionsT;
          public static endFakeQuantOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.FakeQuantOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static addNarrowRange(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public numBits(): number;
          public min(): number;
          public narrowRange(): boolean;
          public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FakeQuantOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.FakeQuantOptionsT): void;
          public constructor();
          public max(): number;
          public static createFakeQuantOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: boolean
          ): number;
          public static getRootAsFakeQuantOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.FakeQuantOptions
          ): org.tensorflow.lite.schema.FakeQuantOptions;
        }
        export module FakeQuantOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.FakeQuantOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.FakeQuantOptions,
              param1: number
            ): org.tensorflow.lite.schema.FakeQuantOptions;
            public get(param0: number): org.tensorflow.lite.schema.FakeQuantOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.FakeQuantOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FakeQuantOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FakeQuantOptionsT>;
          public setNarrowRange(param0: boolean): void;
          public setMin(param0: number): void;
          public constructor();
          public getMax(): number;
          public setNumBits(param0: number): void;
          public getMin(): number;
          public getNumBits(): number;
          public getNarrowRange(): boolean;
          public setMax(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FillOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FillOptions>;
          public static getRootAsFillOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.FillOptions
          ): org.tensorflow.lite.schema.FillOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.FillOptionsT
          ): number;
          public static startFillOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsFillOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.FillOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.FillOptionsT): void;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FillOptions;
          public static endFillOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.FillOptionsT;
        }
        export module FillOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.FillOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.FillOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.FillOptions,
              param1: number
            ): org.tensorflow.lite.schema.FillOptions;
            public get(param0: number): org.tensorflow.lite.schema.FillOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FillOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FillOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FloorDivOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FloorDivOptions>;
          public static startFloorDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endFloorDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.FloorDivOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorDivOptions;
          public static ValidateVersion(): void;
          public static getRootAsFloorDivOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.FloorDivOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.FloorDivOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.FloorDivOptionsT
          ): number;
          public static getRootAsFloorDivOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.FloorDivOptions
          ): org.tensorflow.lite.schema.FloorDivOptions;
        }
        export module FloorDivOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.FloorDivOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.FloorDivOptions.Vector;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.FloorDivOptions,
              param1: number
            ): org.tensorflow.lite.schema.FloorDivOptions;
            public get(param0: number): org.tensorflow.lite.schema.FloorDivOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FloorDivOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FloorDivOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FloorModOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FloorModOptions>;
          public static startFloorModOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.FloorModOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsFloorModOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.FloorModOptions
          ): org.tensorflow.lite.schema.FloorModOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorModOptions;
          public static endFloorModOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.FloorModOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.FloorModOptionsT
          ): number;
          public static getRootAsFloorModOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.FloorModOptions;
        }
        export module FloorModOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.FloorModOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.FloorModOptions;
            public get(
              param0: org.tensorflow.lite.schema.FloorModOptions,
              param1: number
            ): org.tensorflow.lite.schema.FloorModOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.FloorModOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FloorModOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FloorModOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FullyConnectedOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FullyConnectedOptions>;
          public static addWeightsFormat(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public weightsFormat(): number;
          public keepNumDims(): boolean;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static startFullyConnectedOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public asymmetricQuantizeInputs(): boolean;
          public static endFullyConnectedOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.FullyConnectedOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.FullyConnectedOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.FullyConnectedOptionsT
          ): number;
          public static getRootAsFullyConnectedOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.FullyConnectedOptions
          ): org.tensorflow.lite.schema.FullyConnectedOptions;
          public fusedActivationFunction(): number;
          public constructor();
          public static addKeepNumDims(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public unpack(): org.tensorflow.lite.schema.FullyConnectedOptionsT;
          public static getRootAsFullyConnectedOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.FullyConnectedOptions;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
          public static createFullyConnectedOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: boolean,
            param4: boolean
          ): number;
        }
        export module FullyConnectedOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.FullyConnectedOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.FullyConnectedOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.FullyConnectedOptions;
            public get(
              param0: org.tensorflow.lite.schema.FullyConnectedOptions,
              param1: number
            ): org.tensorflow.lite.schema.FullyConnectedOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FullyConnectedOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FullyConnectedOptionsT>;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getWeightsFormat(): number;
          public setKeepNumDims(param0: boolean): void;
          public getFusedActivationFunction(): number;
          public setWeightsFormat(param0: number): void;
          public getKeepNumDims(): boolean;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class FullyConnectedOptionsWeightsFormat {
          public static class: java.lang.Class<org.tensorflow.lite.schema.FullyConnectedOptionsWeightsFormat>;
          public static DEFAULT: number;
          public static SHUFFLED4x16INT8: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GatherNdOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GatherNdOptions>;
          public unpack(): org.tensorflow.lite.schema.GatherNdOptionsT;
          public static getRootAsGatherNdOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.GatherNdOptions
          ): org.tensorflow.lite.schema.GatherNdOptions;
          public static getRootAsGatherNdOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.GatherNdOptions;
          public constructor();
          public static startGatherNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endGatherNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.GatherNdOptionsT): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherNdOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.GatherNdOptionsT
          ): number;
        }
        export module GatherNdOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.GatherNdOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.GatherNdOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.GatherNdOptions,
              param1: number
            ): org.tensorflow.lite.schema.GatherNdOptions;
            public get(param0: number): org.tensorflow.lite.schema.GatherNdOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GatherNdOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GatherNdOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GatherOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GatherOptions>;
          public static createGatherOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.GatherOptionsT
          ): number;
          public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.GatherOptionsT;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherOptions;
          public static startGatherOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endGatherOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsGatherOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.GatherOptions
          ): org.tensorflow.lite.schema.GatherOptions;
          public constructor();
          public static getRootAsGatherOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherOptions;
          public axis(): number;
          public static addBatchDims(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public batchDims(): number;
          public unpackTo(param0: org.tensorflow.lite.schema.GatherOptionsT): void;
        }
        export module GatherOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.GatherOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.GatherOptions;
            public get(
              param0: org.tensorflow.lite.schema.GatherOptions,
              param1: number
            ): org.tensorflow.lite.schema.GatherOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.GatherOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GatherOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GatherOptionsT>;
          public constructor();
          public getAxis(): number;
          public getBatchDims(): number;
          public setBatchDims(param0: number): void;
          public setAxis(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GeluOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GeluOptions>;
          public static startGeluOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsGeluOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.GeluOptions;
          public approximate(): boolean;
          public static endGeluOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static createGeluOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): number;
          public static getRootAsGeluOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.GeluOptions
          ): org.tensorflow.lite.schema.GeluOptions;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.GeluOptionsT;
          public static addApproximate(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public unpackTo(param0: org.tensorflow.lite.schema.GeluOptionsT): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GeluOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.GeluOptionsT
          ): number;
        }
        export module GeluOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.GeluOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.GeluOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.GeluOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.GeluOptions,
              param1: number
            ): org.tensorflow.lite.schema.GeluOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GeluOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GeluOptionsT>;
          public setApproximate(param0: boolean): void;
          public getApproximate(): boolean;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GreaterEqualOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterEqualOptions>;
          public static endGreaterEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsGreaterEqualOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.GreaterEqualOptions;
          public static getRootAsGreaterEqualOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.GreaterEqualOptions
          ): org.tensorflow.lite.schema.GreaterEqualOptions;
          public unpack(): org.tensorflow.lite.schema.GreaterEqualOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterEqualOptions;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.GreaterEqualOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.GreaterEqualOptionsT
          ): number;
          public static startGreaterEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module GreaterEqualOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterEqualOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.GreaterEqualOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.GreaterEqualOptions;
            public get(
              param0: org.tensorflow.lite.schema.GreaterEqualOptions,
              param1: number
            ): org.tensorflow.lite.schema.GreaterEqualOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GreaterEqualOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterEqualOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GreaterOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterOptions>;
          public static getRootAsGreaterOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.GreaterOptions
          ): org.tensorflow.lite.schema.GreaterOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.GreaterOptionsT
          ): number;
          public static endGreaterOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static startGreaterOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsGreaterOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.GreaterOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.GreaterOptionsT): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterOptions;
        }
        export module GreaterOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.GreaterOptions,
              param1: number
            ): org.tensorflow.lite.schema.GreaterOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.GreaterOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.GreaterOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class GreaterOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HardSwishOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HardSwishOptions>;
          public static endHardSwishOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsHardSwishOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.HardSwishOptions
          ): org.tensorflow.lite.schema.HardSwishOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.HardSwishOptions;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.HardSwishOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startHardSwishOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.HardSwishOptionsT;
          public static getRootAsHardSwishOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.HardSwishOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.HardSwishOptionsT
          ): number;
        }
        export module HardSwishOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.HardSwishOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.HardSwishOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.HardSwishOptions;
            public get(
              param0: org.tensorflow.lite.schema.HardSwishOptions,
              param1: number
            ): org.tensorflow.lite.schema.HardSwishOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HardSwishOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HardSwishOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableFindOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableFindOptions>;
          public static getRootAsHashtableFindOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.HashtableFindOptions
          ): org.tensorflow.lite.schema.HashtableFindOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.HashtableFindOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.HashtableFindOptions;
          public constructor();
          public static getRootAsHashtableFindOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.HashtableFindOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.HashtableFindOptionsT;
          public static endHashtableFindOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static startHashtableFindOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.HashtableFindOptionsT): void;
        }
        export module HashtableFindOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableFindOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.HashtableFindOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.HashtableFindOptions;
            public get(
              param0: org.tensorflow.lite.schema.HashtableFindOptions,
              param1: number
            ): org.tensorflow.lite.schema.HashtableFindOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableFindOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableFindOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableImportOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableImportOptions>;
          public static startHashtableImportOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.HashtableImportOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.HashtableImportOptionsT): void;
          public constructor();
          public static getRootAsHashtableImportOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.HashtableImportOptions
          ): org.tensorflow.lite.schema.HashtableImportOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.HashtableImportOptionsT
          ): number;
          public static ValidateVersion(): void;
          public static getRootAsHashtableImportOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.HashtableImportOptions;
          public unpack(): org.tensorflow.lite.schema.HashtableImportOptionsT;
          public static endHashtableImportOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module HashtableImportOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableImportOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.HashtableImportOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.HashtableImportOptions;
            public get(
              param0: org.tensorflow.lite.schema.HashtableImportOptions,
              param1: number
            ): org.tensorflow.lite.schema.HashtableImportOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableImportOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableImportOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableOptions>;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.HashtableOptions;
          public static startHashtableOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endHashtableOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addValueDtype(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.HashtableOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpackTo(param0: org.tensorflow.lite.schema.HashtableOptionsT): void;
          public static ValidateVersion(): void;
          public static getRootAsHashtableOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.HashtableOptions
          ): org.tensorflow.lite.schema.HashtableOptions;
          public static getRootAsHashtableOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.HashtableOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.HashtableOptionsT
          ): number;
          public tableId(): number;
          public keyDtype(): number;
          public static addTableId(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addKeyDtype(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public constructor();
          public static createHashtableOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number
          ): number;
          public valueDtype(): number;
        }
        export module HashtableOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.HashtableOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.HashtableOptions;
            public get(
              param0: org.tensorflow.lite.schema.HashtableOptions,
              param1: number
            ): org.tensorflow.lite.schema.HashtableOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableOptionsT>;
          public setKeyDtype(param0: number): void;
          public getTableId(): number;
          public getKeyDtype(): number;
          public constructor();
          public setValueDtype(param0: number): void;
          public setTableId(param0: number): void;
          public getValueDtype(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableSizeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableSizeOptions>;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.HashtableSizeOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.HashtableSizeOptions;
          public static startHashtableSizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endHashtableSizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.HashtableSizeOptionsT;
          public static ValidateVersion(): void;
          public static getRootAsHashtableSizeOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.HashtableSizeOptions;
          public static getRootAsHashtableSizeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.HashtableSizeOptions
          ): org.tensorflow.lite.schema.HashtableSizeOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.HashtableSizeOptionsT): void;
        }
        export module HashtableSizeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableSizeOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.HashtableSizeOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.HashtableSizeOptions,
              param1: number
            ): org.tensorflow.lite.schema.HashtableSizeOptions;
            public get(param0: number): org.tensorflow.lite.schema.HashtableSizeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class HashtableSizeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.HashtableSizeOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class IfOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.IfOptions>;
          public static createIfOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public unpack(): org.tensorflow.lite.schema.IfOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.IfOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.IfOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsIfOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.IfOptions
          ): org.tensorflow.lite.schema.IfOptions;
          public static addElseSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public elseSubgraphIndex(): number;
          public static getRootAsIfOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.IfOptions;
          public static startIfOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public static addThenSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endIfOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public thenSubgraphIndex(): number;
          public unpackTo(param0: org.tensorflow.lite.schema.IfOptionsT): void;
        }
        export module IfOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.IfOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.IfOptions,
              param1: number
            ): org.tensorflow.lite.schema.IfOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.IfOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.IfOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class IfOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.IfOptionsT>;
          public getThenSubgraphIndex(): number;
          public setThenSubgraphIndex(param0: number): void;
          public setElseSubgraphIndex(param0: number): void;
          public constructor();
          public getElseSubgraphIndex(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Int32Vector {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Int32Vector>;
          public static getRootAsInt32Vector(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Int32Vector
          ): org.tensorflow.lite.schema.Int32Vector;
          public valuesLength(): number;
          public valuesVector(): com.google.flatbuffers.IntVector;
          public static startInt32Vector(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.Int32VectorT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endInt32Vector(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Int32Vector;
          public static addValues(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public valuesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static getRootAsInt32Vector(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Int32Vector;
          public static createValuesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.Int32VectorT
          ): number;
          public constructor();
          public valuesVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public static createInt32Vector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public valuesAsByteBuffer(): java.nio.ByteBuffer;
          public values(param0: number): number;
          public unpack(): org.tensorflow.lite.schema.Int32VectorT;
        }
        export module Int32Vector {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Int32Vector.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.Int32Vector;
            public get(
              param0: org.tensorflow.lite.schema.Int32Vector,
              param1: number
            ): org.tensorflow.lite.schema.Int32Vector;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Int32Vector.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Int32VectorT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Int32VectorT>;
          public constructor();
          public getValues(): androidNative.Array<number>;
          public setValues(param0: androidNative.Array<number>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class L2NormOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.L2NormOptions>;
          public static getRootAsL2NormOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.L2NormOptions
          ): org.tensorflow.lite.schema.L2NormOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.L2NormOptionsT
          ): number;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public unpackTo(param0: org.tensorflow.lite.schema.L2NormOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsL2NormOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.L2NormOptions;
          public fusedActivationFunction(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.L2NormOptions;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.L2NormOptionsT;
          public static createL2NormOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public static startL2NormOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endL2NormOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module L2NormOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.L2NormOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.L2NormOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.L2NormOptions,
              param1: number
            ): org.tensorflow.lite.schema.L2NormOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.L2NormOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class L2NormOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.L2NormOptionsT>;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LSHProjectionOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LSHProjectionOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LSHProjectionOptionsT
          ): number;
          public static createLSHProjectionOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.LSHProjectionOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpackTo(param0: org.tensorflow.lite.schema.LSHProjectionOptionsT): void;
          public static ValidateVersion(): void;
          public static getRootAsLSHProjectionOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LSHProjectionOptions;
          public static endLSHProjectionOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsLSHProjectionOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LSHProjectionOptions
          ): org.tensorflow.lite.schema.LSHProjectionOptions;
          public static startLSHProjectionOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public type(): number;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSHProjectionOptions;
        }
        export module LSHProjectionOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LSHProjectionOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.LSHProjectionOptions;
            public get(
              param0: org.tensorflow.lite.schema.LSHProjectionOptions,
              param1: number
            ): org.tensorflow.lite.schema.LSHProjectionOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LSHProjectionOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LSHProjectionOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LSHProjectionOptionsT>;
          public getType(): number;
          public constructor();
          public setType(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LSHProjectionType {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LSHProjectionType>;
          public static UNKNOWN: number;
          public static SPARSE: number;
          public static DENSE: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LSTMKernelType {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LSTMKernelType>;
          public static FULL: number;
          public static BASIC: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LSTMOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LSTMOptions>;
          public static getRootAsLSTMOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSTMOptions;
          public static getRootAsLSTMOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LSTMOptions
          ): org.tensorflow.lite.schema.LSTMOptions;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public projClip(): number;
          public static createLSTMOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: boolean
          ): number;
          public cellClip(): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.LSTMOptionsT;
          public static ValidateVersion(): void;
          public asymmetricQuantizeInputs(): boolean;
          public static addProjClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpackTo(param0: org.tensorflow.lite.schema.LSTMOptionsT): void;
          public static addCellClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addKernelType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public fusedActivationFunction(): number;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LSTMOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSTMOptions;
          public kernelType(): number;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
          public static endLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module LSTMOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LSTMOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LSTMOptions,
              param1: number
            ): org.tensorflow.lite.schema.LSTMOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LSTMOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.LSTMOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LSTMOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LSTMOptionsT>;
          public getKernelType(): number;
          public getProjClip(): number;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getCellClip(): number;
          public setProjClip(param0: number): void;
          public setCellClip(param0: number): void;
          public getFusedActivationFunction(): number;
          public setKernelType(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LeakyReluOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LeakyReluOptions>;
          public unpackTo(param0: org.tensorflow.lite.schema.LeakyReluOptionsT): void;
          public static addAlpha(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsLeakyReluOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LeakyReluOptions
          ): org.tensorflow.lite.schema.LeakyReluOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LeakyReluOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static createLeakyReluOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public alpha(): number;
          public static getRootAsLeakyReluOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LeakyReluOptions;
          public unpack(): org.tensorflow.lite.schema.LeakyReluOptionsT;
          public constructor();
          public static startLeakyReluOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endLeakyReluOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LeakyReluOptionsT
          ): number;
        }
        export module LeakyReluOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LeakyReluOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LeakyReluOptions.Vector;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LeakyReluOptions,
              param1: number
            ): org.tensorflow.lite.schema.LeakyReluOptions;
            public get(param0: number): org.tensorflow.lite.schema.LeakyReluOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LeakyReluOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LeakyReluOptionsT>;
          public getAlpha(): number;
          public constructor();
          public setAlpha(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LessEqualOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LessEqualOptions>;
          public static getRootAsLessEqualOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LessEqualOptions;
          public static getRootAsLessEqualOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LessEqualOptions
          ): org.tensorflow.lite.schema.LessEqualOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.LessEqualOptionsT): void;
          public static endLessEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LessEqualOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessEqualOptions;
          public static ValidateVersion(): void;
          public static startLessEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.LessEqualOptionsT;
        }
        export module LessEqualOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LessEqualOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.LessEqualOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LessEqualOptions,
              param1: number
            ): org.tensorflow.lite.schema.LessEqualOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LessEqualOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LessEqualOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LessEqualOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LessOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LessOptions>;
          public static startLessOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LessOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endLessOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.LessOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessOptions;
          public static getRootAsLessOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LessOptions
          ): org.tensorflow.lite.schema.LessOptions;
          public static getRootAsLessOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.LessOptionsT): void;
        }
        export module LessOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LessOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LessOptions,
              param1: number
            ): org.tensorflow.lite.schema.LessOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LessOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.LessOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LessOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LessOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LocalResponseNormalizationOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LocalResponseNormalizationOptions>;
          public static addAlpha(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpackTo(param0: org.tensorflow.lite.schema.LocalResponseNormalizationOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
          public bias(): number;
          public alpha(): number;
          public unpack(): org.tensorflow.lite.schema.LocalResponseNormalizationOptionsT;
          public static endLocalResponseNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public radius(): number;
          public static getRootAsLocalResponseNormalizationOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
          public constructor();
          public static addBeta(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsLocalResponseNormalizationOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LocalResponseNormalizationOptions
          ): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
          public beta(): number;
          public static createLocalResponseNormalizationOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number
          ): number;
          public static addRadius(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startLocalResponseNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addBias(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LocalResponseNormalizationOptionsT
          ): number;
        }
        export module LocalResponseNormalizationOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LocalResponseNormalizationOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LocalResponseNormalizationOptions,
              param1: number
            ): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LocalResponseNormalizationOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LocalResponseNormalizationOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LocalResponseNormalizationOptionsT>;
          public setBias(param0: number): void;
          public getAlpha(): number;
          public getBias(): number;
          public constructor();
          public setRadius(param0: number): void;
          public setBeta(param0: number): void;
          public setAlpha(param0: number): void;
          public getRadius(): number;
          public getBeta(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogSoftmaxOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogSoftmaxOptions>;
          public static getRootAsLogSoftmaxOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LogSoftmaxOptions
          ): org.tensorflow.lite.schema.LogSoftmaxOptions;
          public static endLogSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogSoftmaxOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LogSoftmaxOptionsT
          ): number;
          public unpack(): org.tensorflow.lite.schema.LogSoftmaxOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static startLogSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.LogSoftmaxOptionsT): void;
          public static getRootAsLogSoftmaxOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LogSoftmaxOptions;
        }
        export module LogSoftmaxOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LogSoftmaxOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LogSoftmaxOptions,
              param1: number
            ): org.tensorflow.lite.schema.LogSoftmaxOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LogSoftmaxOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.LogSoftmaxOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogSoftmaxOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogSoftmaxOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogicalAndOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalAndOptions>;
          public unpack(): org.tensorflow.lite.schema.LogicalAndOptionsT;
          public constructor();
          public static endLogicalAndOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsLogicalAndOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LogicalAndOptions
          ): org.tensorflow.lite.schema.LogicalAndOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LogicalAndOptionsT
          ): number;
          public static startLogicalAndOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsLogicalAndOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LogicalAndOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalAndOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.LogicalAndOptionsT): void;
        }
        export module LogicalAndOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalAndOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LogicalAndOptions,
              param1: number
            ): org.tensorflow.lite.schema.LogicalAndOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LogicalAndOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.LogicalAndOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogicalAndOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalAndOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogicalNotOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalNotOptions>;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LogicalNotOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalNotOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startLogicalNotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.LogicalNotOptionsT): void;
          public static getRootAsLogicalNotOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LogicalNotOptions
          ): org.tensorflow.lite.schema.LogicalNotOptions;
          public static endLogicalNotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsLogicalNotOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LogicalNotOptions;
          public unpack(): org.tensorflow.lite.schema.LogicalNotOptionsT;
        }
        export module LogicalNotOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalNotOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.LogicalNotOptions,
              param1: number
            ): org.tensorflow.lite.schema.LogicalNotOptions;
            public get(param0: number): org.tensorflow.lite.schema.LogicalNotOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LogicalNotOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogicalNotOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalNotOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogicalOrOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalOrOptions>;
          public static getRootAsLogicalOrOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.LogicalOrOptions;
          public unpack(): org.tensorflow.lite.schema.LogicalOrOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalOrOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.LogicalOrOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.LogicalOrOptionsT
          ): number;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static startLogicalOrOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static ValidateVersion(): void;
          public static endLogicalOrOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsLogicalOrOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.LogicalOrOptions
          ): org.tensorflow.lite.schema.LogicalOrOptions;
        }
        export module LogicalOrOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalOrOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.LogicalOrOptions,
              param1: number
            ): org.tensorflow.lite.schema.LogicalOrOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.LogicalOrOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.LogicalOrOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class LogicalOrOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalOrOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MatrixDiagOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixDiagOptions>;
          public static startMatrixDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsMatrixDiagOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.MatrixDiagOptions;
          public static endMatrixDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static getRootAsMatrixDiagOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.MatrixDiagOptions
          ): org.tensorflow.lite.schema.MatrixDiagOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixDiagOptions;
          public unpack(): org.tensorflow.lite.schema.MatrixDiagOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.MatrixDiagOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.MatrixDiagOptionsT
          ): number;
        }
        export module MatrixDiagOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixDiagOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.MatrixDiagOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.MatrixDiagOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.MatrixDiagOptions,
              param1: number
            ): org.tensorflow.lite.schema.MatrixDiagOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MatrixDiagOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixDiagOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MatrixSetDiagOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixSetDiagOptions>;
          public static endMatrixSetDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.MatrixSetDiagOptionsT
          ): number;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.MatrixSetDiagOptionsT): void;
          public static getRootAsMatrixSetDiagOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.MatrixSetDiagOptions
          ): org.tensorflow.lite.schema.MatrixSetDiagOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.MatrixSetDiagOptionsT;
          public static getRootAsMatrixSetDiagOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.MatrixSetDiagOptions;
          public static startMatrixSetDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixSetDiagOptions;
        }
        export module MatrixSetDiagOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixSetDiagOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.MatrixSetDiagOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.MatrixSetDiagOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.MatrixSetDiagOptions,
              param1: number
            ): org.tensorflow.lite.schema.MatrixSetDiagOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MatrixSetDiagOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixSetDiagOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MaximumMinimumOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MaximumMinimumOptions>;
          public static endMaximumMinimumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static getRootAsMaximumMinimumOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.MaximumMinimumOptions
          ): org.tensorflow.lite.schema.MaximumMinimumOptions;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.MaximumMinimumOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.MaximumMinimumOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.MaximumMinimumOptionsT): void;
          public static startMaximumMinimumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsMaximumMinimumOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.MaximumMinimumOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.MaximumMinimumOptionsT
          ): number;
        }
        export module MaximumMinimumOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.MaximumMinimumOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.MaximumMinimumOptions,
              param1: number
            ): org.tensorflow.lite.schema.MaximumMinimumOptions;
            public get(param0: number): org.tensorflow.lite.schema.MaximumMinimumOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.MaximumMinimumOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MaximumMinimumOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MaximumMinimumOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Metadata {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Metadata>;
          public buffer(): number;
          public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public name(): string;
          public unpackTo(param0: org.tensorflow.lite.schema.MetadataT): void;
          public unpack(): org.tensorflow.lite.schema.MetadataT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Metadata;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsMetadata(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Metadata;
          public static createMetadata(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public constructor();
          public static addBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsMetadata(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Metadata
          ): org.tensorflow.lite.schema.Metadata;
          public static startMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.MetadataT
          ): number;
          public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public nameAsByteBuffer(): java.nio.ByteBuffer;
          public static endMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module Metadata {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Metadata.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Metadata.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.Metadata;
            public get(
              param0: org.tensorflow.lite.schema.Metadata,
              param1: number
            ): org.tensorflow.lite.schema.Metadata;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MetadataT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MetadataT>;
          public getName(): string;
          public constructor();
          public getBuffer(): number;
          public setName(param0: string): void;
          public setBuffer(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MirrorPadMode {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MirrorPadMode>;
          public static REFLECT: number;
          public static SYMMETRIC: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MirrorPadOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MirrorPadOptions>;
          public static createMirrorPadOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsMirrorPadOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.MirrorPadOptions
          ): org.tensorflow.lite.schema.MirrorPadOptions;
          public static startMirrorPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.MirrorPadOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.MirrorPadOptionsT
          ): number;
          public static getRootAsMirrorPadOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.MirrorPadOptions;
          public static addMode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MirrorPadOptions;
          public mode(): number;
          public static endMirrorPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.MirrorPadOptionsT): void;
        }
        export module MirrorPadOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.MirrorPadOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.MirrorPadOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.MirrorPadOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.MirrorPadOptions,
              param1: number
            ): org.tensorflow.lite.schema.MirrorPadOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MirrorPadOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MirrorPadOptionsT>;
          public constructor();
          public getMode(): number;
          public setMode(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Model {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Model>;
          public version(): number;
          public static createMetadataBufferVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Model;
          public static startMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createModel(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number,
            param7: number,
            param8: number
          ): number;
          public signatureDefsVector(
            param0: org.tensorflow.lite.schema.SignatureDef.Vector
          ): org.tensorflow.lite.schema.SignatureDef.Vector;
          public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public metadata(param0: number): org.tensorflow.lite.schema.Metadata;
          public static addMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public subgraphsVector(
            param0: org.tensorflow.lite.schema.SubGraph.Vector
          ): org.tensorflow.lite.schema.SubGraph.Vector;
          public static finishModelBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.ModelT): void;
          public buffersVector(
            param0: org.tensorflow.lite.schema.Buffer.Vector
          ): org.tensorflow.lite.schema.Buffer.Vector;
          public static createOperatorCodesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static addSubgraphs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createSubgraphsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static getRootAsModel(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Model
          ): org.tensorflow.lite.schema.Model;
          public static startOperatorCodesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public buffers(param0: number): org.tensorflow.lite.schema.Buffer;
          public static endModel(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static createMetadataVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static addMetadataBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public metadataBufferVector(): com.google.flatbuffers.IntVector;
          public operatorCodes(
            param0: org.tensorflow.lite.schema.OperatorCode,
            param1: number
          ): org.tensorflow.lite.schema.OperatorCode;
          public subgraphsVector(): org.tensorflow.lite.schema.SubGraph.Vector;
          public subgraphs(
            param0: org.tensorflow.lite.schema.SubGraph,
            param1: number
          ): org.tensorflow.lite.schema.SubGraph;
          public metadata(
            param0: org.tensorflow.lite.schema.Metadata,
            param1: number
          ): org.tensorflow.lite.schema.Metadata;
          public metadataVector(): org.tensorflow.lite.schema.Metadata.Vector;
          public static ModelBufferHasIdentifier(param0: java.nio.ByteBuffer): boolean;
          public signatureDefsVector(): org.tensorflow.lite.schema.SignatureDef.Vector;
          public static startSubgraphsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startBuffersVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsModel(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Model;
          public subgraphsLength(): number;
          public metadataBufferLength(): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ModelT
          ): number;
          public signatureDefs(param0: number): org.tensorflow.lite.schema.SignatureDef;
          public static startMetadataBufferVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public signatureDefsLength(): number;
          public operatorCodesVector(
            param0: org.tensorflow.lite.schema.OperatorCode.Vector
          ): org.tensorflow.lite.schema.OperatorCode.Vector;
          public static finishSizePrefixedModelBuffer(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public signatureDefs(
            param0: org.tensorflow.lite.schema.SignatureDef,
            param1: number
          ): org.tensorflow.lite.schema.SignatureDef;
          public static addOperatorCodes(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public metadataBufferInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public operatorCodesVector(): org.tensorflow.lite.schema.OperatorCode.Vector;
          public static addSignatureDefs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public metadataLength(): number;
          public static createSignatureDefsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public buffers(param0: org.tensorflow.lite.schema.Buffer, param1: number): org.tensorflow.lite.schema.Buffer;
          public buffersVector(): org.tensorflow.lite.schema.Buffer.Vector;
          public operatorCodes(param0: number): org.tensorflow.lite.schema.OperatorCode;
          public static createBuffersVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public metadataBufferAsByteBuffer(): java.nio.ByteBuffer;
          public static addBuffers(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public descriptionAsByteBuffer(): java.nio.ByteBuffer;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public description(): string;
          public static ValidateVersion(): void;
          public buffersLength(): number;
          public metadataBufferVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public operatorCodesLength(): number;
          public static startModel(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static startSignatureDefsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public metadataBuffer(param0: number): number;
          public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public unpack(): org.tensorflow.lite.schema.ModelT;
          public subgraphs(param0: number): org.tensorflow.lite.schema.SubGraph;
          public metadataVector(
            param0: org.tensorflow.lite.schema.Metadata.Vector
          ): org.tensorflow.lite.schema.Metadata.Vector;
          public static addVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
        }
        export module Model {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Model.Vector>;
            public get(param0: org.tensorflow.lite.schema.Model, param1: number): org.tensorflow.lite.schema.Model;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.Model;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Model.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ModelT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ModelT>;
          public getOperatorCodes(): androidNative.Array<org.tensorflow.lite.schema.OperatorCodeT>;
          public static deserializeFromBinary(param0: androidNative.Array<number>): org.tensorflow.lite.schema.ModelT;
          public setDescription(param0: string): void;
          public getVersion(): number;
          public getMetadata(): androidNative.Array<org.tensorflow.lite.schema.MetadataT>;
          public setBuffers(param0: androidNative.Array<org.tensorflow.lite.schema.BufferT>): void;
          public setMetadataBuffer(param0: androidNative.Array<number>): void;
          public setSignatureDefs(param0: androidNative.Array<org.tensorflow.lite.schema.SignatureDefT>): void;
          public getBuffers(): androidNative.Array<org.tensorflow.lite.schema.BufferT>;
          public getMetadataBuffer(): androidNative.Array<number>;
          public getSignatureDefs(): androidNative.Array<org.tensorflow.lite.schema.SignatureDefT>;
          public setSubgraphs(param0: androidNative.Array<org.tensorflow.lite.schema.SubGraphT>): void;
          public setMetadata(param0: androidNative.Array<org.tensorflow.lite.schema.MetadataT>): void;
          public constructor();
          public setVersion(param0: number): void;
          public setOperatorCodes(param0: androidNative.Array<org.tensorflow.lite.schema.OperatorCodeT>): void;
          public getSubgraphs(): androidNative.Array<org.tensorflow.lite.schema.SubGraphT>;
          public serializeToBinary(): androidNative.Array<number>;
          public getDescription(): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MulOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MulOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.MulOptionsT
          ): number;
          public static startMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MulOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.MulOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsMulOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.MulOptions;
          public static endMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static createMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public fusedActivationFunction(): number;
          public constructor();
          public static getRootAsMulOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.MulOptions
          ): org.tensorflow.lite.schema.MulOptions;
          public unpack(): org.tensorflow.lite.schema.MulOptionsT;
        }
        export module MulOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.MulOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.MulOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.MulOptions;
            public get(
              param0: org.tensorflow.lite.schema.MulOptions,
              param1: number
            ): org.tensorflow.lite.schema.MulOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class MulOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.MulOptionsT>;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NegOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NegOptions>;
          public static getRootAsNegOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.NegOptions
          ): org.tensorflow.lite.schema.NegOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.NegOptions;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.NegOptionsT
          ): number;
          public static endNegOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsNegOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.NegOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.NegOptionsT): void;
          public unpack(): org.tensorflow.lite.schema.NegOptionsT;
          public static startNegOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module NegOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.NegOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.NegOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.NegOptions,
              param1: number
            ): org.tensorflow.lite.schema.NegOptions;
            public get(param0: number): org.tensorflow.lite.schema.NegOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NegOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NegOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NonMaxSuppressionV4Options {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV4Options>;
          public static getRootAsNonMaxSuppressionV4Options(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
          public constructor();
          public static startNonMaxSuppressionV4Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.NonMaxSuppressionV4OptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.NonMaxSuppressionV4OptionsT;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
          public static endNonMaxSuppressionV4Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsNonMaxSuppressionV4Options(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.NonMaxSuppressionV4Options
          ): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.NonMaxSuppressionV4OptionsT
          ): number;
        }
        export module NonMaxSuppressionV4Options {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV4Options.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.NonMaxSuppressionV4Options.Vector;
            public get(param0: number): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
            public get(
              param0: org.tensorflow.lite.schema.NonMaxSuppressionV4Options,
              param1: number
            ): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NonMaxSuppressionV4OptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV4OptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NonMaxSuppressionV5Options {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV5Options>;
          public static getRootAsNonMaxSuppressionV5Options(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
          public static endNonMaxSuppressionV5Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.NonMaxSuppressionV5OptionsT;
          public static startNonMaxSuppressionV5Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpackTo(param0: org.tensorflow.lite.schema.NonMaxSuppressionV5OptionsT): void;
          public static ValidateVersion(): void;
          public static getRootAsNonMaxSuppressionV5Options(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.NonMaxSuppressionV5Options
          ): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.NonMaxSuppressionV5OptionsT
          ): number;
        }
        export module NonMaxSuppressionV5Options {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV5Options.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.NonMaxSuppressionV5Options,
              param1: number
            ): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.NonMaxSuppressionV5Options.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NonMaxSuppressionV5OptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV5OptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NotEqualOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NotEqualOptions>;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.NotEqualOptions;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsNotEqualOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.NotEqualOptions
          ): org.tensorflow.lite.schema.NotEqualOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.NotEqualOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.NotEqualOptionsT
          ): number;
          public static endNotEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsNotEqualOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.NotEqualOptions;
          public static startNotEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpack(): org.tensorflow.lite.schema.NotEqualOptionsT;
        }
        export module NotEqualOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.NotEqualOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.NotEqualOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.NotEqualOptions;
            public get(
              param0: org.tensorflow.lite.schema.NotEqualOptions,
              param1: number
            ): org.tensorflow.lite.schema.NotEqualOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class NotEqualOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.NotEqualOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class OneHotOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.OneHotOptions>;
          public static createOneHotOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsOneHotOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.OneHotOptions;
          public static startOneHotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.OneHotOptionsT;
          public axis(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.OneHotOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.OneHotOptionsT
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.OneHotOptionsT): void;
          public static getRootAsOneHotOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.OneHotOptions
          ): org.tensorflow.lite.schema.OneHotOptions;
          public static endOneHotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module OneHotOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.OneHotOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.OneHotOptions,
              param1: number
            ): org.tensorflow.lite.schema.OneHotOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.OneHotOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.OneHotOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class OneHotOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.OneHotOptionsT>;
          public constructor();
          public getAxis(): number;
          public setAxis(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Operator {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Operator>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.OperatorT
          ): number;
          public intermediatesVector(): com.google.flatbuffers.IntVector;
          public static addCustomOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public customOptionsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public customOptionsVector(): com.google.flatbuffers.ByteVector;
          public intermediatesAsByteBuffer(): java.nio.ByteBuffer;
          public inputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public inputsAsByteBuffer(): java.nio.ByteBuffer;
          public constructor();
          public customOptionsLength(): number;
          public static addBuiltinOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startMutatingVariableInputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static startOperator(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static createCustomOptionsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static createCustomOptionsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: java.nio.ByteBuffer
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Operator;
          public mutatingVariableInputsAsByteBuffer(): java.nio.ByteBuffer;
          public outputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public static endOperator(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public inputsVector(): com.google.flatbuffers.IntVector;
          public builtinOptionsType(): number;
          public intermediatesVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public opcodeIndex(): number;
          public static startCustomOptionsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static startIntermediatesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static addOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public outputsLength(): number;
          public intermediatesLength(): number;
          public static addBuiltinOptionsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public inputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static addMutatingVariableInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static addCustomOptionsFormat(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createOutputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.OperatorT): void;
          public mutatingVariableInputs(param0: number): boolean;
          public static addInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public mutatingVariableInputsVector(
            param0: com.google.flatbuffers.BooleanVector
          ): com.google.flatbuffers.BooleanVector;
          public static addOpcodeIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public outputs(param0: number): number;
          public outputsAsByteBuffer(): java.nio.ByteBuffer;
          public static getRootAsOperator(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Operator;
          public customOptionsFormat(): number;
          public static startInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createOperator(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number,
            param7: number,
            param8: number,
            param9: number
          ): number;
          public mutatingVariableInputsVector(): com.google.flatbuffers.BooleanVector;
          public static createInputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public inputsLength(): number;
          public customOptionsVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
          public mutatingVariableInputsLength(): number;
          public outputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public intermediates(param0: number): number;
          public customOptions(param0: number): number;
          public intermediatesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public inputs(param0: number): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.OperatorT;
          public static ValidateVersion(): void;
          public static createMutatingVariableInputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<boolean>
          ): number;
          public mutatingVariableInputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public builtinOptions(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
          public outputsVector(): com.google.flatbuffers.IntVector;
          public customOptionsAsByteBuffer(): java.nio.ByteBuffer;
          public static startOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createIntermediatesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static addIntermediates(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsOperator(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Operator
          ): org.tensorflow.lite.schema.Operator;
        }
        export module Operator {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Operator.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Operator.Vector;
            public get(
              param0: org.tensorflow.lite.schema.Operator,
              param1: number
            ): org.tensorflow.lite.schema.Operator;
            public get(param0: number): org.tensorflow.lite.schema.Operator;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class OperatorCode {
          public static class: java.lang.Class<org.tensorflow.lite.schema.OperatorCode>;
          public customCodeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static addBuiltinCode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public version(): number;
          public builtinCode(): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.OperatorCodeT
          ): number;
          public static startOperatorCode(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endOperatorCode(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public customCode(): string;
          public unpackTo(param0: org.tensorflow.lite.schema.OperatorCodeT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.OperatorCode;
          public static addDeprecatedBuiltinCode(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static ValidateVersion(): void;
          public static getRootAsOperatorCode(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.OperatorCode;
          public static createOperatorCode(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number
          ): number;
          public static addCustomCode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public deprecatedBuiltinCode(): number;
          public unpack(): org.tensorflow.lite.schema.OperatorCodeT;
          public constructor();
          public static getRootAsOperatorCode(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.OperatorCode
          ): org.tensorflow.lite.schema.OperatorCode;
          public customCodeAsByteBuffer(): java.nio.ByteBuffer;
          public static addVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
        }
        export module OperatorCode {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.OperatorCode.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.OperatorCode,
              param1: number
            ): org.tensorflow.lite.schema.OperatorCode;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.OperatorCode.Vector;
            public get(param0: number): org.tensorflow.lite.schema.OperatorCode;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class OperatorCodeT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.OperatorCodeT>;
          public getBuiltinCode(): number;
          public setDeprecatedBuiltinCode(param0: number): void;
          public setBuiltinCode(param0: number): void;
          public constructor();
          public getVersion(): number;
          public setVersion(param0: number): void;
          public setCustomCode(param0: string): void;
          public getDeprecatedBuiltinCode(): number;
          public getCustomCode(): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class OperatorT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.OperatorT>;
          public setBuiltinOptions(param0: org.tensorflow.lite.schema.BuiltinOptionsUnion): void;
          public getOpcodeIndex(): number;
          public setIntermediates(param0: androidNative.Array<number>): void;
          public setOpcodeIndex(param0: number): void;
          public getCustomOptionsFormat(): number;
          public setCustomOptions(param0: androidNative.Array<number>): void;
          public setOutputs(param0: androidNative.Array<number>): void;
          public getBuiltinOptions(): org.tensorflow.lite.schema.BuiltinOptionsUnion;
          public setMutatingVariableInputs(param0: androidNative.Array<boolean>): void;
          public constructor();
          public setCustomOptionsFormat(param0: number): void;
          public getCustomOptions(): androidNative.Array<number>;
          public getMutatingVariableInputs(): androidNative.Array<boolean>;
          public getIntermediates(): androidNative.Array<number>;
          public setInputs(param0: androidNative.Array<number>): void;
          public getOutputs(): androidNative.Array<number>;
          public getInputs(): androidNative.Array<number>;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PackOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PackOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.PackOptionsT
          ): number;
          public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsPackOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PackOptions;
          public static getRootAsPackOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.PackOptions
          ): org.tensorflow.lite.schema.PackOptions;
          public unpack(): org.tensorflow.lite.schema.PackOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endPackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.PackOptionsT): void;
          public static startPackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public static addValuesCount(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public axis(): number;
          public static createPackOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public valuesCount(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PackOptions;
        }
        export module PackOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.PackOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.PackOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.PackOptions;
            public get(
              param0: org.tensorflow.lite.schema.PackOptions,
              param1: number
            ): org.tensorflow.lite.schema.PackOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PackOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PackOptionsT>;
          public setValuesCount(param0: number): void;
          public constructor();
          public getAxis(): number;
          public getValuesCount(): number;
          public setAxis(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PadOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PadOptions>;
          public static startPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadOptions;
          public static endPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.PadOptionsT;
          public static getRootAsPadOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.PadOptions
          ): org.tensorflow.lite.schema.PadOptions;
          public constructor();
          public static getRootAsPadOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.PadOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.PadOptionsT): void;
        }
        export module PadOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.PadOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.PadOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.PadOptions,
              param1: number
            ): org.tensorflow.lite.schema.PadOptions;
            public get(param0: number): org.tensorflow.lite.schema.PadOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PadOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PadOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PadV2Options {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PadV2Options>;
          public static getRootAsPadV2Options(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.PadV2Options
          ): org.tensorflow.lite.schema.PadV2Options;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadV2Options;
          public constructor();
          public static getRootAsPadV2Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadV2Options;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startPadV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.PadV2OptionsT
          ): number;
          public unpack(): org.tensorflow.lite.schema.PadV2OptionsT;
          public static endPadV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.PadV2OptionsT): void;
        }
        export module PadV2Options {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.PadV2Options.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.PadV2Options.Vector;
            public get(param0: number): org.tensorflow.lite.schema.PadV2Options;
            public get(
              param0: org.tensorflow.lite.schema.PadV2Options,
              param1: number
            ): org.tensorflow.lite.schema.PadV2Options;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PadV2OptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PadV2OptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Padding {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Padding>;
          public static SAME: number;
          public static VALID: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Pool2DOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Pool2DOptions>;
          public static createPool2DOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number
          ): number;
          public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static startPool2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.Pool2DOptionsT;
          public static ValidateVersion(): void;
          public filterHeight(): number;
          public unpackTo(param0: org.tensorflow.lite.schema.Pool2DOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.Pool2DOptionsT
          ): number;
          public static addFilterHeight(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public fusedActivationFunction(): number;
          public padding(): number;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Pool2DOptions;
          public strideH(): number;
          public static getRootAsPool2DOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Pool2DOptions;
          public static addFilterWidth(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endPool2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public filterWidth(): number;
          public static getRootAsPool2DOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Pool2DOptions
          ): org.tensorflow.lite.schema.Pool2DOptions;
          public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public strideW(): number;
        }
        export module Pool2DOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Pool2DOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.Pool2DOptions,
              param1: number
            ): org.tensorflow.lite.schema.Pool2DOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Pool2DOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.Pool2DOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Pool2DOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Pool2DOptionsT>;
          public getFilterWidth(): number;
          public setFusedActivationFunction(param0: number): void;
          public setFilterWidth(param0: number): void;
          public setStrideH(param0: number): void;
          public getFusedActivationFunction(): number;
          public getStrideH(): number;
          public getPadding(): number;
          public getStrideW(): number;
          public constructor();
          public setPadding(param0: number): void;
          public setStrideW(param0: number): void;
          public getFilterHeight(): number;
          public setFilterHeight(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PowOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PowOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.PowOptionsT
          ): number;
          public static endPowOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PowOptions;
          public unpack(): org.tensorflow.lite.schema.PowOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.PowOptionsT): void;
          public static getRootAsPowOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.PowOptions
          ): org.tensorflow.lite.schema.PowOptions;
          public static startPowOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsPowOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PowOptions;
        }
        export module PowOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.PowOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.PowOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.PowOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.PowOptions,
              param1: number
            ): org.tensorflow.lite.schema.PowOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class PowOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.PowOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class QuantizationDetails {
          public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationDetails>;
          public static NONE: number;
          public static CustomQuantization: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class QuantizationDetailsUnion {
          public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationDetailsUnion>;
          public getType(): number;
          public getValue(): any;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.QuantizationDetailsUnion
          ): number;
          public setValue(param0: any): void;
          public constructor();
          public setType(param0: number): void;
          public asCustomQuantization(): org.tensorflow.lite.schema.CustomQuantizationT;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class QuantizationParameters {
          public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationParameters>;
          public maxAsByteBuffer(): java.nio.ByteBuffer;
          public static createQuantizationParameters(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: number,
            param7: number
          ): number;
          public static startMaxVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public detailsType(): number;
          public zeroPointInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public scaleInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static startMinVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public maxVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
          public scaleLength(): number;
          public max(param0: number): number;
          public maxLength(): number;
          public minInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static createMaxVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.QuantizationParametersT): void;
          public constructor();
          public static startZeroPointVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public zeroPoint(param0: number): number;
          public static getRootAsQuantizationParameters(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.QuantizationParameters;
          public scaleAsByteBuffer(): java.nio.ByteBuffer;
          public static getRootAsQuantizationParameters(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.QuantizationParameters
          ): org.tensorflow.lite.schema.QuantizationParameters;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.QuantizationParametersT
          ): number;
          public maxInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.QuantizationParameters;
          public unpack(): org.tensorflow.lite.schema.QuantizationParametersT;
          public static addZeroPoint(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public minLength(): number;
          public static createMinVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static addScale(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startQuantizationParameters(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endQuantizationParameters(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static createScaleVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public min(param0: number): number;
          public quantizedDimension(): number;
          public zeroPointVector(param0: com.google.flatbuffers.LongVector): com.google.flatbuffers.LongVector;
          public static addDetailsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static startScaleVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createZeroPointVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public zeroPointLength(): number;
          public static addDetails(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public maxVector(): com.google.flatbuffers.FloatVector;
          public static addQuantizedDimension(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public scaleVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
          public static ValidateVersion(): void;
          public details(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
          public minVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
          public scale(param0: number): number;
          public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public scaleVector(): com.google.flatbuffers.FloatVector;
          public minVector(): com.google.flatbuffers.FloatVector;
          public zeroPointVector(): com.google.flatbuffers.LongVector;
          public minAsByteBuffer(): java.nio.ByteBuffer;
          public zeroPointAsByteBuffer(): java.nio.ByteBuffer;
        }
        export module QuantizationParameters {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationParameters.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.QuantizationParameters,
              param1: number
            ): org.tensorflow.lite.schema.QuantizationParameters;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.QuantizationParameters;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.QuantizationParameters.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class QuantizationParametersT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationParametersT>;
          public setZeroPoint(param0: androidNative.Array<number>): void;
          public getQuantizedDimension(): number;
          public getScale(): androidNative.Array<number>;
          public setMax(param0: androidNative.Array<number>): void;
          public setScale(param0: androidNative.Array<number>): void;
          public getMax(): androidNative.Array<number>;
          public getDetails(): org.tensorflow.lite.schema.QuantizationDetailsUnion;
          public setDetails(param0: org.tensorflow.lite.schema.QuantizationDetailsUnion): void;
          public setQuantizedDimension(param0: number): void;
          public getMin(): androidNative.Array<number>;
          public setMin(param0: androidNative.Array<number>): void;
          public constructor();
          public getZeroPoint(): androidNative.Array<number>;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class QuantizeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizeOptions>;
          public static getRootAsQuantizeOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.QuantizeOptions;
          public constructor();
          public static getRootAsQuantizeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.QuantizeOptions
          ): org.tensorflow.lite.schema.QuantizeOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.QuantizeOptions;
          public static endQuantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.QuantizeOptionsT;
          public static startQuantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.QuantizeOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.QuantizeOptionsT
          ): number;
        }
        export module QuantizeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizeOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.QuantizeOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.QuantizeOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.QuantizeOptions,
              param1: number
            ): org.tensorflow.lite.schema.QuantizeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class QuantizeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizeOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RNNOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RNNOptions>;
          public static getRootAsRNNOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.RNNOptions
          ): org.tensorflow.lite.schema.RNNOptions;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static createRNNOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: boolean
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.RNNOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static startRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static ValidateVersion(): void;
          public asymmetricQuantizeInputs(): boolean;
          public static getRootAsRNNOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.RNNOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.RNNOptionsT
          ): number;
          public fusedActivationFunction(): number;
          public constructor();
          public static endRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.RNNOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.RNNOptions;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
        }
        export module RNNOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.RNNOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.RNNOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.RNNOptions,
              param1: number
            ): org.tensorflow.lite.schema.RNNOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.RNNOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RNNOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RNNOptionsT>;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RandomOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RandomOptions>;
          public static addSeed2(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public seed(): number;
          public static endRandomOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsRandomOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.RandomOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.RandomOptionsT): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.RandomOptions;
          public constructor();
          public static startRandomOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addSeed(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.RandomOptionsT;
          public static getRootAsRandomOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.RandomOptions
          ): org.tensorflow.lite.schema.RandomOptions;
          public static createRandomOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public seed2(): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.RandomOptionsT
          ): number;
        }
        export module RandomOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.RandomOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.RandomOptions.Vector;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.RandomOptions,
              param1: number
            ): org.tensorflow.lite.schema.RandomOptions;
            public get(param0: number): org.tensorflow.lite.schema.RandomOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RandomOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RandomOptionsT>;
          public getSeed(): number;
          public constructor();
          public setSeed(param0: number): void;
          public getSeed2(): number;
          public setSeed2(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RangeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RangeOptions>;
          public constructor();
          public static startRangeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.RangeOptions;
          public unpack(): org.tensorflow.lite.schema.RangeOptionsT;
          public static ValidateVersion(): void;
          public static endRangeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsRangeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.RangeOptions
          ): org.tensorflow.lite.schema.RangeOptions;
          public static getRootAsRangeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.RangeOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.RangeOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.RangeOptionsT
          ): number;
        }
        export module RangeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.RangeOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.RangeOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.RangeOptions;
            public get(
              param0: org.tensorflow.lite.schema.RangeOptions,
              param1: number
            ): org.tensorflow.lite.schema.RangeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RangeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RangeOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RankOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RankOptions>;
          public static endRankOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.RankOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.RankOptionsT
          ): number;
          public static getRootAsRankOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.RankOptions
          ): org.tensorflow.lite.schema.RankOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.RankOptions;
          public constructor();
          public static getRootAsRankOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.RankOptions;
          public static startRankOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.RankOptionsT;
        }
        export module RankOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.RankOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.RankOptions,
              param1: number
            ): org.tensorflow.lite.schema.RankOptions;
            public get(param0: number): org.tensorflow.lite.schema.RankOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.RankOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class RankOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.RankOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReadVariableOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReadVariableOptions>;
          public unpack(): org.tensorflow.lite.schema.ReadVariableOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ReadVariableOptionsT
          ): number;
          public static endReadVariableOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static getRootAsReadVariableOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ReadVariableOptions
          ): org.tensorflow.lite.schema.ReadVariableOptions;
          public static startReadVariableOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpackTo(param0: org.tensorflow.lite.schema.ReadVariableOptionsT): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReadVariableOptions;
          public static getRootAsReadVariableOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ReadVariableOptions;
        }
        export module ReadVariableOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ReadVariableOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.ReadVariableOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ReadVariableOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.ReadVariableOptions,
              param1: number
            ): org.tensorflow.lite.schema.ReadVariableOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReadVariableOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReadVariableOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReducerOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReducerOptions>;
          public unpack(): org.tensorflow.lite.schema.ReducerOptionsT;
          public static addKeepDims(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReducerOptions;
          public static getRootAsReducerOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReducerOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsReducerOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ReducerOptions
          ): org.tensorflow.lite.schema.ReducerOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ReducerOptionsT
          ): number;
          public constructor();
          public static endReducerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.ReducerOptionsT): void;
          public static createReducerOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): number;
          public static startReducerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public keepDims(): boolean;
        }
        export module ReducerOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ReducerOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ReducerOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ReducerOptions;
            public get(
              param0: org.tensorflow.lite.schema.ReducerOptions,
              param1: number
            ): org.tensorflow.lite.schema.ReducerOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReducerOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReducerOptionsT>;
          public getKeepDims(): boolean;
          public constructor();
          public setKeepDims(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReshapeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReshapeOptions>;
          public newShapeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static getRootAsReshapeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReshapeOptions;
          public static createNewShapeVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static startReshapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public newShapeVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public static endReshapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ReshapeOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpackTo(param0: org.tensorflow.lite.schema.ReshapeOptionsT): void;
          public static ValidateVersion(): void;
          public newShapeAsByteBuffer(): java.nio.ByteBuffer;
          public newShapeVector(): com.google.flatbuffers.IntVector;
          public newShape(param0: number): number;
          public static startNewShapeVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsReshapeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ReshapeOptions
          ): org.tensorflow.lite.schema.ReshapeOptions;
          public newShapeLength(): number;
          public static createReshapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReshapeOptions;
          public constructor();
          public static addNewShape(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.ReshapeOptionsT;
        }
        export module ReshapeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ReshapeOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ReshapeOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.ReshapeOptions;
            public get(
              param0: org.tensorflow.lite.schema.ReshapeOptions,
              param1: number
            ): org.tensorflow.lite.schema.ReshapeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReshapeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReshapeOptionsT>;
          public constructor();
          public getNewShape(): androidNative.Array<number>;
          public setNewShape(param0: androidNative.Array<number>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ResizeBilinearOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeBilinearOptions>;
          public static addAlignCorners(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public unpackTo(param0: org.tensorflow.lite.schema.ResizeBilinearOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsResizeBilinearOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ResizeBilinearOptions;
          public static createResizeBilinearOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean,
            param2: boolean
          ): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ResizeBilinearOptionsT
          ): number;
          public alignCorners(): boolean;
          public static getRootAsResizeBilinearOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ResizeBilinearOptions
          ): org.tensorflow.lite.schema.ResizeBilinearOptions;
          public constructor();
          public static addHalfPixelCenters(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public unpack(): org.tensorflow.lite.schema.ResizeBilinearOptionsT;
          public static startResizeBilinearOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endResizeBilinearOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public halfPixelCenters(): boolean;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ResizeBilinearOptions;
        }
        export module ResizeBilinearOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeBilinearOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ResizeBilinearOptions;
            public get(
              param0: org.tensorflow.lite.schema.ResizeBilinearOptions,
              param1: number
            ): org.tensorflow.lite.schema.ResizeBilinearOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ResizeBilinearOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ResizeBilinearOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeBilinearOptionsT>;
          public getHalfPixelCenters(): boolean;
          public setAlignCorners(param0: boolean): void;
          public constructor();
          public getAlignCorners(): boolean;
          public setHalfPixelCenters(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ResizeNearestNeighborOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeNearestNeighborOptions>;
          public static addAlignCorners(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public unpack(): org.tensorflow.lite.schema.ResizeNearestNeighborOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsResizeNearestNeighborOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ResizeNearestNeighborOptions
          ): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
          public alignCorners(): boolean;
          public static endResizeNearestNeighborOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.ResizeNearestNeighborOptionsT): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ResizeNearestNeighborOptionsT
          ): number;
          public constructor();
          public static addHalfPixelCenters(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public halfPixelCenters(): boolean;
          public static getRootAsResizeNearestNeighborOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
          public static createResizeNearestNeighborOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean,
            param2: boolean
          ): number;
          public static startResizeNearestNeighborOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module ResizeNearestNeighborOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeNearestNeighborOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
            public get(
              param0: org.tensorflow.lite.schema.ResizeNearestNeighborOptions,
              param1: number
            ): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ResizeNearestNeighborOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ResizeNearestNeighborOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeNearestNeighborOptionsT>;
          public getHalfPixelCenters(): boolean;
          public setAlignCorners(param0: boolean): void;
          public constructor();
          public getAlignCorners(): boolean;
          public setHalfPixelCenters(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReverseSequenceOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseSequenceOptions>;
          public seqDim(): number;
          public static createReverseSequenceOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static addBatchDim(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static ValidateVersion(): void;
          public static getRootAsReverseSequenceOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ReverseSequenceOptions
          ): org.tensorflow.lite.schema.ReverseSequenceOptions;
          public unpack(): org.tensorflow.lite.schema.ReverseSequenceOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.ReverseSequenceOptionsT): void;
          public batchDim(): number;
          public static addSeqDim(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endReverseSequenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ReverseSequenceOptionsT
          ): number;
          public static getRootAsReverseSequenceOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ReverseSequenceOptions;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ReverseSequenceOptions;
          public static startReverseSequenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module ReverseSequenceOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseSequenceOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ReverseSequenceOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.ReverseSequenceOptions;
            public get(
              param0: org.tensorflow.lite.schema.ReverseSequenceOptions,
              param1: number
            ): org.tensorflow.lite.schema.ReverseSequenceOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReverseSequenceOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseSequenceOptionsT>;
          public setSeqDim(param0: number): void;
          public constructor();
          public getBatchDim(): number;
          public getSeqDim(): number;
          public setBatchDim(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReverseV2Options {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseV2Options>;
          public unpackTo(param0: org.tensorflow.lite.schema.ReverseV2OptionsT): void;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReverseV2Options;
          public static ValidateVersion(): void;
          public static startReverseV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ReverseV2OptionsT
          ): number;
          public static getRootAsReverseV2Options(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ReverseV2Options;
          public static getRootAsReverseV2Options(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ReverseV2Options
          ): org.tensorflow.lite.schema.ReverseV2Options;
          public static endReverseV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.ReverseV2OptionsT;
        }
        export module ReverseV2Options {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseV2Options.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ReverseV2Options;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ReverseV2Options.Vector;
            public get(
              param0: org.tensorflow.lite.schema.ReverseV2Options,
              param1: number
            ): org.tensorflow.lite.schema.ReverseV2Options;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ReverseV2OptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseV2OptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Rfft2dOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Rfft2dOptions>;
          public unpackTo(param0: org.tensorflow.lite.schema.Rfft2dOptionsT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.Rfft2dOptionsT
          ): number;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static startRfft2dOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endRfft2dOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.Rfft2dOptionsT;
          public static getRootAsRfft2dOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Rfft2dOptions
          ): org.tensorflow.lite.schema.Rfft2dOptions;
          public static getRootAsRfft2dOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Rfft2dOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Rfft2dOptions;
        }
        export module Rfft2dOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Rfft2dOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Rfft2dOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.Rfft2dOptions;
            public get(
              param0: org.tensorflow.lite.schema.Rfft2dOptions,
              param1: number
            ): org.tensorflow.lite.schema.Rfft2dOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Rfft2dOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Rfft2dOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SVDFOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SVDFOptions>;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SVDFOptions;
          public rank(): number;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public static endSVDFOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static startSVDFOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public asymmetricQuantizeInputs(): boolean;
          public static createSVDFOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: boolean
          ): number;
          public static addRank(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public fusedActivationFunction(): number;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.SVDFOptionsT): void;
          public static getRootAsSVDFOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SVDFOptions
          ): org.tensorflow.lite.schema.SVDFOptions;
          public unpack(): org.tensorflow.lite.schema.SVDFOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SVDFOptionsT
          ): number;
          public static getRootAsSVDFOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SVDFOptions;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
        }
        export module SVDFOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SVDFOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SVDFOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SVDFOptions;
            public get(
              param0: org.tensorflow.lite.schema.SVDFOptions,
              param1: number
            ): org.tensorflow.lite.schema.SVDFOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SVDFOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SVDFOptionsT>;
          public setRank(param0: number): void;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getRank(): number;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ScatterNdOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ScatterNdOptions>;
          public static getRootAsScatterNdOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ScatterNdOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ScatterNdOptionsT
          ): number;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.ScatterNdOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endScatterNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ScatterNdOptions;
          public unpack(): org.tensorflow.lite.schema.ScatterNdOptionsT;
          public static startScatterNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsScatterNdOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ScatterNdOptions
          ): org.tensorflow.lite.schema.ScatterNdOptions;
        }
        export module ScatterNdOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ScatterNdOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.ScatterNdOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.ScatterNdOptions,
              param1: number
            ): org.tensorflow.lite.schema.ScatterNdOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ScatterNdOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ScatterNdOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ScatterNdOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SegmentSumOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SegmentSumOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SegmentSumOptionsT
          ): number;
          public unpack(): org.tensorflow.lite.schema.SegmentSumOptionsT;
          public static getRootAsSegmentSumOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SegmentSumOptions;
          public constructor();
          public static getRootAsSegmentSumOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SegmentSumOptions
          ): org.tensorflow.lite.schema.SegmentSumOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SegmentSumOptions;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.SegmentSumOptionsT): void;
          public static startSegmentSumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endSegmentSumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module SegmentSumOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SegmentSumOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SegmentSumOptions.Vector;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SegmentSumOptions,
              param1: number
            ): org.tensorflow.lite.schema.SegmentSumOptions;
            public get(param0: number): org.tensorflow.lite.schema.SegmentSumOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SegmentSumOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SegmentSumOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SelectOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SelectOptions>;
          public static endSelectOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static startSelectOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.SelectOptionsT): void;
          public constructor();
          public static getRootAsSelectOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsSelectOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SelectOptions
          ): org.tensorflow.lite.schema.SelectOptions;
          public unpack(): org.tensorflow.lite.schema.SelectOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SelectOptionsT
          ): number;
        }
        export module SelectOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SelectOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SelectOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SelectOptions;
            public get(
              param0: org.tensorflow.lite.schema.SelectOptions,
              param1: number
            ): org.tensorflow.lite.schema.SelectOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SelectOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SelectOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SelectV2Options {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SelectV2Options>;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectV2Options;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SelectV2OptionsT
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.SelectV2OptionsT): void;
          public constructor();
          public static getRootAsSelectV2Options(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SelectV2Options;
          public static getRootAsSelectV2Options(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SelectV2Options
          ): org.tensorflow.lite.schema.SelectV2Options;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startSelectV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endSelectV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.SelectV2OptionsT;
        }
        export module SelectV2Options {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SelectV2Options.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SelectV2Options,
              param1: number
            ): org.tensorflow.lite.schema.SelectV2Options;
            public get(param0: number): org.tensorflow.lite.schema.SelectV2Options;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SelectV2Options.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SelectV2OptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SelectV2OptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SequenceRNNOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SequenceRNNOptions>;
          public static getRootAsSequenceRNNOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SequenceRNNOptions
          ): org.tensorflow.lite.schema.SequenceRNNOptions;
          public unpack(): org.tensorflow.lite.schema.SequenceRNNOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.SequenceRNNOptionsT): void;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SequenceRNNOptions;
          public timeMajor(): boolean;
          public static createSequenceRNNOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean,
            param2: number,
            param3: boolean
          ): number;
          public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public asymmetricQuantizeInputs(): boolean;
          public static endSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public fusedActivationFunction(): number;
          public static startSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SequenceRNNOptionsT
          ): number;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
          public static getRootAsSequenceRNNOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SequenceRNNOptions;
        }
        export module SequenceRNNOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SequenceRNNOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SequenceRNNOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.SequenceRNNOptions;
            public get(
              param0: org.tensorflow.lite.schema.SequenceRNNOptions,
              param1: number
            ): org.tensorflow.lite.schema.SequenceRNNOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SequenceRNNOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SequenceRNNOptionsT>;
          public getTimeMajor(): boolean;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public setTimeMajor(param0: boolean): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ShapeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ShapeOptions>;
          public static getRootAsShapeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ShapeOptions
          ): org.tensorflow.lite.schema.ShapeOptions;
          public static getRootAsShapeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ShapeOptions;
          public outType(): number;
          public static endShapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static createShapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ShapeOptions;
          public unpack(): org.tensorflow.lite.schema.ShapeOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.ShapeOptionsT): void;
          public constructor();
          public static startShapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ShapeOptionsT
          ): number;
          public static addOutType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
        }
        export module ShapeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ShapeOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ShapeOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.ShapeOptions;
            public get(
              param0: org.tensorflow.lite.schema.ShapeOptions,
              param1: number
            ): org.tensorflow.lite.schema.ShapeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ShapeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ShapeOptionsT>;
          public constructor();
          public setOutType(param0: number): void;
          public getOutType(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SignatureDef {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SignatureDef>;
          public inputsVector(
            param0: org.tensorflow.lite.schema.TensorMap.Vector
          ): org.tensorflow.lite.schema.TensorMap.Vector;
          public outputsVector(): org.tensorflow.lite.schema.TensorMap.Vector;
          public static addInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public inputs(
            param0: org.tensorflow.lite.schema.TensorMap,
            param1: number
          ): org.tensorflow.lite.schema.TensorMap;
          public inputsVector(): org.tensorflow.lite.schema.TensorMap.Vector;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SignatureDefT
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.SignatureDefT): void;
          public signatureKey(): string;
          public static startSignatureDef(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static startInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public outputs(param0: number): org.tensorflow.lite.schema.TensorMap;
          public static createInputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public inputs(param0: number): org.tensorflow.lite.schema.TensorMap;
          public inputsLength(): number;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SignatureDef;
          public subgraphIndex(): number;
          public static getRootAsSignatureDef(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SignatureDef
          ): org.tensorflow.lite.schema.SignatureDef;
          public static endSignatureDef(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsSignatureDef(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SignatureDef;
          public static addSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.SignatureDefT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public outputsVector(
            param0: org.tensorflow.lite.schema.TensorMap.Vector
          ): org.tensorflow.lite.schema.TensorMap.Vector;
          public static createSignatureDef(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number
          ): number;
          public static ValidateVersion(): void;
          public outputs(
            param0: org.tensorflow.lite.schema.TensorMap,
            param1: number
          ): org.tensorflow.lite.schema.TensorMap;
          public static addOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public outputsLength(): number;
          public static startOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public signatureKeyAsByteBuffer(): java.nio.ByteBuffer;
          public signatureKeyInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static createOutputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static addSignatureKey(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
        }
        export module SignatureDef {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SignatureDef.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.SignatureDef;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SignatureDef.Vector;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SignatureDef,
              param1: number
            ): org.tensorflow.lite.schema.SignatureDef;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SignatureDefT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SignatureDefT>;
          public setSignatureKey(param0: string): void;
          public setSubgraphIndex(param0: number): void;
          public constructor();
          public setInputs(param0: androidNative.Array<org.tensorflow.lite.schema.TensorMapT>): void;
          public getSignatureKey(): string;
          public setOutputs(param0: androidNative.Array<org.tensorflow.lite.schema.TensorMapT>): void;
          public getOutputs(): androidNative.Array<org.tensorflow.lite.schema.TensorMapT>;
          public getInputs(): androidNative.Array<org.tensorflow.lite.schema.TensorMapT>;
          public getSubgraphIndex(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SkipGramOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SkipGramOptions>;
          public includeAllNgrams(): boolean;
          public static startSkipGramOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SkipGramOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static createSkipGramOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: boolean
          ): number;
          public static ValidateVersion(): void;
          public static getRootAsSkipGramOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SkipGramOptions;
          public static addIncludeAllNgrams(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static endSkipGramOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addMaxSkipSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public maxSkipSize(): number;
          public static getRootAsSkipGramOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SkipGramOptions
          ): org.tensorflow.lite.schema.SkipGramOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SkipGramOptions;
          public unpack(): org.tensorflow.lite.schema.SkipGramOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.SkipGramOptionsT): void;
          public constructor();
          public ngramSize(): number;
          public static addNgramSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
        }
        export module SkipGramOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SkipGramOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SkipGramOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SkipGramOptions;
            public get(
              param0: org.tensorflow.lite.schema.SkipGramOptions,
              param1: number
            ): org.tensorflow.lite.schema.SkipGramOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SkipGramOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SkipGramOptionsT>;
          public getMaxSkipSize(): number;
          public setIncludeAllNgrams(param0: boolean): void;
          public getNgramSize(): number;
          public constructor();
          public getIncludeAllNgrams(): boolean;
          public setNgramSize(param0: number): void;
          public setMaxSkipSize(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SliceOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SliceOptions>;
          public unpack(): org.tensorflow.lite.schema.SliceOptionsT;
          public constructor();
          public unpackTo(param0: org.tensorflow.lite.schema.SliceOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static startSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static ValidateVersion(): void;
          public static getRootAsSliceOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SliceOptions;
          public static getRootAsSliceOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SliceOptions
          ): org.tensorflow.lite.schema.SliceOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SliceOptions;
          public static endSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SliceOptionsT
          ): number;
        }
        export module SliceOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SliceOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.SliceOptions,
              param1: number
            ): org.tensorflow.lite.schema.SliceOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.SliceOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SliceOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SliceOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SliceOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SoftmaxOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SoftmaxOptions>;
          public static createSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public unpack(): org.tensorflow.lite.schema.SoftmaxOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SoftmaxOptionsT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static endSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SoftmaxOptions;
          public static getRootAsSoftmaxOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SoftmaxOptions;
          public constructor();
          public static addBeta(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsSoftmaxOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SoftmaxOptions
          ): org.tensorflow.lite.schema.SoftmaxOptions;
          public beta(): number;
          public static startSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.SoftmaxOptionsT): void;
        }
        export module SoftmaxOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SoftmaxOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SoftmaxOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.SoftmaxOptions,
              param1: number
            ): org.tensorflow.lite.schema.SoftmaxOptions;
            public get(param0: number): org.tensorflow.lite.schema.SoftmaxOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SoftmaxOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SoftmaxOptionsT>;
          public constructor();
          public setBeta(param0: number): void;
          public getBeta(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SpaceToBatchNDOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToBatchNDOptions>;
          public static endSpaceToBatchNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static getRootAsSpaceToBatchNDOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SpaceToBatchNDOptions
          ): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SpaceToBatchNDOptionsT
          ): number;
          public constructor();
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
          public unpack(): org.tensorflow.lite.schema.SpaceToBatchNDOptionsT;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startSpaceToBatchNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsSpaceToBatchNDOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.SpaceToBatchNDOptionsT): void;
        }
        export module SpaceToBatchNDOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToBatchNDOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SpaceToBatchNDOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
            public get(
              param0: org.tensorflow.lite.schema.SpaceToBatchNDOptions,
              param1: number
            ): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SpaceToBatchNDOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToBatchNDOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SpaceToDepthOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToDepthOptions>;
          public unpackTo(param0: org.tensorflow.lite.schema.SpaceToDepthOptionsT): void;
          public static endSpaceToDepthOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public blockSize(): number;
          public static ValidateVersion(): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SpaceToDepthOptionsT
          ): number;
          public static addBlockSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsSpaceToDepthOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SpaceToDepthOptions
          ): org.tensorflow.lite.schema.SpaceToDepthOptions;
          public static startSpaceToDepthOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public static createSpaceToDepthOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public static getRootAsSpaceToDepthOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SpaceToDepthOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SpaceToDepthOptions;
          public unpack(): org.tensorflow.lite.schema.SpaceToDepthOptionsT;
        }
        export module SpaceToDepthOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToDepthOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SpaceToDepthOptions,
              param1: number
            ): org.tensorflow.lite.schema.SpaceToDepthOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SpaceToDepthOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SpaceToDepthOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SpaceToDepthOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToDepthOptionsT>;
          public setBlockSize(param0: number): void;
          public constructor();
          public getBlockSize(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SparseIndexVector {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SparseIndexVector>;
          public static NONE: number;
          public static Int32Vector: number;
          public static Uint16Vector: number;
          public static Uint8Vector: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SparseIndexVectorUnion {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SparseIndexVectorUnion>;
          public getType(): number;
          public getValue(): any;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SparseIndexVectorUnion
          ): number;
          public setValue(param0: any): void;
          public constructor();
          public asInt32Vector(): org.tensorflow.lite.schema.Int32VectorT;
          public setType(param0: number): void;
          public asUint8Vector(): org.tensorflow.lite.schema.Uint8VectorT;
          public asUint16Vector(): org.tensorflow.lite.schema.Uint16VectorT;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SparseToDenseOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SparseToDenseOptions>;
          public static startSparseToDenseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.SparseToDenseOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static endSparseToDenseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.SparseToDenseOptionsT;
          public validateIndices(): boolean;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparseToDenseOptions;
          public static getRootAsSparseToDenseOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SparseToDenseOptions
          ): org.tensorflow.lite.schema.SparseToDenseOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SparseToDenseOptionsT
          ): number;
          public constructor();
          public static createSparseToDenseOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): number;
          public static addValidateIndices(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static getRootAsSparseToDenseOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SparseToDenseOptions;
        }
        export module SparseToDenseOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SparseToDenseOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SparseToDenseOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.SparseToDenseOptions,
              param1: number
            ): org.tensorflow.lite.schema.SparseToDenseOptions;
            public get(param0: number): org.tensorflow.lite.schema.SparseToDenseOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SparseToDenseOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SparseToDenseOptionsT>;
          public constructor();
          public getValidateIndices(): boolean;
          public setValidateIndices(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SparsityParameters {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SparsityParameters>;
          public dimMetadata(
            param0: org.tensorflow.lite.schema.DimensionMetadata,
            param1: number
          ): org.tensorflow.lite.schema.DimensionMetadata;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparsityParameters;
          public static createSparsityParameters(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number
          ): number;
          public blockMap(param0: number): number;
          public static createTraversalOrderVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public blockMapVector(): com.google.flatbuffers.IntVector;
          public traversalOrderVector(): com.google.flatbuffers.IntVector;
          public static addDimMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public traversalOrder(param0: number): number;
          public constructor();
          public traversalOrderInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public unpack(): org.tensorflow.lite.schema.SparsityParametersT;
          public traversalOrderAsByteBuffer(): java.nio.ByteBuffer;
          public static startDimMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public blockMapInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public traversalOrderLength(): number;
          public static getRootAsSparsityParameters(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SparsityParameters
          ): org.tensorflow.lite.schema.SparsityParameters;
          public static addTraversalOrder(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SparsityParametersT
          ): number;
          public static addBlockMap(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public blockMapAsByteBuffer(): java.nio.ByteBuffer;
          public static startTraversalOrderVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public dimMetadataVector(): org.tensorflow.lite.schema.DimensionMetadata.Vector;
          public traversalOrderVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public blockMapLength(): number;
          public dimMetadataLength(): number;
          public static getRootAsSparsityParameters(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SparsityParameters;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static createDimMetadataVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static ValidateVersion(): void;
          public blockMapVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public dimMetadataVector(
            param0: org.tensorflow.lite.schema.DimensionMetadata.Vector
          ): org.tensorflow.lite.schema.DimensionMetadata.Vector;
          public unpackTo(param0: org.tensorflow.lite.schema.SparsityParametersT): void;
          public static endSparsityParameters(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public dimMetadata(param0: number): org.tensorflow.lite.schema.DimensionMetadata;
          public static startBlockMapVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createBlockMapVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static startSparsityParameters(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module SparsityParameters {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SparsityParameters.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SparsityParameters,
              param1: number
            ): org.tensorflow.lite.schema.SparsityParameters;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SparsityParameters.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SparsityParameters;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SparsityParametersT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SparsityParametersT>;
          public getTraversalOrder(): androidNative.Array<number>;
          public constructor();
          public getBlockMap(): androidNative.Array<number>;
          public setTraversalOrder(param0: androidNative.Array<number>): void;
          public setBlockMap(param0: androidNative.Array<number>): void;
          public getDimMetadata(): androidNative.Array<org.tensorflow.lite.schema.DimensionMetadataT>;
          public setDimMetadata(param0: androidNative.Array<org.tensorflow.lite.schema.DimensionMetadataT>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SplitOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SplitOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SplitOptionsT
          ): number;
          public static startSplitOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endSplitOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static addNumSplits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsSplitOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SplitOptions
          ): org.tensorflow.lite.schema.SplitOptions;
          public static getRootAsSplitOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitOptions;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitOptions;
          public numSplits(): number;
          public static createSplitOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public unpackTo(param0: org.tensorflow.lite.schema.SplitOptionsT): void;
          public unpack(): org.tensorflow.lite.schema.SplitOptionsT;
        }
        export module SplitOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SplitOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SplitOptions,
              param1: number
            ): org.tensorflow.lite.schema.SplitOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SplitOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SplitOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SplitOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SplitOptionsT>;
          public setNumSplits(param0: number): void;
          public constructor();
          public getNumSplits(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SplitVOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SplitVOptions>;
          public static getRootAsSplitVOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitVOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SplitVOptionsT
          ): number;
          public static getRootAsSplitVOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SplitVOptions
          ): org.tensorflow.lite.schema.SplitVOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endSplitVOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.SplitVOptionsT;
          public static ValidateVersion(): void;
          public static addNumSplits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitVOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.SplitVOptionsT): void;
          public constructor();
          public numSplits(): number;
          public static startSplitVOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static createSplitVOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
        }
        export module SplitVOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SplitVOptions.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SplitVOptions,
              param1: number
            ): org.tensorflow.lite.schema.SplitVOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SplitVOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SplitVOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SplitVOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SplitVOptionsT>;
          public setNumSplits(param0: number): void;
          public constructor();
          public getNumSplits(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SquareOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SquareOptions>;
          public static endSquareOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SquareOptionsT
          ): number;
          public static getRootAsSquareOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SquareOptions
          ): org.tensorflow.lite.schema.SquareOptions;
          public constructor();
          public static getRootAsSquareOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquareOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpackTo(param0: org.tensorflow.lite.schema.SquareOptionsT): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquareOptions;
          public unpack(): org.tensorflow.lite.schema.SquareOptionsT;
          public static startSquareOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module SquareOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SquareOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SquareOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.SquareOptions,
              param1: number
            ): org.tensorflow.lite.schema.SquareOptions;
            public get(param0: number): org.tensorflow.lite.schema.SquareOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SquareOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SquareOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SquaredDifferenceOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SquaredDifferenceOptions>;
          public static endSquaredDifferenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SquaredDifferenceOptionsT
          ): number;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SquaredDifferenceOptions;
          public static getRootAsSquaredDifferenceOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SquaredDifferenceOptions
          ): org.tensorflow.lite.schema.SquaredDifferenceOptions;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public unpack(): org.tensorflow.lite.schema.SquaredDifferenceOptionsT;
          public static ValidateVersion(): void;
          public static getRootAsSquaredDifferenceOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.SquaredDifferenceOptions;
          public static startSquaredDifferenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.SquaredDifferenceOptionsT): void;
        }
        export module SquaredDifferenceOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SquaredDifferenceOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SquaredDifferenceOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SquaredDifferenceOptions;
            public get(
              param0: org.tensorflow.lite.schema.SquaredDifferenceOptions,
              param1: number
            ): org.tensorflow.lite.schema.SquaredDifferenceOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SquaredDifferenceOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SquaredDifferenceOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SqueezeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SqueezeOptions>;
          public static createSqueezeOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public unpackTo(param0: org.tensorflow.lite.schema.SqueezeOptionsT): void;
          public static getRootAsSqueezeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SqueezeOptions
          ): org.tensorflow.lite.schema.SqueezeOptions;
          public static addSqueezeDims(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public squeezeDimsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static startSqueezeDimsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public squeezeDimsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public squeezeDimsAsByteBuffer(): java.nio.ByteBuffer;
          public squeezeDims(param0: number): number;
          public static endSqueezeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.SqueezeOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SqueezeOptionsT
          ): number;
          public constructor();
          public static getRootAsSqueezeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SqueezeOptions;
          public static startSqueezeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public squeezeDimsLength(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SqueezeOptions;
          public squeezeDimsVector(): com.google.flatbuffers.IntVector;
          public static createSqueezeDimsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
        }
        export module SqueezeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SqueezeOptions.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.SqueezeOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SqueezeOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.SqueezeOptions,
              param1: number
            ): org.tensorflow.lite.schema.SqueezeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SqueezeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SqueezeOptionsT>;
          public constructor();
          public setSqueezeDims(param0: androidNative.Array<number>): void;
          public getSqueezeDims(): androidNative.Array<number>;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class StridedSliceOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.StridedSliceOptions>;
          public shrinkAxisMask(): number;
          public static startStridedSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public newAxisMask(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.StridedSliceOptions;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.StridedSliceOptionsT
          ): number;
          public static getRootAsStridedSliceOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.StridedSliceOptions
          ): org.tensorflow.lite.schema.StridedSliceOptions;
          public static addBeginMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addNewAxisMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addShrinkAxisMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endStridedSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addEndMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public ellipsisMask(): number;
          public constructor();
          public static addEllipsisMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static getRootAsStridedSliceOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.StridedSliceOptions;
          public unpackTo(param0: org.tensorflow.lite.schema.StridedSliceOptionsT): void;
          public beginMask(): number;
          public endMask(): number;
          public unpack(): org.tensorflow.lite.schema.StridedSliceOptionsT;
          public static createStridedSliceOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number
          ): number;
        }
        export module StridedSliceOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.StridedSliceOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.StridedSliceOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.StridedSliceOptions;
            public get(
              param0: org.tensorflow.lite.schema.StridedSliceOptions,
              param1: number
            ): org.tensorflow.lite.schema.StridedSliceOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class StridedSliceOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.StridedSliceOptionsT>;
          public setEllipsisMask(param0: number): void;
          public setShrinkAxisMask(param0: number): void;
          public getBeginMask(): number;
          public setEndMask(param0: number): void;
          public setNewAxisMask(param0: number): void;
          public constructor();
          public getEllipsisMask(): number;
          public getNewAxisMask(): number;
          public getShrinkAxisMask(): number;
          public getEndMask(): number;
          public setBeginMask(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SubGraph {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SubGraph>;
          public unpackTo(param0: org.tensorflow.lite.schema.SubGraphT): void;
          public inputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public unpack(): org.tensorflow.lite.schema.SubGraphT;
          public inputsAsByteBuffer(): java.nio.ByteBuffer;
          public constructor();
          public static startTensorsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public nameAsByteBuffer(): java.nio.ByteBuffer;
          public tensors(param0: org.tensorflow.lite.schema.Tensor, param1: number): org.tensorflow.lite.schema.Tensor;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubGraph;
          public outputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public inputsVector(): com.google.flatbuffers.IntVector;
          public static getRootAsSubGraph(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubGraph;
          public static createTensorsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static startOperatorsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public operatorsVector(
            param0: org.tensorflow.lite.schema.Operator.Vector
          ): org.tensorflow.lite.schema.Operator.Vector;
          public static getRootAsSubGraph(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SubGraph
          ): org.tensorflow.lite.schema.SubGraph;
          public static addOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addOperators(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public outputsLength(): number;
          public inputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static createSubGraph(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number
          ): number;
          public static addTensors(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public tensors(param0: number): org.tensorflow.lite.schema.Tensor;
          public static createOutputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public tensorsVector(): org.tensorflow.lite.schema.Tensor.Vector;
          public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SubGraphT
          ): number;
          public name(): string;
          public static endSubGraph(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public outputs(param0: number): number;
          public outputsAsByteBuffer(): java.nio.ByteBuffer;
          public tensorsVector(
            param0: org.tensorflow.lite.schema.Tensor.Vector
          ): org.tensorflow.lite.schema.Tensor.Vector;
          public static startSubGraph(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static createOperatorsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static startInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public operators(param0: number): org.tensorflow.lite.schema.Operator;
          public static createInputsVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public inputsLength(): number;
          public outputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public inputs(param0: number): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public tensorsLength(): number;
          public operatorsLength(): number;
          public operatorsVector(): org.tensorflow.lite.schema.Operator.Vector;
          public outputsVector(): com.google.flatbuffers.IntVector;
          public operators(
            param0: org.tensorflow.lite.schema.Operator,
            param1: number
          ): org.tensorflow.lite.schema.Operator;
          public static startOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
        }
        export module SubGraph {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SubGraph.Vector>;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.SubGraph,
              param1: number
            ): org.tensorflow.lite.schema.SubGraph;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SubGraph.Vector;
            public get(param0: number): org.tensorflow.lite.schema.SubGraph;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SubGraphT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SubGraphT>;
          public getOperators(): androidNative.Array<org.tensorflow.lite.schema.OperatorT>;
          public getName(): string;
          public constructor();
          public getTensors(): androidNative.Array<org.tensorflow.lite.schema.TensorT>;
          public setOperators(param0: androidNative.Array<org.tensorflow.lite.schema.OperatorT>): void;
          public setInputs(param0: androidNative.Array<number>): void;
          public setOutputs(param0: androidNative.Array<number>): void;
          public getOutputs(): androidNative.Array<number>;
          public setTensors(param0: androidNative.Array<org.tensorflow.lite.schema.TensorT>): void;
          public getInputs(): androidNative.Array<number>;
          public setName(param0: string): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SubOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SubOptions>;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubOptions;
          public unpack(): org.tensorflow.lite.schema.SubOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.SubOptionsT): void;
          public static startSubOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public fusedActivationFunction(): number;
          public constructor();
          public static endSubOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public potScaleInt16(): boolean;
          public static getRootAsSubOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubOptions;
          public static getRootAsSubOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.SubOptions
          ): org.tensorflow.lite.schema.SubOptions;
          public static createSubOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: boolean
          ): number;
          public static addPotScaleInt16(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.SubOptionsT
          ): number;
        }
        export module SubOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.SubOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.SubOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.SubOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.SubOptions,
              param1: number
            ): org.tensorflow.lite.schema.SubOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class SubOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.SubOptionsT>;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getPotScaleInt16(): boolean;
          public setPotScaleInt16(param0: boolean): void;
          public getFusedActivationFunction(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Tensor {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Tensor>;
          public buffer(): number;
          public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public name(): string;
          public static createShapeSignatureVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public sparsity(
            param0: org.tensorflow.lite.schema.SparsityParameters
          ): org.tensorflow.lite.schema.SparsityParameters;
          public static createShapeVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static endTensor(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static startTensor(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public quantization(
            param0: org.tensorflow.lite.schema.QuantizationParameters
          ): org.tensorflow.lite.schema.QuantizationParameters;
          public static startShapeSignatureVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public nameAsByteBuffer(): java.nio.ByteBuffer;
          public shapeVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public shapeSignatureLength(): number;
          public shapeSignatureVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
          public static addShape(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.TensorT
          ): number;
          public shapeSignatureAsByteBuffer(): java.nio.ByteBuffer;
          public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public shapeSignature(param0: number): number;
          public shapeAsByteBuffer(): java.nio.ByteBuffer;
          public sparsity(): org.tensorflow.lite.schema.SparsityParameters;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public quantization(): org.tensorflow.lite.schema.QuantizationParameters;
          public static addShapeSignature(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpack(): org.tensorflow.lite.schema.TensorT;
          public static ValidateVersion(): void;
          public isVariable(): boolean;
          public static getRootAsTensor(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Tensor;
          public static addSparsity(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public shapeSignatureVector(): com.google.flatbuffers.IntVector;
          public shapeSignatureInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static addIsVariable(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public shapeVector(): com.google.flatbuffers.IntVector;
          public static addQuantization(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public type(): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Tensor;
          public static addBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpackTo(param0: org.tensorflow.lite.schema.TensorT): void;
          public static createTensor(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: number,
            param5: number,
            param6: boolean,
            param7: number,
            param8: number
          ): number;
          public static getRootAsTensor(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Tensor
          ): org.tensorflow.lite.schema.Tensor;
          public shape(param0: number): number;
          public shapeLength(): number;
          public shapeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static startShapeVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
        }
        export module Tensor {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Tensor.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.Tensor;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Tensor.Vector;
            public get(param0: org.tensorflow.lite.schema.Tensor, param1: number): org.tensorflow.lite.schema.Tensor;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TensorMap {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TensorMap>;
          public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public name(): string;
          public tensorIndex(): number;
          public static getRootAsTensorMap(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TensorMap;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TensorMap;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.TensorMapT
          ): number;
          public unpackTo(param0: org.tensorflow.lite.schema.TensorMapT): void;
          public static startTensorMap(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.TensorMapT;
          public static getRootAsTensorMap(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.TensorMap
          ): org.tensorflow.lite.schema.TensorMap;
          public static endTensorMap(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static createTensorMap(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public static addTensorIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public nameAsByteBuffer(): java.nio.ByteBuffer;
        }
        export module TensorMap {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.TensorMap.Vector>;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.TensorMap;
            public get(
              param0: org.tensorflow.lite.schema.TensorMap,
              param1: number
            ): org.tensorflow.lite.schema.TensorMap;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.TensorMap.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TensorMapT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TensorMapT>;
          public getTensorIndex(): number;
          public getName(): string;
          public constructor();
          public setTensorIndex(param0: number): void;
          public setName(param0: string): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TensorT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TensorT>;
          public getType(): number;
          public getQuantization(): org.tensorflow.lite.schema.QuantizationParametersT;
          public setSparsity(param0: org.tensorflow.lite.schema.SparsityParametersT): void;
          public setQuantization(param0: org.tensorflow.lite.schema.QuantizationParametersT): void;
          public setShapeSignature(param0: androidNative.Array<number>): void;
          public getShape(): androidNative.Array<number>;
          public setIsVariable(param0: boolean): void;
          public setName(param0: string): void;
          public getIsVariable(): boolean;
          public getName(): string;
          public constructor();
          public getShapeSignature(): androidNative.Array<number>;
          public setType(param0: number): void;
          public setShape(param0: androidNative.Array<number>): void;
          public getBuffer(): number;
          public setBuffer(param0: number): void;
          public getSparsity(): org.tensorflow.lite.schema.SparsityParametersT;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TensorType {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TensorType>;
          public static FLOAT32: number;
          public static FLOAT16: number;
          public static INT32: number;
          public static UINT8: number;
          public static INT64: number;
          public static STRING: number;
          public static BOOL: number;
          public static INT16: number;
          public static COMPLEX64: number;
          public static INT8: number;
          public static FLOAT64: number;
          public static COMPLEX128: number;
          public static UINT64: number;
          public static RESOURCE: number;
          public static VARIANT: number;
          public static UINT32: number;
          public static UINT16: number;
          public static names: androidNative.Array<string>;
          public static name(param0: number): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TileOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TileOptions>;
          public static startTileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TileOptions;
          public static endTileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.TileOptionsT): void;
          public static getRootAsTileOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TileOptions;
          public static getRootAsTileOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.TileOptions
          ): org.tensorflow.lite.schema.TileOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.TileOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.TileOptionsT
          ): number;
        }
        export module TileOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.TileOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.TileOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.TileOptions,
              param1: number
            ): org.tensorflow.lite.schema.TileOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.TileOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TileOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TileOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TopKV2Options {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TopKV2Options>;
          public static startTopKV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public static getRootAsTopKV2Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TopKV2Options;
          public unpack(): org.tensorflow.lite.schema.TopKV2OptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.TopKV2OptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsTopKV2Options(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.TopKV2Options
          ): org.tensorflow.lite.schema.TopKV2Options;
          public static endTopKV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TopKV2Options;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.TopKV2OptionsT
          ): number;
        }
        export module TopKV2Options {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.TopKV2Options.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.TopKV2Options.Vector;
            public get(param0: number): org.tensorflow.lite.schema.TopKV2Options;
            public get(
              param0: org.tensorflow.lite.schema.TopKV2Options,
              param1: number
            ): org.tensorflow.lite.schema.TopKV2Options;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TopKV2OptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TopKV2OptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TransposeConvOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeConvOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.TransposeConvOptionsT
          ): number;
          public static endTransposeConvOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public unpackTo(param0: org.tensorflow.lite.schema.TransposeConvOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsTransposeConvOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.TransposeConvOptions;
          public padding(): number;
          public constructor();
          public static startTransposeConvOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public strideH(): number;
          public static createTransposeConvOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeConvOptions;
          public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public strideW(): number;
          public static getRootAsTransposeConvOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.TransposeConvOptions
          ): org.tensorflow.lite.schema.TransposeConvOptions;
          public unpack(): org.tensorflow.lite.schema.TransposeConvOptionsT;
        }
        export module TransposeConvOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeConvOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.TransposeConvOptions;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.TransposeConvOptions,
              param1: number
            ): org.tensorflow.lite.schema.TransposeConvOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.TransposeConvOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TransposeConvOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeConvOptionsT>;
          public getStrideH(): number;
          public getPadding(): number;
          public getStrideW(): number;
          public constructor();
          public setPadding(param0: number): void;
          public setStrideW(param0: number): void;
          public setStrideH(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TransposeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.TransposeOptionsT
          ): number;
          public constructor();
          public static endTransposeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeOptions;
          public static getRootAsTransposeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.TransposeOptions
          ): org.tensorflow.lite.schema.TransposeOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsTransposeOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.TransposeOptions;
          public unpack(): org.tensorflow.lite.schema.TransposeOptionsT;
          public static startTransposeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.TransposeOptionsT): void;
        }
        export module TransposeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.TransposeOptions,
              param1: number
            ): org.tensorflow.lite.schema.TransposeOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.TransposeOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.TransposeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class TransposeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Uint16Vector {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Uint16Vector>;
          public valuesLength(): number;
          public unpackTo(param0: org.tensorflow.lite.schema.Uint16VectorT): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.Uint16VectorT
          ): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static startUint16Vector(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static startValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static createUint16Vector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint16Vector;
          public static endUint16Vector(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static addValues(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public valuesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static createValuesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public static getRootAsUint16Vector(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Uint16Vector
          ): org.tensorflow.lite.schema.Uint16Vector;
          public constructor();
          public static getRootAsUint16Vector(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint16Vector;
          public valuesVector(param0: com.google.flatbuffers.ShortVector): com.google.flatbuffers.ShortVector;
          public unpack(): org.tensorflow.lite.schema.Uint16VectorT;
          public valuesAsByteBuffer(): java.nio.ByteBuffer;
          public values(param0: number): number;
          public valuesVector(): com.google.flatbuffers.ShortVector;
        }
        export module Uint16Vector {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Uint16Vector.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.Uint16Vector;
            public constructor();
            public get(
              param0: org.tensorflow.lite.schema.Uint16Vector,
              param1: number
            ): org.tensorflow.lite.schema.Uint16Vector;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Uint16Vector.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Uint16VectorT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Uint16VectorT>;
          public constructor();
          public getValues(): androidNative.Array<number>;
          public setValues(param0: androidNative.Array<number>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Uint8Vector {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Uint8Vector>;
          public valuesLength(): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static startUint8Vector(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static ValidateVersion(): void;
          public static getRootAsUint8Vector(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.Uint8Vector
          ): org.tensorflow.lite.schema.Uint8Vector;
          public static startValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public valuesVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
          public static addValues(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endUint8Vector(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpackTo(param0: org.tensorflow.lite.schema.Uint8VectorT): void;
          public valuesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static createValuesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: java.nio.ByteBuffer
          ): number;
          public static createValuesVector(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: androidNative.Array<number>
          ): number;
          public constructor();
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint8Vector;
          public valuesVector(): com.google.flatbuffers.ByteVector;
          public static createUint8Vector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public unpack(): org.tensorflow.lite.schema.Uint8VectorT;
          public valuesAsByteBuffer(): java.nio.ByteBuffer;
          public values(param0: number): number;
          public static getRootAsUint8Vector(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint8Vector;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.Uint8VectorT
          ): number;
        }
        export module Uint8Vector {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.Uint8Vector.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.Uint8Vector.Vector;
            public get(
              param0: org.tensorflow.lite.schema.Uint8Vector,
              param1: number
            ): org.tensorflow.lite.schema.Uint8Vector;
            public get(param0: number): org.tensorflow.lite.schema.Uint8Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class Uint8VectorT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.Uint8VectorT>;
          public constructor();
          public getValues(): androidNative.Array<number>;
          public setValues(param0: androidNative.Array<number>): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UnidirectionalSequenceLSTMOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions>;
          public static createUnidirectionalSequenceLSTMOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number,
            param3: number,
            param4: boolean,
            param5: boolean
          ): number;
          public static addFusedActivationFunction(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
          public projClip(): number;
          public timeMajor(): boolean;
          public static startUnidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public unpackTo(param0: org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptionsT): void;
          public cellClip(): number;
          public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
          public static endUnidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public asymmetricQuantizeInputs(): boolean;
          public static addProjClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static addCellClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptionsT
          ): number;
          public fusedActivationFunction(): number;
          public static getRootAsUnidirectionalSequenceLSTMOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
          public constructor();
          public static getRootAsUnidirectionalSequenceLSTMOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions
          ): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
          public unpack(): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptionsT;
          public static addAsymmetricQuantizeInputs(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: boolean
          ): void;
        }
        export module UnidirectionalSequenceLSTMOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions.Vector>;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions.Vector;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
            public get(
              param0: org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions,
              param1: number
            ): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UnidirectionalSequenceLSTMOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptionsT>;
          public getTimeMajor(): boolean;
          public getProjClip(): number;
          public getAsymmetricQuantizeInputs(): boolean;
          public setAsymmetricQuantizeInputs(param0: boolean): void;
          public constructor();
          public setFusedActivationFunction(param0: number): void;
          public getCellClip(): number;
          public setProjClip(param0: number): void;
          public setCellClip(param0: number): void;
          public getFusedActivationFunction(): number;
          public setTimeMajor(param0: boolean): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UniqueOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UniqueOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.UniqueOptionsT
          ): number;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.UniqueOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.UniqueOptionsT): void;
          public static addIdxOutType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endUniqueOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.UniqueOptionsT;
          public constructor();
          public static getRootAsUniqueOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.UniqueOptions
          ): org.tensorflow.lite.schema.UniqueOptions;
          public idxOutType(): number;
          public static getRootAsUniqueOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.UniqueOptions;
          public static createUniqueOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
          public static startUniqueOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
        }
        export module UniqueOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.UniqueOptions.Vector>;
            public get(param0: number): org.tensorflow.lite.schema.UniqueOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.UniqueOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.UniqueOptions,
              param1: number
            ): org.tensorflow.lite.schema.UniqueOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UniqueOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UniqueOptionsT>;
          public getIdxOutType(): number;
          public constructor();
          public setIdxOutType(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UnpackOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UnpackOptions>;
          public static getRootAsUnpackOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnpackOptions;
          public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnpackOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static getRootAsUnpackOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.UnpackOptions
          ): org.tensorflow.lite.schema.UnpackOptions;
          public num(): number;
          public unpackTo(param0: org.tensorflow.lite.schema.UnpackOptionsT): void;
          public static startUnpackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static addNum(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endUnpackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.UnpackOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.UnpackOptionsT
          ): number;
          public constructor();
          public axis(): number;
          public static createUnpackOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
        }
        export module UnpackOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.UnpackOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.UnpackOptions,
              param1: number
            ): org.tensorflow.lite.schema.UnpackOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.UnpackOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.UnpackOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UnpackOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UnpackOptionsT>;
          public getNum(): number;
          public constructor();
          public getAxis(): number;
          public setNum(param0: number): void;
          public setAxis(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UnsortedSegmentProdOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UnsortedSegmentProdOptions>;
          public numSegments(): number;
          public unpackTo(param0: org.tensorflow.lite.schema.UnsortedSegmentProdOptionsT): void;
          public static getRootAsUnsortedSegmentProdOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.UnsortedSegmentProdOptions
          ): org.tensorflow.lite.schema.UnsortedSegmentProdOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public static createUnsortedSegmentProdOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number
          ): number;
          public static getRootAsUnsortedSegmentProdOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.UnsortedSegmentProdOptions;
          public constructor();
          public static startUnsortedSegmentProdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endUnsortedSegmentProdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.UnsortedSegmentProdOptionsT;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.UnsortedSegmentProdOptionsT
          ): number;
          public static addNumSegments(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __assign(
            param0: number,
            param1: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.UnsortedSegmentProdOptions;
        }
        export module UnsortedSegmentProdOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.UnsortedSegmentProdOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.UnsortedSegmentProdOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.UnsortedSegmentProdOptions;
            public get(
              param0: org.tensorflow.lite.schema.UnsortedSegmentProdOptions,
              param1: number
            ): org.tensorflow.lite.schema.UnsortedSegmentProdOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class UnsortedSegmentProdOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.UnsortedSegmentProdOptionsT>;
          public constructor();
          public getNumSegments(): number;
          public setNumSegments(param0: number): void;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class VarHandleOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.VarHandleOptions>;
          public container(): string;
          public static addSharedName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static endVarHandleOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public unpack(): org.tensorflow.lite.schema.VarHandleOptionsT;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.VarHandleOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public sharedName(): string;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.VarHandleOptionsT): void;
          public containerAsByteBuffer(): java.nio.ByteBuffer;
          public static startVarHandleOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.VarHandleOptionsT
          ): number;
          public sharedNameAsByteBuffer(): java.nio.ByteBuffer;
          public constructor();
          public static createVarHandleOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public static getRootAsVarHandleOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.VarHandleOptions
          ): org.tensorflow.lite.schema.VarHandleOptions;
          public containerInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
          public static getRootAsVarHandleOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.VarHandleOptions;
          public static addContainer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public sharedNameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
        }
        export module VarHandleOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.VarHandleOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.VarHandleOptions,
              param1: number
            ): org.tensorflow.lite.schema.VarHandleOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.VarHandleOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.VarHandleOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class VarHandleOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.VarHandleOptionsT>;
          public setSharedName(param0: string): void;
          public setContainer(param0: string): void;
          public getSharedName(): string;
          public constructor();
          public getContainer(): string;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class WhereOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.WhereOptions>;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.WhereOptionsT
          ): number;
          public static getRootAsWhereOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.WhereOptions
          ): org.tensorflow.lite.schema.WhereOptions;
          public unpack(): org.tensorflow.lite.schema.WhereOptionsT;
          public static startWhereOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public constructor();
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static ValidateVersion(): void;
          public unpackTo(param0: org.tensorflow.lite.schema.WhereOptionsT): void;
          public static getRootAsWhereOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhereOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhereOptions;
          public static endWhereOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
        }
        export module WhereOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.WhereOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.WhereOptions,
              param1: number
            ): org.tensorflow.lite.schema.WhereOptions;
            public constructor();
            public get(param0: number): org.tensorflow.lite.schema.WhereOptions;
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.WhereOptions.Vector;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class WhereOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.WhereOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class WhileOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.WhileOptions>;
          public static addBodySubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhileOptions;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public condSubgraphIndex(): number;
          public static createWhileOptions(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: number,
            param2: number
          ): number;
          public static ValidateVersion(): void;
          public unpack(): org.tensorflow.lite.schema.WhileOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.WhileOptionsT): void;
          public static addCondSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.WhileOptionsT
          ): number;
          public bodySubgraphIndex(): number;
          public static startWhileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static endWhileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public constructor();
          public static getRootAsWhileOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhileOptions;
          public static getRootAsWhileOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.WhileOptions
          ): org.tensorflow.lite.schema.WhileOptions;
        }
        export module WhileOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.WhileOptions.Vector>;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.WhileOptions.Vector;
            public get(
              param0: org.tensorflow.lite.schema.WhileOptions,
              param1: number
            ): org.tensorflow.lite.schema.WhileOptions;
            public get(param0: number): org.tensorflow.lite.schema.WhileOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class WhileOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.WhileOptionsT>;
          public setCondSubgraphIndex(param0: number): void;
          public getCondSubgraphIndex(): number;
          public constructor();
          public setBodySubgraphIndex(param0: number): void;
          public getBodySubgraphIndex(): number;
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ZerosLikeOptions {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ZerosLikeOptions>;
          public constructor();
          public unpack(): org.tensorflow.lite.schema.ZerosLikeOptionsT;
          public unpackTo(param0: org.tensorflow.lite.schema.ZerosLikeOptionsT): void;
          public __init(param0: number, param1: java.nio.ByteBuffer): void;
          public static endZerosLikeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
          public static pack(
            param0: com.google.flatbuffers.FlatBufferBuilder,
            param1: org.tensorflow.lite.schema.ZerosLikeOptionsT
          ): number;
          public static ValidateVersion(): void;
          public static startZerosLikeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
          public static getRootAsZerosLikeOptions(
            param0: java.nio.ByteBuffer
          ): org.tensorflow.lite.schema.ZerosLikeOptions;
          public static getRootAsZerosLikeOptions(
            param0: java.nio.ByteBuffer,
            param1: org.tensorflow.lite.schema.ZerosLikeOptions
          ): org.tensorflow.lite.schema.ZerosLikeOptions;
          public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ZerosLikeOptions;
        }
        export module ZerosLikeOptions {
          export class Vector {
            public static class: java.lang.Class<org.tensorflow.lite.schema.ZerosLikeOptions.Vector>;
            public get(
              param0: org.tensorflow.lite.schema.ZerosLikeOptions,
              param1: number
            ): org.tensorflow.lite.schema.ZerosLikeOptions;
            public constructor();
            public __assign(
              param0: number,
              param1: number,
              param2: java.nio.ByteBuffer
            ): org.tensorflow.lite.schema.ZerosLikeOptions.Vector;
            public get(param0: number): org.tensorflow.lite.schema.ZerosLikeOptions;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module schema {
        export class ZerosLikeOptionsT {
          public static class: java.lang.Class<org.tensorflow.lite.schema.ZerosLikeOptionsT>;
          public constructor();
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class BoundedInputStream {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.BoundedInputStream>;
            public read(): number;
            public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
            public available(): number;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class ByteBufferChannel extends org.tensorflow.lite.support.metadata.SeekableByteChannelCompat {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ByteBufferChannel>;
            public write(param0: java.nio.ByteBuffer): number;
            public position(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
            public close(): void;
            public read(param0: java.nio.ByteBuffer): number;
            public position(): number;
            public position(param0: number): org.tensorflow.lite.support.metadata.ByteBufferChannel;
            public constructor(param0: java.nio.ByteBuffer);
            public truncate(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
            public isOpen(): boolean;
            public size(): number;
            public truncate(param0: number): org.tensorflow.lite.support.metadata.ByteBufferChannel;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class MetadataExtractor {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.MetadataExtractor>;
            public getInputTensorShape(param0: number): androidNative.Array<number>;
            public getOutputTensorQuantizationParams(
              param0: number
            ): org.tensorflow.lite.support.metadata.MetadataExtractor.QuantizationParams;
            public getModelMetadata(): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
            public getOutputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
            public getInputTensorCount(): number;
            public getOutputTensorShape(param0: number): androidNative.Array<number>;
            public hasMetadata(): boolean;
            public constructor(param0: java.nio.ByteBuffer);
            public getOutputTensorCount(): number;
            public getInputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
            public getInputTensorType(param0: number): number;
            public getInputTensorQuantizationParams(
              param0: number
            ): org.tensorflow.lite.support.metadata.MetadataExtractor.QuantizationParams;
            public getOutputTensorType(param0: number): number;
            public getAssociatedFile(param0: string): java.io.InputStream;
            public isMinimumParserVersionSatisfied(): boolean;
            public getAssociatedFileNames(): java.util.Set<string>;
          }
          export module MetadataExtractor {
            export class QuantizationParams {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.MetadataExtractor.QuantizationParams>;
              public getScale(): number;
              public constructor(param0: number, param1: number);
              public getZeroPoint(): number;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class MetadataParser {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.MetadataParser>;
            public static VERSION: string;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class ModelInfo {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ModelInfo>;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class ModelMetadataInfo {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ModelMetadataInfo>;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class Preconditions {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.Preconditions>;
            public static checkNotNull(param0: any): any;
            public static checkArgument(param0: boolean, param1: any): void;
            public static checkNotEmpty(param0: string): string;
            public static checkArgument(param0: boolean): void;
            public static checkNotNull(param0: any, param1: any): any;
            public static checkNotEmpty(param0: string, param1: any): string;
            public static checkElementIndex(param0: number, param1: number): number;
            public static checkElementIndex(param0: number, param1: number, param2: string): number;
            public static checkState(param0: boolean): void;
            public static checkState(param0: boolean, param1: any): void;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class SeekableByteChannelCompat {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.SeekableByteChannelCompat>;
            /**
             * Constructs a new instance of the org.tensorflow.lite.support.metadata.SeekableByteChannelCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              read(param0: java.nio.ByteBuffer): number;
              write(param0: java.nio.ByteBuffer): number;
              position(): number;
              position(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
              size(): number;
              truncate(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
            });
            public constructor();
            public write(param0: java.nio.ByteBuffer): number;
            public position(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
            public read(param0: java.nio.ByteBuffer): number;
            public position(): number;
            public truncate(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
            public size(): number;
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export class ZipFile {
            public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile>;
            public close(): void;
            public static createFrom(
              param0: org.tensorflow.lite.support.metadata.ByteBufferChannel
            ): org.tensorflow.lite.support.metadata.ZipFile;
            public getRawInputStream(param0: string): java.io.InputStream;
            public getFileNames(): java.util.Set<string>;
          }
          export module ZipFile {
            export class ZipConstants {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile.ZipConstants>;
            }
            export class ZipEntry {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile.ZipEntry>;
              public getSize(): number;
              public getDataOffset(): number;
              public getName(): string;
              public setDataOffset(param0: number): void;
              public setSize(param0: number): void;
              public setName(param0: string): void;
              public setLocalHeaderOffset(param0: number): void;
              public getLocalHeaderOffset(): number;
            }
            export class ZipParser {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile.ZipParser>;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class AssociatedFile {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AssociatedFile>;
              public static ValidateVersion(): void;
              public nameAsByteBuffer(): java.nio.ByteBuffer;
              public static createAssociatedFile(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number,
                param3: number,
                param4: number,
                param5: number
              ): number;
              public locale(): string;
              public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.AssociatedFileT
              ): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFileT): void;
              public static addLocale(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public versionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public name(): string;
              public static addVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public constructor();
              public description(): string;
              public version(): string;
              public versionAsByteBuffer(): java.nio.ByteBuffer;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public localeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public unpack(): org.tensorflow.lite.support.metadata.schema.AssociatedFileT;
              public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static startAssociatedFile(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public localeAsByteBuffer(): java.nio.ByteBuffer;
              public static getRootAsAssociatedFile(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public static getRootAsAssociatedFile(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.AssociatedFile
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public type(): number;
              public descriptionAsByteBuffer(): java.nio.ByteBuffer;
              public static endAssociatedFile(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
            }
            export module AssociatedFile {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector>;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
                public constructor();
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class AssociatedFileT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public constructor();
              public setVersion(param0: string): void;
              public getType(): number;
              public setLocale(param0: string): void;
              public getName(): string;
              public getLocale(): string;
              public setDescription(param0: string): void;
              public setName(param0: string): void;
              public getDescription(): string;
              public setType(param0: number): void;
              public getVersion(): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class AssociatedFileType {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AssociatedFileType>;
              public static UNKNOWN: number;
              public static DESCRIPTIONS: number;
              public static TENSOR_AXIS_LABELS: number;
              public static TENSOR_VALUE_LABELS: number;
              public static TENSOR_AXIS_SCORE_CALIBRATION: number;
              public static VOCABULARY: number;
              public static SCANN_INDEX_FILE: number;
              public static names: androidNative.Array<string>;
              public static name(param0: number): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class AudioProperties {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AudioProperties>;
              public constructor();
              public static ValidateVersion(): void;
              public static startAudioProperties(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static addSampleRate(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public channels(): number;
              public unpack(): org.tensorflow.lite.support.metadata.schema.AudioPropertiesT;
              public static getRootAsAudioProperties(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.AudioProperties
              ): org.tensorflow.lite.support.metadata.schema.AudioProperties;
              public static createAudioProperties(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.AudioPropertiesT): void;
              public sampleRate(): number;
              public static getRootAsAudioProperties(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.AudioProperties;
              public static endAudioProperties(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.AudioPropertiesT
              ): number;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.AudioProperties;
              public static addChannels(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
            }
            export module AudioProperties {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AudioProperties.Vector>;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.AudioProperties,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.AudioProperties;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.AudioProperties;
                public constructor();
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.AudioProperties.Vector;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class AudioPropertiesT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AudioPropertiesT>;
              public constructor();
              public setSampleRate(param0: number): void;
              public setChannels(param0: number): void;
              public getChannels(): number;
              public getSampleRate(): number;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class BertTokenizerOptions {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions>;
              public constructor();
              public static ValidateVersion(): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static endBertTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public vocabFile(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public static addVocabFile(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static startBertTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.BertTokenizerOptionsT): void;
              public vocabFileVector(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public vocabFile(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public vocabFileLength(): number;
              public static createVocabFileVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public static createBertTokenizerOptions(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): number;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.BertTokenizerOptionsT
              ): number;
              public static getRootAsBertTokenizerOptions(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
              public unpack(): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptionsT;
              public static getRootAsBertTokenizerOptions(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions
              ): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
              public vocabFileVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public static startVocabFileVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
            }
            export module BertTokenizerOptions {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions.Vector>;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions.Vector;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class BertTokenizerOptionsT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BertTokenizerOptionsT>;
              public constructor();
              public getVocabFile(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public setVocabFile(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class BoundingBoxProperties {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties>;
              public static ValidateVersion(): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.BoundingBoxPropertiesT;
              public indexInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static startBoundingBoxProperties(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public static getRootAsBoundingBoxProperties(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties
              ): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
              public index(param0: number): number;
              public indexVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
              public static endBoundingBoxProperties(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static startIndexVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static getRootAsBoundingBoxProperties(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
              public static addCoordinateType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static addIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.BoundingBoxPropertiesT
              ): number;
              public indexVector(): com.google.flatbuffers.IntVector;
              public constructor();
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
              public indexLength(): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.BoundingBoxPropertiesT): void;
              public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static createBoundingBoxProperties(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number,
                param3: number
              ): number;
              public coordinateType(): number;
              public type(): number;
              public indexAsByteBuffer(): java.nio.ByteBuffer;
              public static createIndexVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
            }
            export module BoundingBoxProperties {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties.Vector>;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
                public constructor();
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties.Vector;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class BoundingBoxPropertiesT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BoundingBoxPropertiesT>;
              public constructor();
              public getType(): number;
              public setCoordinateType(param0: number): void;
              public getCoordinateType(): number;
              public getIndex(): androidNative.Array<number>;
              public setIndex(param0: androidNative.Array<number>): void;
              public setType(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class BoundingBoxType {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BoundingBoxType>;
              public static UNKNOWN: number;
              public static BOUNDARIES: number;
              public static UPPER_LEFT: number;
              public static CENTER: number;
              public static names: androidNative.Array<string>;
              public static name(param0: number): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ColorSpaceType {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ColorSpaceType>;
              public static UNKNOWN: number;
              public static RGB: number;
              public static GRAYSCALE: number;
              public static names: androidNative.Array<string>;
              public static name(param0: number): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class Content {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Content>;
              public constructor();
              public static ValidateVersion(): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static getRootAsContent(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.Content
              ): org.tensorflow.lite.support.metadata.schema.Content;
              public static createContent(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number,
                param3: number
              ): number;
              public range(): org.tensorflow.lite.support.metadata.schema.ValueRange;
              public contentProperties(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
              public static addContentProperties(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static startContent(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ContentT
              ): number;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ContentT;
              public static addContentPropertiesType(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public range(
                param0: org.tensorflow.lite.support.metadata.schema.ValueRange
              ): org.tensorflow.lite.support.metadata.schema.ValueRange;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.Content;
              public static endContent(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static getRootAsContent(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.Content;
              public contentPropertiesType(): number;
              public static addRange(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ContentT): void;
            }
            export module Content {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Content.Vector>;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.Content;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.Content,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.Content;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.Content.Vector;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ContentProperties {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ContentProperties>;
              public static NONE: number;
              public static FeatureProperties: number;
              public static ImageProperties: number;
              public static BoundingBoxProperties: number;
              public static AudioProperties: number;
              public static names: androidNative.Array<string>;
              public static name(param0: number): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ContentPropertiesUnion {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ContentPropertiesUnion>;
              public getValue(): any;
              public constructor();
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ContentPropertiesUnion
              ): number;
              public getType(): number;
              public setValue(param0: any): void;
              public asFeatureProperties(): org.tensorflow.lite.support.metadata.schema.FeaturePropertiesT;
              public asImageProperties(): org.tensorflow.lite.support.metadata.schema.ImagePropertiesT;
              public asAudioProperties(): org.tensorflow.lite.support.metadata.schema.AudioPropertiesT;
              public asBoundingBoxProperties(): org.tensorflow.lite.support.metadata.schema.BoundingBoxPropertiesT;
              public setType(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ContentT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ContentT>;
              public constructor();
              public getRange(): org.tensorflow.lite.support.metadata.schema.ValueRangeT;
              public setRange(param0: org.tensorflow.lite.support.metadata.schema.ValueRangeT): void;
              public getContentProperties(): org.tensorflow.lite.support.metadata.schema.ContentPropertiesUnion;
              public setContentProperties(
                param0: org.tensorflow.lite.support.metadata.schema.ContentPropertiesUnion
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class CoordinateType {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.CoordinateType>;
              public static RATIO: number;
              public static PIXEL: number;
              public static names: androidNative.Array<string>;
              public static name(param0: number): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class FeatureProperties {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.FeatureProperties>;
              public constructor();
              public static ValidateVersion(): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.FeaturePropertiesT;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.FeaturePropertiesT): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
              public static startFeatureProperties(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public static getRootAsFeatureProperties(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
              public static getRootAsFeatureProperties(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.FeatureProperties
              ): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
              public static endFeatureProperties(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.FeaturePropertiesT
              ): number;
            }
            export module FeatureProperties {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.FeatureProperties.Vector>;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.FeatureProperties,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
                public constructor();
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.FeatureProperties.Vector;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class FeaturePropertiesT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.FeaturePropertiesT>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ImageProperties {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageProperties>;
              public constructor();
              public static ValidateVersion(): void;
              public static addColorSpace(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static getRootAsImageProperties(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.ImageProperties
              ): org.tensorflow.lite.support.metadata.schema.ImageProperties;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ImagePropertiesT
              ): number;
              public static createImageProperties(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public defaultSize(): org.tensorflow.lite.support.metadata.schema.ImageSize;
              public static endImageProperties(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ImagePropertiesT;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ImagePropertiesT): void;
              public defaultSize(
                param0: org.tensorflow.lite.support.metadata.schema.ImageSize
              ): org.tensorflow.lite.support.metadata.schema.ImageSize;
              public static startImageProperties(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public static addDefaultSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static getRootAsImageProperties(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ImageProperties;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ImageProperties;
              public colorSpace(): number;
            }
            export module ImageProperties {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageProperties.Vector>;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.ImageProperties;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.ImageProperties,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.ImageProperties;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.ImageProperties.Vector;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ImagePropertiesT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImagePropertiesT>;
              public getDefaultSize(): org.tensorflow.lite.support.metadata.schema.ImageSizeT;
              public setDefaultSize(param0: org.tensorflow.lite.support.metadata.schema.ImageSizeT): void;
              public constructor();
              public getColorSpace(): number;
              public setColorSpace(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ImageSize {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageSize>;
              public constructor();
              public static ValidateVersion(): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ImageSizeT): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ImageSizeT;
              public static endImageSize(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static addWidth(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static createImageSize(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public height(): number;
              public static getRootAsImageSize(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.ImageSize
              ): org.tensorflow.lite.support.metadata.schema.ImageSize;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ImageSizeT
              ): number;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ImageSize;
              public static addHeight(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static startImageSize(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public width(): number;
              public static getRootAsImageSize(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ImageSize;
            }
            export module ImageSize {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageSize.Vector>;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.ImageSize;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.ImageSize.Vector;
                public constructor();
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.ImageSize,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.ImageSize;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ImageSizeT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageSizeT>;
              public getWidth(): number;
              public getHeight(): number;
              public constructor();
              public setWidth(param0: number): void;
              public setHeight(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ModelMetadata {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ModelMetadata>;
              public associatedFiles(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public subgraphMetadataVector(): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector;
              public nameAsByteBuffer(): java.nio.ByteBuffer;
              public subgraphMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
              public subgraphMetadataLength(): number;
              public static startAssociatedFilesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public authorAsByteBuffer(): java.nio.ByteBuffer;
              public static addSubgraphMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static addMinParserVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static finishSizePrefixedModelMetadataBuffer(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ModelMetadataT;
              public static createModelMetadata(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number,
                param3: number,
                param4: number,
                param5: number,
                param6: number,
                param7: number,
                param8: number
              ): number;
              public versionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public name(): string;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ModelMetadataT
              ): number;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
              public associatedFiles(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ModelMetadataT): void;
              public static getRootAsModelMetadata(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
              public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public subgraphMetadataVector(
                param0: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector
              ): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector;
              public authorInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public associatedFilesVector(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public associatedFilesLength(): number;
              public descriptionAsByteBuffer(): java.nio.ByteBuffer;
              public static ValidateVersion(): void;
              public associatedFilesVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public static createAssociatedFilesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static ModelMetadataBufferHasIdentifier(param0: java.nio.ByteBuffer): boolean;
              public license(): string;
              public static addVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public constructor();
              public description(): string;
              public version(): string;
              public versionAsByteBuffer(): java.nio.ByteBuffer;
              public licenseInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public licenseAsByteBuffer(): java.nio.ByteBuffer;
              public minParserVersionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static addAssociatedFiles(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public subgraphMetadata(
                param0: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
              public author(): string;
              public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static addLicense(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static startSubgraphMetadataVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static finishModelMetadataBuffer(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static startModelMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public minParserVersionAsByteBuffer(): java.nio.ByteBuffer;
              public static endModelMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static getRootAsModelMetadata(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.ModelMetadata
              ): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
              public minParserVersion(): string;
              public static createSubgraphMetadataVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public static addAuthor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
            }
            export module ModelMetadata {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ModelMetadata.Vector>;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.ModelMetadata,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
                public constructor();
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.ModelMetadata.Vector;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ModelMetadataT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ModelMetadataT>;
              public constructor();
              public setAuthor(param0: string): void;
              public getAuthor(): string;
              public setLicense(param0: string): void;
              public getSubgraphMetadata(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.SubGraphMetadataT>;
              public setSubgraphMetadata(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.SubGraphMetadataT>
              ): void;
              public setName(param0: string): void;
              public getMinParserVersion(): string;
              public getDescription(): string;
              public static deserializeFromBinary(
                param0: androidNative.Array<number>
              ): org.tensorflow.lite.support.metadata.schema.ModelMetadataT;
              public setVersion(param0: string): void;
              public getLicense(): string;
              public getAssociatedFiles(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public getName(): string;
              public setAssociatedFiles(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>
              ): void;
              public setMinParserVersion(param0: string): void;
              public setDescription(param0: string): void;
              public serializeToBinary(): androidNative.Array<number>;
              public getVersion(): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class NormalizationOptions {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.NormalizationOptions>;
              public static ValidateVersion(): void;
              public static createStdVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public meanLength(): number;
              public stdLength(): number;
              public meanVector(): com.google.flatbuffers.FloatVector;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.NormalizationOptionsT): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.NormalizationOptionsT;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
              public mean(param0: number): number;
              public stdAsByteBuffer(): java.nio.ByteBuffer;
              public stdVector(): com.google.flatbuffers.FloatVector;
              public static startNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public constructor();
              public static startMeanVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.NormalizationOptionsT
              ): number;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public stdVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
              public std(param0: number): number;
              public meanVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
              public static getRootAsNormalizationOptions(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
              public static createNormalizationOptions(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public static createMeanVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public meanAsByteBuffer(): java.nio.ByteBuffer;
              public stdInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static addMean(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static startStdVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public meanInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static addStd(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static getRootAsNormalizationOptions(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.NormalizationOptions
              ): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
              public static endNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
            }
            export module NormalizationOptions {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.NormalizationOptions.Vector>;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.NormalizationOptions.Vector;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.NormalizationOptions,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
                public constructor();
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class NormalizationOptionsT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.NormalizationOptionsT>;
              public constructor();
              public getMean(): androidNative.Array<number>;
              public setMean(param0: androidNative.Array<number>): void;
              public getStd(): androidNative.Array<number>;
              public setStd(param0: androidNative.Array<number>): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ProcessUnit {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnit>;
              public constructor();
              public static ValidateVersion(): void;
              public static getRootAsProcessUnit(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.ProcessUnit
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public options(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
              public static startProcessUnit(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnitT): void;
              public static getRootAsProcessUnit(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public static createProcessUnit(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public static addOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public optionsType(): number;
              public static endProcessUnit(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ProcessUnitT
              ): number;
              public static addOptionsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ProcessUnitT;
            }
            export module ProcessUnit {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector>;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
                public constructor();
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ProcessUnitOptions {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnitOptions>;
              public static NONE: number;
              public static NormalizationOptions: number;
              public static ScoreCalibrationOptions: number;
              public static ScoreThresholdingOptions: number;
              public static BertTokenizerOptions: number;
              public static SentencePieceTokenizerOptions: number;
              public static RegexTokenizerOptions: number;
              public static names: androidNative.Array<string>;
              public static name(param0: number): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ProcessUnitOptionsUnion {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnitOptionsUnion>;
              public getValue(): any;
              public constructor();
              public asScoreCalibrationOptions(): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptionsT;
              public getType(): number;
              public asScoreThresholdingOptions(): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptionsT;
              public asNormalizationOptions(): org.tensorflow.lite.support.metadata.schema.NormalizationOptionsT;
              public asBertTokenizerOptions(): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptionsT;
              public setValue(param0: any): void;
              public asSentencePieceTokenizerOptions(): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptionsT;
              public asRegexTokenizerOptions(): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptionsT;
              public setType(param0: number): void;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ProcessUnitOptionsUnion
              ): number;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ProcessUnitT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnitT>;
              public constructor();
              public setOptions(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnitOptionsUnion): void;
              public getOptions(): org.tensorflow.lite.support.metadata.schema.ProcessUnitOptionsUnion;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class RegexTokenizerOptions {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions>;
              public constructor();
              public static ValidateVersion(): void;
              public static getRootAsRegexTokenizerOptions(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions
              ): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
              public static startRegexTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public static getRootAsRegexTokenizerOptions(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static addDelimRegexPattern(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public vocabFile(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public static addVocabFile(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptionsT;
              public static endRegexTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public vocabFileVector(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public vocabFile(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public delimRegexPatternInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public vocabFileLength(): number;
              public static createVocabFileVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public delimRegexPattern(): string;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptionsT
              ): number;
              public delimRegexPatternAsByteBuffer(): java.nio.ByteBuffer;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptionsT): void;
              public static createRegexTokenizerOptions(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public vocabFileVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public static startVocabFileVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
            }
            export module RegexTokenizerOptions {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions.Vector>;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions.Vector;
                public constructor();
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class RegexTokenizerOptionsT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptionsT>;
              public constructor();
              public getVocabFile(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public getDelimRegexPattern(): string;
              public setVocabFile(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>
              ): void;
              public setDelimRegexPattern(param0: string): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ScoreCalibrationOptions {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions>;
              public constructor();
              public static ValidateVersion(): void;
              public defaultScore(): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptionsT): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptionsT
              ): number;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
              public static getRootAsScoreCalibrationOptions(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
              public static addScoreTransformation(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static getRootAsScoreCalibrationOptions(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions
              ): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
              public static startScoreCalibrationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptionsT;
              public static createScoreCalibrationOptions(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public static addDefaultScore(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static endScoreCalibrationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public scoreTransformation(): number;
            }
            export module ScoreCalibrationOptions {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions.Vector>;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions.Vector;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ScoreCalibrationOptionsT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptionsT>;
              public constructor();
              public setDefaultScore(param0: number): void;
              public getScoreTransformation(): number;
              public getDefaultScore(): number;
              public setScoreTransformation(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ScoreThresholdingOptions {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions>;
              public constructor();
              public static ValidateVersion(): void;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static addGlobalScoreThreshold(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptionsT): void;
              public static endScoreThresholdingOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptionsT
              ): number;
              public static startScoreThresholdingOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public globalScoreThreshold(): number;
              public static getRootAsScoreThresholdingOptions(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
              public static getRootAsScoreThresholdingOptions(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions
              ): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptionsT;
              public static createScoreThresholdingOptions(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): number;
            }
            export module ScoreThresholdingOptions {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions.Vector>;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions.Vector;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
                public constructor();
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ScoreThresholdingOptionsT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptionsT>;
              public constructor();
              public getGlobalScoreThreshold(): number;
              public setGlobalScoreThreshold(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ScoreTransformationType {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreTransformationType>;
              public static IDENTITY: number;
              public static LOG: number;
              public static INVERSE_LOGISTIC: number;
              public static names: androidNative.Array<string>;
              public static name(param0: number): string;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class SentencePieceTokenizerOptions {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions>;
              public static ValidateVersion(): void;
              public sentencePieceModel(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
              public static addVocabFile(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static getRootAsSentencePieceTokenizerOptions(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions
              ): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
              public static endSentencePieceTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptionsT
              ): number;
              public vocabFile(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public static createVocabFileVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public sentencePieceModelLength(): number;
              public static createSentencePieceModelVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptionsT): void;
              public static startSentencePieceModelVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public sentencePieceModel(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public vocabFileVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public constructor();
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static createSentencePieceTokenizerOptions(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public sentencePieceModelVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public vocabFile(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public vocabFileVector(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public static getRootAsSentencePieceTokenizerOptions(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
              public vocabFileLength(): number;
              public sentencePieceModelVector(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public unpack(): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptionsT;
              public static addSentencePieceModel(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static startSentencePieceTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public static startVocabFileVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
            }
            export module SentencePieceTokenizerOptions {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions.Vector>;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions.Vector;
                public constructor();
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class SentencePieceTokenizerOptionsT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptionsT>;
              public getSentencePieceModel(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public constructor();
              public setSentencePieceModel(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>
              ): void;
              public getVocabFile(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public setVocabFile(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class Stats {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Stats>;
              public static ValidateVersion(): void;
              public static getRootAsStats(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.Stats
              ): org.tensorflow.lite.support.metadata.schema.Stats;
              public minVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
              public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.StatsT;
              public static getRootAsStats(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.Stats;
              public maxInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public maxAsByteBuffer(): java.nio.ByteBuffer;
              public minLength(): number;
              public static startStats(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public maxLength(): number;
              public max(param0: number): number;
              public static endStats(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.StatsT): void;
              public constructor();
              public static createMaxVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.Stats;
              public static startMinVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public minAsByteBuffer(): java.nio.ByteBuffer;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.StatsT
              ): number;
              public static createStats(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public minInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public maxVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
              public maxVector(): com.google.flatbuffers.FloatVector;
              public static createMinVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public minVector(): com.google.flatbuffers.FloatVector;
              public static startMaxVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public min(param0: number): number;
            }
            export module Stats {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Stats.Vector>;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.Stats.Vector;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.Stats;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.Stats,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.Stats;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class StatsT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.StatsT>;
              public setMin(param0: androidNative.Array<number>): void;
              public constructor();
              public getMax(): androidNative.Array<number>;
              public setMax(param0: androidNative.Array<number>): void;
              public getMin(): androidNative.Array<number>;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class SubGraphMetadata {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SubGraphMetadata>;
              public associatedFiles(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public static addOutputProcessUnits(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public nameAsByteBuffer(): java.nio.ByteBuffer;
              public static startAssociatedFilesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public outputTensorMetadataLength(): number;
              public static createInputTensorGroupsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public outputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
              public outputTensorGroups(
                param0: org.tensorflow.lite.support.metadata.schema.TensorGroup,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              public inputProcessUnits(
                param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public static getRootAsSubGraphMetadata(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
              public inputTensorGroupsVector(
                param0: org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector
              ): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
              public inputProcessUnitsLength(): number;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.SubGraphMetadataT
              ): number;
              public outputTensorGroupsVector(
                param0: org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector
              ): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
              public static startOutputProcessUnitsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public name(): string;
              public outputTensorMetadataVector(): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public inputTensorMetadata(
                param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
              public static createInputTensorMetadataVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public associatedFiles(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public outputTensorGroups(param0: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              public inputTensorMetadataLength(): number;
              public inputProcessUnits(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public outputTensorMetadataVector(
                param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector
              ): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
              public inputProcessUnitsVector(
                param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
              public static createOutputTensorMetadataVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.SubGraphMetadataT): void;
              public static startInputTensorGroupsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public associatedFilesVector(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public associatedFilesLength(): number;
              public descriptionAsByteBuffer(): java.nio.ByteBuffer;
              public static startInputProcessUnitsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static ValidateVersion(): void;
              public static addInputTensorMetadata(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public outputProcessUnitsLength(): number;
              public static startSubGraphMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public associatedFilesVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public outputProcessUnits(
                param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public static createSubGraphMetadata(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number,
                param3: number,
                param4: number,
                param5: number,
                param6: number,
                param7: number,
                param8: number,
                param9: number
              ): number;
              public static getRootAsSubGraphMetadata(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata
              ): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
              public inputTensorMetadataVector(): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
              public static createAssociatedFilesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static startInputTensorMetadataVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public outputProcessUnitsVector(): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
              public static createOutputProcessUnitsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static startOutputTensorMetadataVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public inputTensorGroups(
                param0: org.tensorflow.lite.support.metadata.schema.TensorGroup,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              public static addInputProcessUnits(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public inputTensorGroupsLength(): number;
              public static startOutputTensorGroupsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public outputProcessUnitsVector(
                param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
              public static addOutputTensorMetadata(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static createOutputTensorGroupsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
              public constructor();
              public description(): string;
              public static endSubGraphMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public inputProcessUnitsVector(): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
              public static addAssociatedFiles(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static addInputTensorGroups(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.SubGraphMetadataT;
              public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public outputTensorGroupsVector(): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
              public outputTensorGroupsLength(): number;
              public inputTensorMetadataVector(
                param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector
              ): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
              public static addOutputTensorGroups(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public inputTensorGroups(param0: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              public outputTensorMetadata(
                param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
              public outputProcessUnits(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public inputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
              public inputTensorGroupsVector(): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
              public static createInputProcessUnitsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
            }
            export module SubGraphMetadata {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector>;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
                public constructor();
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class SubGraphMetadataT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SubGraphMetadataT>;
              public constructor();
              public getInputTensorGroups(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorGroupT>;
              public setOutputTensorMetadata(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorMetadataT>
              ): void;
              public setInputProcessUnits(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.ProcessUnitT>
              ): void;
              public getOutputTensorGroups(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorGroupT>;
              public setName(param0: string): void;
              public setOutputTensorGroups(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorGroupT>
              ): void;
              public getDescription(): string;
              public getInputProcessUnits(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.ProcessUnitT>;
              public setInputTensorGroups(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorGroupT>
              ): void;
              public getAssociatedFiles(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public getOutputProcessUnits(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.ProcessUnitT>;
              public getName(): string;
              public getInputTensorMetadata(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorMetadataT>;
              public setInputTensorMetadata(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorMetadataT>
              ): void;
              public setAssociatedFiles(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>
              ): void;
              public setDescription(param0: string): void;
              public getOutputTensorMetadata(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.TensorMetadataT>;
              public setOutputProcessUnits(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.ProcessUnitT>
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class TensorGroup {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorGroup>;
              public constructor();
              public static ValidateVersion(): void;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.TensorGroupT
              ): number;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public tensorNamesVector(): com.google.flatbuffers.StringVector;
              public nameAsByteBuffer(): java.nio.ByteBuffer;
              public tensorNamesLength(): number;
              public static startTensorNamesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static startTensorGroup(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public tensorNames(param0: number): string;
              public static addTensorNames(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static createTensorGroup(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public static createTensorNamesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.TensorGroupT): void;
              public unpack(): org.tensorflow.lite.support.metadata.schema.TensorGroupT;
              public static getRootAsTensorGroup(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              public name(): string;
              public static getRootAsTensorGroup(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.TensorGroup
              ): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              public tensorNamesVector(
                param0: com.google.flatbuffers.StringVector
              ): com.google.flatbuffers.StringVector;
              public static endTensorGroup(param0: com.google.flatbuffers.FlatBufferBuilder): number;
            }
            export module TensorGroup {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector>;
                public constructor();
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.TensorGroup,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.TensorGroup;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class TensorGroupT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorGroupT>;
              public constructor();
              public setTensorNames(param0: androidNative.Array<string>): void;
              public getName(): string;
              public setName(param0: string): void;
              public getTensorNames(): androidNative.Array<string>;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class TensorMetadata {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorMetadata>;
              public associatedFiles(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public nameAsByteBuffer(): java.nio.ByteBuffer;
              public static startAssociatedFilesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public processUnits(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
              public unpack(): org.tensorflow.lite.support.metadata.schema.TensorMetadataT;
              public name(): string;
              public dimensionNames(param0: number): string;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static addStats(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public associatedFiles(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
              public static startDimensionNamesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public dimensionNamesLength(): number;
              public processUnitsVector(
                param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
              public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public content(): org.tensorflow.lite.support.metadata.schema.Content;
              public static startTensorMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public static endTensorMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public static addContent(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static getRootAsTensorMetadata(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
              public dimensionNamesVector(
                param0: com.google.flatbuffers.StringVector
              ): com.google.flatbuffers.StringVector;
              public associatedFilesVector(
                param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector
              ): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public associatedFilesLength(): number;
              public descriptionAsByteBuffer(): java.nio.ByteBuffer;
              public static getRootAsTensorMetadata(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.TensorMetadata
              ): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
              public static ValidateVersion(): void;
              public associatedFilesVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
              public static createDimensionNamesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public processUnitsVector(): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
              public static createAssociatedFilesVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static addProcessUnits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
              public static createProcessUnitsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: androidNative.Array<number>
              ): number;
              public content(
                param0: org.tensorflow.lite.support.metadata.schema.Content
              ): org.tensorflow.lite.support.metadata.schema.Content;
              public static startProcessUnitsVector(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number
              ): void;
              public processUnits(
                param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit,
                param1: number
              ): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
              public static addDimensionNames(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public constructor();
              public description(): string;
              public static addAssociatedFiles(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.TensorMetadataT): void;
              public processUnitsLength(): number;
              public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public stats(): org.tensorflow.lite.support.metadata.schema.Stats;
              public stats(
                param0: org.tensorflow.lite.support.metadata.schema.Stats
              ): org.tensorflow.lite.support.metadata.schema.Stats;
              public dimensionNamesVector(): com.google.flatbuffers.StringVector;
              public static createTensorMetadata(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number,
                param3: number,
                param4: number,
                param5: number,
                param6: number,
                param7: number
              ): number;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.TensorMetadataT
              ): number;
            }
            export module TensorMetadata {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector>;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
                public constructor();
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class TensorMetadataT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorMetadataT>;
              public constructor();
              public setName(param0: string): void;
              public setContent(param0: org.tensorflow.lite.support.metadata.schema.ContentT): void;
              public setDimensionNames(param0: androidNative.Array<string>): void;
              public getDescription(): string;
              public getContent(): org.tensorflow.lite.support.metadata.schema.ContentT;
              public getAssociatedFiles(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>;
              public getName(): string;
              public getStats(): org.tensorflow.lite.support.metadata.schema.StatsT;
              public setAssociatedFiles(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.AssociatedFileT>
              ): void;
              public setDescription(param0: string): void;
              public getDimensionNames(): androidNative.Array<string>;
              public setStats(param0: org.tensorflow.lite.support.metadata.schema.StatsT): void;
              public getProcessUnits(): androidNative.Array<org.tensorflow.lite.support.metadata.schema.ProcessUnitT>;
              public setProcessUnits(
                param0: androidNative.Array<org.tensorflow.lite.support.metadata.schema.ProcessUnitT>
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ValueRange {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ValueRange>;
              public constructor();
              public static ValidateVersion(): void;
              public max(): number;
              public unpack(): org.tensorflow.lite.support.metadata.schema.ValueRangeT;
              public __init(param0: number, param1: java.nio.ByteBuffer): void;
              public static pack(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: org.tensorflow.lite.support.metadata.schema.ValueRangeT
              ): number;
              public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public __assign(
                param0: number,
                param1: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ValueRange;
              public static createValueRange(
                param0: com.google.flatbuffers.FlatBufferBuilder,
                param1: number,
                param2: number
              ): number;
              public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
              public static getRootAsValueRange(
                param0: java.nio.ByteBuffer,
                param1: org.tensorflow.lite.support.metadata.schema.ValueRange
              ): org.tensorflow.lite.support.metadata.schema.ValueRange;
              public static getRootAsValueRange(
                param0: java.nio.ByteBuffer
              ): org.tensorflow.lite.support.metadata.schema.ValueRange;
              public static startValueRange(param0: com.google.flatbuffers.FlatBufferBuilder): void;
              public min(): number;
              public static endValueRange(param0: com.google.flatbuffers.FlatBufferBuilder): number;
              public unpackTo(param0: org.tensorflow.lite.support.metadata.schema.ValueRangeT): void;
            }
            export module ValueRange {
              export class Vector {
                public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ValueRange.Vector>;
                public get(
                  param0: org.tensorflow.lite.support.metadata.schema.ValueRange,
                  param1: number
                ): org.tensorflow.lite.support.metadata.schema.ValueRange;
                public __assign(
                  param0: number,
                  param1: number,
                  param2: java.nio.ByteBuffer
                ): org.tensorflow.lite.support.metadata.schema.ValueRange.Vector;
                public constructor();
                public get(param0: number): org.tensorflow.lite.support.metadata.schema.ValueRange;
              }
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module tensorflow {
    export module lite {
      export module support {
        export module metadata {
          export module schema {
            export class ValueRangeT {
              public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ValueRangeT>;
              public constructor();
              public getMax(): number;
              public setMax(param0: number): void;
              public getMin(): number;
              public setMin(param0: number): void;
            }
          }
        }
      }
    }
  }
}

//Generics information:
