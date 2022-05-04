import { BaseProvider } from '../../providers/base-provider';
import { Record } from '../../providers';

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
