export interface SensorRecordingService {
  getClass(): java.lang.Class<unknown>;
}

export class BaseSensorRecordingService implements SensorRecordingService {
  getClass(): java.lang.Class<unknown> {
    return es.uji.geotec.backgroundsensors.service.BaseSensorRecordingService.class;
  }
}

export class NTPSyncedSensorRecordingService implements SensorRecordingService {
  getClass(): java.lang.Class<unknown> {
    return es.uji.geotec.backgroundsensors.service.NTPSyncedSensorRecordingService.class;
  }
}
