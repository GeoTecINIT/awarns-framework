export interface BaseProvider {
  provides: string;
  checkIfIsReady(): Promise<void>;
  prepare(): Promise<void>;
}
