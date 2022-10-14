import { PluginLoader } from '@awarns/core/common';
import SensorRecordingService = es.uji.geotec.backgroundsensors.service.SensorRecordingService;

export * from './entities';
export * from './provider';
export * from './sensors';
export * from './tasks';

export function registerPhoneSensorsPlugin(enableVibrationOnStart = true): PluginLoader {
  return () => {
    SensorRecordingService.vibrateOnStart = enableVibrationOnStart;
  };
}
