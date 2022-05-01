import { PushProvider } from '@awarns/core/data-sources';
import { SampleRecordType } from '../common.spec';

export * from '../common.spec';

export function createPushProviderMock(): PushProvider {
  return {
    get provides() {
      return SampleRecordType;
    },
    checkIfIsReady() {
      return Promise.resolve();
    },
    prepare() {
      return Promise.resolve();
    },
    startProviding() {
      return Promise.resolve();
    },
    stopProviding() {
      return Promise.resolve();
    },
  };
}
