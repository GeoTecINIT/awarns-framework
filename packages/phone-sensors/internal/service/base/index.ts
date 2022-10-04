import { SensorRecordingService } from '../index';

export class BaseSensorRecordingService implements SensorRecordingService {
  getClass(): java.lang.Class<unknown> {
    return es.uji.geotec.backgroundsensors.service.BaseSensorRecordingService.class;
  }
}
