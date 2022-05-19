import {
  GeolocationProvider as NativeProvider,
  Geolocation as NativeGeolocation,
  AcquireOptions,
  Geolocation,
  StreamOptions,
} from 'nativescript-context-apis/geolocation';

import { GeolocationProvider, geolocationProviderNotReadyErr } from '@awarns/geolocation/internal/provider';

import { GeolocationType } from '@awarns/geolocation/entities';

import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('Geolocation provider', () => {
  const bestLocationOf = 3;
  const timeout = 1000;
  const locations = createFakeLocations();

  let nativeProvider: NativeProvider;
  let provider: GeolocationProvider;

  beforeEach(() => {
    nativeProvider = createNativeGeolocationProviderMock();
    provider = new GeolocationProvider(bestLocationOf, timeout, () => nativeProvider);
  });

  it('provides the appropriate record type', () => {
    expect(provider.provides).toBe(GeolocationType);
  });

  it('allows to check if the underlying provider is ready', async () => {
    spyOn(nativeProvider, 'isReady').and.returnValue(Promise.resolve(true));
    await provider.checkIfIsReady();
    expect(nativeProvider.isReady).toHaveBeenCalled();
  });

  it('throws an error if the underlying provider is not ready', async () => {
    spyOn(nativeProvider, 'isReady').and.returnValue(Promise.resolve(false));
    await expectAsync(provider.checkIfIsReady()).toBeRejectedWith(geolocationProviderNotReadyErr);
  });

  it('allows to prepare the underlying system', async () => {
    spyOn(nativeProvider, 'prepare').and.returnValue(Promise.resolve());
    await provider.prepare();
    expect(nativeProvider.prepare).toHaveBeenCalledWith(false, true);
  });

  it('calculates the best location of the specified amount to collect', async () => {
    spyOn(nativeProvider, 'locationStream').and.returnValue(from(locations));
    const [bestLocation] = provider.next();
    const location = await bestLocation;
    expect(location.horizontalAccuracy).toBe(locations[0].horizontalAccuracy);
  });

  it('tries to acquire the last location at least if the sensor is unable to get a fix', async () => {
    spyOn(nativeProvider, 'locationStream').and.returnValue(of(null));
    spyOn(nativeProvider, 'acquireLocation').and.returnValue(Promise.resolve(locations[4]));
    const [bestLocation] = provider.next();
    const location = await bestLocation;
    expect(location.horizontalAccuracy).toBe(locations[4].horizontalAccuracy);
  });

  it('tries to acquire the last location at least if the sensor is unable to get a fix within the timeout window', async () => {
    spyOn(nativeProvider, 'locationStream').and.returnValue(from(locations).pipe(delay(timeout + 100)));
    spyOn(nativeProvider, 'acquireLocation').and.returnValue(Promise.resolve(locations[4]));
    const [bestLocation] = provider.next();
    const location = await bestLocation;
    expect(location.horizontalAccuracy).toBe(locations[4].horizontalAccuracy);
  });

  it('throws an error if the sensor is unable to get a fix and no last location is available', async () => {
    spyOn(nativeProvider, 'locationStream').and.returnValue(of(null));
    spyOn(nativeProvider, 'acquireLocation').and.returnValue(
      new Promise((resolve) => setTimeout(() => resolve(locations[0]), timeout + 500))
    );
    const [bestLocation] = provider.next();
    await expectAsync(bestLocation).toBeRejectedWithError('Could not acquire location');
  });

  it('stops collecting locations if interrupted', async () => {
    spyOn(nativeProvider, 'acquireLocation').and.returnValue(Promise.resolve(locations[4]));
    let interrupted = false;
    spyOn(nativeProvider, 'locationStream').and.returnValue(
      new Observable((subscriber) => {
        let i = 0;
        const listenerId = setInterval(() => {
          if (i >= locations.length) {
            subscriber.error('Not enough locations to provide');
            clearInterval(listenerId);
            return;
          }
          subscriber.next(locations[i]);
          i++;
        }, 1000);
        return () => {
          interrupted = true;
          clearInterval(listenerId);
        };
      })
    );
    const [bestLocation, stopListening] = provider.next();
    setTimeout(() => stopListening(), 100);
    await bestLocation;
    expect(interrupted).toBeTrue();
  });

  it('returns the best location at the moment of being stopped', async () => {
    spyOn(nativeProvider, 'locationStream').and.returnValue(
      new Observable((subscriber) => {
        let i = 0;
        const listenerId = setInterval(() => {
          if (i >= locations.length) {
            subscriber.error('Not enough locations to provide');
            clearInterval(listenerId);
            return;
          }
          subscriber.next(locations[i]);
          i++;
        }, 500);
        return () => {
          clearInterval(listenerId);
        };
      })
    );
    const [bestLocation, stopListening] = provider.next();
    setTimeout(() => stopListening(), 1000);
    const location = await bestLocation;
    expect(location.horizontalAccuracy).toBe(locations[0].horizontalAccuracy);
  });
});

function createFakeLocations(): Array<NativeGeolocation> {
  return [
    new NativeGeolocation({
      latitude: 38.9939429,
      longitude: -1.0738488,
      altitude: 133.8000030517578,
      horizontalAccuracy: 12.486000061035156,
      verticalAccuracy: 10.486000061035156,
      speed: 0.10904105752706528,
      direction: 313.95758056640625,
      timestamp: new Date('2020-01-28T15:09:59.000Z'),
    }),
    new NativeGeolocation({
      latitude: 38.9939409,
      longitude: -1.0738495,
      altitude: 133.8000030517578,
      horizontalAccuracy: 12.565999984741211,
      verticalAccuracy: 9.565999984741211,
      speed: 0.07058636844158173,
      direction: 274.8623962402344,
      timestamp: new Date('2020-01-28T15:10:00.000Z'),
    }),
    new NativeGeolocation({
      latitude: 38.9939401,
      longitude: -1.0738498,
      altitude: 133.8000030517578,
      horizontalAccuracy: 12.576000213623047,
      verticalAccuracy: 8.576000213623047,
      speed: 0.05994986742734909,
      direction: 236.01693725585938,
      timestamp: new Date('2020-01-28T15:10:01.000Z'),
    }),
    new NativeGeolocation({
      latitude: 38.9939143,
      longitude: -1.0738398,
      altitude: 133.8000030517578,
      horizontalAccuracy: 13.303000450134277,
      verticalAccuracy: 11.303000450134277,
      speed: 0.0035138472449034452,
      direction: 332.4197082519531,
      timestamp: new Date('2020-01-28T15:10:02.000Z'),
    }),
    new NativeGeolocation({
      latitude: 38.9939159,
      longitude: -1.0738408,
      altitude: 133.8000030517578,
      horizontalAccuracy: 13.373000144958496,
      speed: 0.046229247003793716,
      direction: 333.66839599609375,
      timestamp: new Date('2020-01-28T15:10:03.000Z'),
    }),
  ];
}

function createNativeGeolocationProviderMock(): NativeProvider {
  return {
    isReady(): Promise<boolean> {
      return Promise.resolve(false);
    },
    prepare(_watchAlways?: boolean, _openSettingsIfDenied?: boolean): Promise<void> {
      return Promise.resolve();
    },
    acquireLocation(_options?: AcquireOptions): Promise<Geolocation> {
      return Promise.resolve(null);
    },
    locationStream(_options?: StreamOptions): Observable<Geolocation> {
      return of(null);
    },
  } as NativeProvider;
}
