import { AcquireOptions, GeolocationProvider as NativeProvider, StreamOptions, Geolocation } from 'nativescript-context-apis/geolocation';
import { Observable, of } from 'rxjs';

export function createNativeGeolocationProviderMock(): NativeProvider {
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
