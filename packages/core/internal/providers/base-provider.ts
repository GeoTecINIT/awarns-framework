import { RecordType } from './base-record';

export interface BaseProvider {
  provides: RecordType;
  checkIfIsReady(): Promise<void>;
  prepare(): Promise<void>;
}
