import { PluginLoader } from '@awarns/core/common';
import SensorRecordingService = es.uji.geotec.backgroundsensors.service.SensorRecordingService;

export * from './entities';
export * from './provider';
export * from './sensors';
export * from './tasks';

export interface PhoneSensorsConfig {
  enableVibrationOnStart?: boolean;
}

export function registerPhoneSensorsPlugin(config: PhoneSensorsConfig = {}): PluginLoader {
  return () => {
    if (config.enableVibrationOnStart !== undefined) {
      SensorRecordingService.vibrateOnStart = config.enableVibrationOnStart;
    }
  };
}
