import { PullProvider } from '@awarns/core/data-sources';
import { SampleRecordType } from '../common.spec';

export * from '../common.spec';

export function createPullProviderMock(): PullProvider {
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
    next() {
      return [Promise.resolve(null), () => null];
    },
  };
}
