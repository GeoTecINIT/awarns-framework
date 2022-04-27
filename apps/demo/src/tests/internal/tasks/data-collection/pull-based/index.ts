import { PullProvider, RecordType } from '@awarns/core/internal/providers';

export function createPullProviderMock(): PullProvider {
  return {
    get provides() {
      return RecordType.Geolocation;
    },
    checkIfIsReady() {
      return Promise.resolve();
    },
    prepare() {
      return Promise.resolve();
    },
    next() {
      return [Promise.resolve(null), () => null];
    },
  };
}
