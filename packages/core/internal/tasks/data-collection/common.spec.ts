import { BaseProvider } from '../../providers/base-provider';
import { RecordType } from '../../providers';

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
