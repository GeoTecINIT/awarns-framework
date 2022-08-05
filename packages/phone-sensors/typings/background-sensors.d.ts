/// <reference path="android-declarations.d.ts"/>

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export class BuildConfig {
          public static class: java.lang.Class<es.uji.geotec.backgroundsensors.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public constructor();
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace collection {
          export class BaseCollectorManager extends es.uji.geotec.backgroundsensors.collection.CollectorManager {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.collection.BaseCollectorManager>;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: es.uji.geotec.backgroundsensors.time.TimeProvider
            );
            public constructor(param0: globalAndroid.content.Context);
            public startCollectingFrom(
              param0: es.uji.geotec.backgroundsensors.collection.CollectionConfiguration,
              param1: es.uji.geotec.backgroundsensors.record.callback.RecordCallback<any>
            ): boolean;
            public ensureStopCollecting(): void;
            public stopCollectingFrom(param0: es.uji.geotec.backgroundsensors.sensor.Sensor): void;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace collection {
          export class CollectionConfiguration {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.collection.CollectionConfiguration>;
            public getSensor(): es.uji.geotec.backgroundsensors.sensor.Sensor;
            public getSensorDelay(): number;
            public getBatchSize(): number;
            public constructor(param0: es.uji.geotec.backgroundsensors.sensor.Sensor, param1: number, param2: number);
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace collection {
          export abstract class CollectorManager {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.collection.CollectorManager>;
            public context: globalAndroid.content.Context;
            public timeProvider: es.uji.geotec.backgroundsensors.time.TimeProvider;
            public listeners: java.util.HashMap<
              es.uji.geotec.backgroundsensors.sensor.Sensor,
              globalAndroid.hardware.SensorEventListener
            >;
            public sensorManager: es.uji.geotec.backgroundsensors.sensor.SensorManager;
            public androidSensorManager: globalAndroid.hardware.SensorManager;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: es.uji.geotec.backgroundsensors.time.TimeProvider
            );
            public startCollectingFrom(
              param0: es.uji.geotec.backgroundsensors.collection.CollectionConfiguration,
              param1: es.uji.geotec.backgroundsensors.record.callback.RecordCallback<any>
            ): boolean;
            public ensureStopCollecting(): void;
            public getAndroidSensor(
              param0: es.uji.geotec.backgroundsensors.sensor.Sensor
            ): globalAndroid.hardware.Sensor;
            public stopCollectingFrom(param0: es.uji.geotec.backgroundsensors.sensor.Sensor): void;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace listener {
          export class TriAxialSensorListener {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.listener.TriAxialSensorListener>;
            public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
            public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
            public constructor(
              param0: es.uji.geotec.backgroundsensors.sensor.Sensor,
              param1: es.uji.geotec.backgroundsensors.record.accumulator.RecordAccumulator<any>,
              param2: es.uji.geotec.backgroundsensors.time.TimeProvider
            );
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace notification {
          export class NotificationProvider {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.notification.NotificationProvider>;
            public constructor(param0: globalAndroid.content.Context);
            public getNotificationForRecordingService(): globalAndroid.app.Notification;
            public getRecordingServiceNotificationId(): number;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace record {
          export class Record {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.record.Record>;
            public getSensor(): es.uji.geotec.backgroundsensors.sensor.Sensor;
            public getTimestamp(): number;
            public constructor(param0: es.uji.geotec.backgroundsensors.sensor.Sensor, param1: number);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace record {
          export class TriAxialRecord extends es.uji.geotec.backgroundsensors.record.Record {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.record.TriAxialRecord>;
            public getX(): number;
            public constructor(param0: es.uji.geotec.backgroundsensors.sensor.Sensor, param1: number);
            public getY(): number;
            public getZ(): number;
            public constructor(
              param0: es.uji.geotec.backgroundsensors.sensor.Sensor,
              param1: number,
              param2: number,
              param3: number,
              param4: number
            );
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace record {
          export namespace accumulator {
            export class RecordAccumulator<T> extends java.lang.Object {
              public static class: java.lang.Class<
                es.uji.geotec.backgroundsensors.record.accumulator.RecordAccumulator<any>
              >;
              public constructor(
                param0: es.uji.geotec.backgroundsensors.record.callback.RecordCallback<T>,
                param1: number
              );
              public accumulateRecord(param0: T): void;
            }
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace record {
          export namespace callback {
            export class RecordCallback<T> extends java.lang.Object {
              public static class: java.lang.Class<es.uji.geotec.backgroundsensors.record.callback.RecordCallback<any>>;
              /**
               * Constructs a new instance of the es.uji.geotec.backgroundsensors.record.callback.RecordCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRecordsCollected(param0: java.util.List<T>): void });
              public constructor();
              public onRecordsCollected(param0: java.util.List<T>): void;
            }
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace sensor {
          export class BaseSensor extends es.uji.geotec.backgroundsensors.sensor.Sensor {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.sensor.BaseSensor>;
            public static ACCELEROMETER: es.uji.geotec.backgroundsensors.sensor.BaseSensor;
            public static GYROSCOPE: es.uji.geotec.backgroundsensors.sensor.BaseSensor;
            public static MAGNETOMETER: es.uji.geotec.backgroundsensors.sensor.BaseSensor;
            public static valueOf(param0: string): es.uji.geotec.backgroundsensors.sensor.BaseSensor;
            public getSystemFeature(): string;
            public static values(): androidNative.Array<es.uji.geotec.backgroundsensors.sensor.BaseSensor>;
            public getType(): number;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace sensor {
          export class Sensor {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.sensor.Sensor>;
            /**
             * Constructs a new instance of the es.uji.geotec.backgroundsensors.sensor.Sensor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getType(): number; getSystemFeature(): string });
            public constructor();
            public getSystemFeature(): string;
            public getType(): number;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace sensor {
          export class SensorManager {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.sensor.SensorManager>;
            public isSensorAvailable(param0: es.uji.geotec.backgroundsensors.sensor.Sensor): boolean;
            public constructor(param0: globalAndroid.content.Context);
            public availableSensors(
              param0: androidNative.Array<es.uji.geotec.backgroundsensors.sensor.Sensor>
            ): java.util.List<es.uji.geotec.backgroundsensors.sensor.Sensor>;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace service {
          export class BaseSensorRecordingService extends es.uji.geotec.backgroundsensors.service
            .SensorRecordingService {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.service.BaseSensorRecordingService>;
            public constructor();
            public getCollectorManager(): es.uji.geotec.backgroundsensors.collection.CollectorManager;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace service {
          export abstract class SensorRecordingService {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.service.SensorRecordingService>;
            public constructor();
            public onDestroy(): void;
            public onCreate(): void;
            public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
            public getCollectorManager(): es.uji.geotec.backgroundsensors.collection.CollectorManager;
            public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
          }
          export namespace SensorRecordingService {
            export class SensorRecordingBinder {
              public static class: java.lang.Class<es.uji.geotec.backgroundsensors.service.SensorRecordingService.SensorRecordingBinder>;
              public startRecordingFor(
                param0: es.uji.geotec.backgroundsensors.collection.CollectionConfiguration,
                param1: es.uji.geotec.backgroundsensors.record.callback.RecordCallback<any>
              ): void;
              public constructor(param0: es.uji.geotec.backgroundsensors.service.SensorRecordingService);
              public stopRecordingFor(param0: es.uji.geotec.backgroundsensors.sensor.Sensor): void;
            }
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace service {
          export namespace manager {
            export class ServiceManager {
              public static class: java.lang.Class<es.uji.geotec.backgroundsensors.service.manager.ServiceManager>;
              public startCollection(
                param0: es.uji.geotec.backgroundsensors.collection.CollectionConfiguration,
                param1: es.uji.geotec.backgroundsensors.record.callback.RecordCallback<any>
              ): void;
              public constructor(param0: globalAndroid.content.Context, param1: java.lang.Class<any>);
              public stopCollection(param0: es.uji.geotec.backgroundsensors.sensor.Sensor): void;
            }
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace time {
          export class DefaultTimeProvider extends es.uji.geotec.backgroundsensors.time.TimeProvider {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.time.DefaultTimeProvider>;
            public constructor();
            public getTimestamp(): number;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace backgroundsensors {
        export namespace time {
          export abstract class TimeProvider {
            public static class: java.lang.Class<es.uji.geotec.backgroundsensors.time.TimeProvider>;
            public constructor();
            public getTimestamp(): number;
            public getTimestampFromElapsedNanos(param0: number): number;
          }
        }
      }
    }
  }
}

//Generics information:
//es.uji.geotec.backgroundsensors.record.accumulator.RecordAccumulator:1
//es.uji.geotec.backgroundsensors.record.callback.RecordCallback:1
