import { AndroidTriAxialReceiver } from '@awarns/phone-sensors/internal/receiver/android/receiver.android';
import { EventData } from '@awarns/core/events';
import { TriAxial } from '@awarns/phone-sensors/internal/tri-axial';
import { PhoneSensor } from '@awarns/phone-sensors/internal/phone-sensor';

const now = new Date().getTime();

describe('TriAxial receiver', () => {
  let eventEmitter: (eventName: string, eventData?: EventData) => void;
  let receiver: AndroidTriAxialReceiver;

  beforeEach(() => {
    eventEmitter = jasmine.createSpy();
    receiver = new AndroidTriAxialReceiver(eventEmitter);
  });

  it('does nothing when receives an empty list of native records', () => {
    receiver.onReceive(createFakeNativeRecords(0));
    expect(eventEmitter).not.toHaveBeenCalled();
  });

  it('emits an event with the received records', () => {
    const expectedRecord = new TriAxial(
      PhoneSensor.ACCELEROMETER,
      [
        { x: 0, y: 0, z: 0, detectedAt: new Date(now) },
        { x: 1, y: 1, z: 1, detectedAt: new Date(now + 1000) },
        { x: 2, y: 2, z: 2, detectedAt: new Date(now + 2000) },
      ],
      new Date(now)
    );
    const { id, ...expectedProperties } = expectedRecord;
    receiver.onReceive(createFakeNativeRecords(3));

    expect(eventEmitter).toHaveBeenCalledWith(
      'accelerometerSamplesAcquired',
      jasmine.objectContaining(expectedProperties)
    );
  });
});

function createFakeNativeRecords(size: number) {
  // @ts-ignore
  const arr = new java.util.LinkedList<es.uji.geotec.backgroundsensors.record.TriAxialRecord>();

  for (let i = 0; i < size; i++) {
    arr.add(
      // @ts-ignore
      new es.uji.geotec.backgroundsensors.record.TriAxialRecord(
        // @ts-ignore
        es.uji.geotec.backgroundsensors.sensor.BaseSensor.ACCELEROMETER,
        now + i * 1000,
        i,
        i,
        i
      )
    );
  }

  return arr;
}
