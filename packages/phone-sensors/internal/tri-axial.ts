import { Record } from '@awarns/core/entities';
import { PhoneSensor } from './phone-sensor';

export const TriAxialType = 'tri-axial';

export class TriAxial extends Record {
  constructor(public sensor: PhoneSensor, public samples: TriAxialSample[], detectedAt: Date) {
    super(TriAxialType, detectedAt);
  }
}

export interface TriAxialSample {
  x: number;
  y: number;
  z: number;
  detectedAt: Date;
}
