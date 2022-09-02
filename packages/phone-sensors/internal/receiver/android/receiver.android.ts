import { EventData } from '@awarns/core/events';
import { awarns } from '@awarns/core/index';

import TriAxialRecord = es.uji.geotec.backgroundsensors.record.TriAxialRecord;
import { TriAxial } from '../../tri-axial';
import { fromNativeSensor } from '../../phone-sensor';

export class AndroidTriAxialReceiver {
  constructor(private emitEvent: (eventName: string, eventData?: EventData) => void) {}

  onReceive(nativeRecords: java.util.List<TriAxialRecord>) {
    if (nativeRecords.size() === 0) {
      return;
    }

    const sensor = fromNativeSensor(nativeRecords.get(0).getSensor());
    const detectedAt = new Date(nativeRecords.get(0).getTimestamp());
    const samples = [];
    const iterator = nativeRecords.iterator();
    while (iterator.hasNext()) {
      const sample = iterator.next();
      samples.push({
        x: sample.getX(),
        y: sample.getY(),
        z: sample.getZ(),
        detectedAt: new Date(sample.getTimestamp()),
      });
    }

    const record = new TriAxial(sensor, samples, detectedAt);
    this.emitEvent(`${sensor.toLowerCase()}SamplesAcquired`, record);
  }
}

let _receiver: AndroidTriAxialReceiver;
export function getTriAxialReceiver(): AndroidTriAxialReceiver {
  if (!_receiver) {
    _receiver = new AndroidTriAxialReceiver(awarns.emitEvent);
  }
  return _receiver;
}
