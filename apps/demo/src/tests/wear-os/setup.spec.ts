import { Watch } from '@awarns/wear-os/internal/watch';
import { Node } from 'nativescript-wearos-sensors/node';
import { SensorType } from 'nativescript-wearos-sensors/sensors';
import { useWatch, getWatchInUse, noWatchSelectedError } from '@awarns/wear-os/internal/setup';
import { clear } from '@nativescript/core/application-settings';

describe('Plugin setup', () => {
  const watch: Watch = new Node('test', 'test', [SensorType.ACCELEROMETER, SensorType.GYROSCOPE]);

  it('allows to obtain the watch that is being used', () => {
    useWatch(watch);
    const watchInUse = getWatchInUse();
    expect(watchInUse).toEqual(watch);
  });

  it('throws an error when trying to get the watch to use but none has been set up', () => {
    expect(() => getWatchInUse()).toThrow(noWatchSelectedError);
  });

  afterEach(() => {
    clear();
  });
});
