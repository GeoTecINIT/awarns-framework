import { SensorRecordingService } from '../index';

export class NTPSyncedSensorRecordingService implements SensorRecordingService {
  getClass(): java.lang.Class<unknown> {
    return es.uji.geotec.backgroundsensors.service.NTPSyncedSensorRecordingService.class;
  }
}
