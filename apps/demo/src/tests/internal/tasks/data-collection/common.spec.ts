import { BaseProvider } from '@awarns/core/internal/providers/base-provider';
import { RecordType } from '@awarns/core/internal/providers/base-record';

export function createBaseProviderMock(): BaseProvider {
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
  };
}
