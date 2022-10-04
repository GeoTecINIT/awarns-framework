import NTPTP = es.uji.geotec.backgroundsensors.time.NTPTimeProvider;

export class NTPTimeProvider {
  constructor(private provider = NTPTP.getInstance()) {}

  public sync(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(this.provider.sync());
      });
    });
  }

  public isSynced(): boolean {
    return this.provider.isSynced();
  }

  public getTimestamp(): number {
    return this.provider.getTimestamp();
  }

  public getTimestampFromElapsedNanos(elapsedNanos: number): number {
    return this.provider.getTimestampFromElapsedNanos(elapsedNanos);
  }
}

let _instance: NTPTimeProvider;
export function getNTPTimeProvider(): NTPTimeProvider {
  if (!_instance) {
    _instance = new NTPTimeProvider();
  }
  return _instance;
}
