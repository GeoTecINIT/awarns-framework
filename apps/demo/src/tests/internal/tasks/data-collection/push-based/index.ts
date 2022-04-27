import { PushProvider } from '@awarns/core/internal/providers';
import { RecordType } from '@awarns/core/internal/providers/base-record';

export function createPushProviderMock(): PushProvider {
  return {
    get provides() {
      return RecordType.HumanActivity;
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
