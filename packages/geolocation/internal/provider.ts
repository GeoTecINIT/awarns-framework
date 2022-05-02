import { PullProvider, ProviderInterrupter, ProviderInterruption } from '@awarns/core/providers';
import { KnownTypes } from '@awarns/core/entities';
import { Geolocation } from './geolocation';

import {
  GeolocationProvider as NativeProvider,
  Geolocation as NativeGeolocation,
  getGeolocationProvider as getNativeProvider,
} from 'nativescript-context-apis/geolocation';

import { firstValueFrom, from, Observable, of, Subject, throwError, timeout } from 'rxjs';
import { map, mergeMap, take, takeUntil, toArray } from 'rxjs/operators';

export class GeolocationProvider implements PullProvider {
  get provides(): string {
    return KnownTypes.Geolocation;
  }

  constructor(
    private bestOf: number,
    private timeout: number,
    private nativeProvider: () => NativeProvider = getNativeProvider
  ) {}

  async checkIfIsReady(): Promise<void> {
    const isReady = await this.nativeProvider().isReady();
    if (!isReady) {
      throw geolocationProviderNotReadyErr;
    }
  }

  prepare(): Promise<void> {
    return this.nativeProvider().prepare(false, true);
  }

  next(): [Promise<Geolocation>, ProviderInterruption] {
    const interrupter = new ProviderInterrupter();
    const bestLocation = this.obtainBestLocationAmongNext(this.bestOf, interrupter);
    return [bestLocation, () => interrupter.interrupt()];
  }

  private obtainBestLocationAmongNext(amount: number, interrupter: ProviderInterrupter): Promise<Geolocation> {
    const interrupted = new Subject<void>();
    interrupter.interruption = () => {
      interrupted.next();
      interrupted.complete();
    };

    return firstValueFrom(
      this.nativeProvider()
        .locationStream({
          highAccuracy: true,
          stdInterval: 1000,
          minInterval: 100,
          maxAge: 60000,
          saveBattery: false,
        })
        .pipe(
          takeUntil(interrupted),
          take(amount),
          timeout({ each: this.timeout, with: () => of(null) }),
          toArray(),
          map(pickBest),
          mergeMap((location) => this.ensureItGetsAtLeastOne(location)),
          map(toGeolocation)
        )
    );
  }

  private ensureItGetsAtLeastOne(location: NativeGeolocation): Observable<NativeGeolocation> {
    if (!location) {
      return from(
        this.nativeProvider().acquireLocation({
          highAccuracy: true,
          allowBackground: true,
        })
      ).pipe(
        timeout({
          each: this.timeout,
          with: () => throwError(() => new Error('Could not acquire location')),
        })
      );
    }
    return of(location);
  }
}

export const geolocationProviderNotReadyErr = new Error(
  "Geolocation provider is not ready. Perhaps permissions haven't been granted or location services have been disabled"
);

function pickBest(locations: Array<NativeGeolocation>): NativeGeolocation {
  const now = Date.now();
  return locations.reduce(
    (previous, current) =>
      current && (!previous || calculateScore(current, now) > calculateScore(previous, now)) ? current : previous,
    null
  );
}

function calculateScore(location: NativeGeolocation, now: number): number {
  const { horizontalAccuracy, timestamp } = location;
  const timeDiff = (now - timestamp.getTime()) / 1000;

  const limitedAccuracy = Math.min(horizontalAccuracy, 65);
  const limitedTimeDiff = Math.min(Math.max(timeDiff, 0), 60);

  const accuracyScore = 1 - limitedAccuracy / 65;
  const timeDiffScore = 1 - limitedTimeDiff / 60;

  return ((accuracyScore + timeDiffScore) / 2) * 10;
}

function toGeolocation(nativeGeolocation: NativeGeolocation): Geolocation {
  return new Geolocation(
    nativeGeolocation.latitude,
    nativeGeolocation.longitude,
    nativeGeolocation.altitude,
    nativeGeolocation.horizontalAccuracy,
    nativeGeolocation.verticalAccuracy,
    nativeGeolocation.speed,
    nativeGeolocation.direction,
    nativeGeolocation.timestamp
  );
}
