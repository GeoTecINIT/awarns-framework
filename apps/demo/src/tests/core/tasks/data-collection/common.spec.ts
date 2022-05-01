import { BaseProvider } from '@awarns/core/internal/providers/base-provider';
import { Record } from '@awarns/core/entities';

export const SampleRecordType = 'sample-record';

export class SampleRecord extends Record {
  constructor() {
    super(SampleRecordType);
  }
}

export function createBaseProviderMock(): BaseProvider {
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
  };
}
