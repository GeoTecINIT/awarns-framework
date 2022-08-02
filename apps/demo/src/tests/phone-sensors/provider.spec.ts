import { PhoneSensorsProvider, ProviderConfiguration } from '@awarns/phone-sensors/internal/provider';
import { PhoneSensor, toNativeSensor } from '@awarns/phone-sensors/internal/phone-sensor';

describe('Phone sensors provider', () => {
  const sensor = PhoneSensor.ACCELEROMETER;
  const nativeSensor = toNativeSensor(sensor);
  const config: ProviderConfiguration = {
    sensorDelay: 10,
    batchSize: 50,
  };

  let sensorManager;
  let serviceManager;

  let provider: PhoneSensorsProvider;

  beforeEach(() => {
    sensorManager = createSensorManagerMock();
    serviceManager = createServiceManagerMock();

    provider = new PhoneSensorsProvider(sensor, config, sensorManager, serviceManager);
  });

  it('allows to check if the sensor is present in the device', async () => {
    spyOn(sensorManager, 'isSensorAvailable').and.returnValue(true);
    await provider.checkIfIsReady();
    expect(sensorManager.isSensorAvailable).toHaveBeenCalled();
  });

  it('throws an error when the sensor is not present in the device', async () => {
    spyOn(sensorManager, 'isSensorAvailable').and.returnValue(false);
    await expectAsync(provider.checkIfIsReady()).toBeRejectedWith(
      new Error(`Sensor ${sensor} is not ready! This sensor might not be available in this device!`)
    );
  });

  it('instructs the service manager to start the data collection', async () => {
    spyOn(serviceManager, 'startCollection').and.callThrough();
    const nativeConfig = collectionConfigurationMock(nativeSensor, config);
    await provider.startProviding();
    expect(serviceManager.startCollection).toHaveBeenCalledWith(nativeConfig, callbackMock());
  });

  it('instructs the service manager to stop the data collection', async () => {
    spyOn(serviceManager, 'stopCollection').and.callThrough();
    await provider.stopProviding();
    expect(serviceManager.stopCollection).toHaveBeenCalledWith(nativeSensor);
  });
});

function createSensorManagerMock() {
  return {
    isSensorAvailable(_sensor) {
      return false;
    },
    availableSensors() {
      return undefined;
    },
  };
}

function createServiceManagerMock() {
  return {
    startCollection(_config, _callback) {
      return;
    },
    stopCollection(_sensor) {
      return;
    },
  };
}

function collectionConfigurationMock(sensor, config: ProviderConfiguration) {
  // @ts-ignore
  return new es.uji.geotec.backgroundsensors.collection.CollectionConfiguration(
    sensor,
    config.sensorDelay * 1000,
    config.batchSize
  );
}

function callbackMock() {
  // @ts-ignore
  return new es.uji.geotec.backgroundsensors.record.callback.RecordCallback({
    onRecordsCollected: (_param0: java.util.List<any>) => {
      return;
    },
  });
}
