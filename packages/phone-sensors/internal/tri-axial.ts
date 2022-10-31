import { Record } from '@awarns/core/entities';
import { PhoneSensor } from './phone-sensor';

export class TriAxial extends Record {
  constructor(sensor: PhoneSensor, public samples: TriAxialSample[], detectedAt: Date) {
    super(sensor, detectedAt);
  }
}

export interface TriAxialSample {
  x: number;
  y: number;
  z: number;
  timestamp: number;
}
