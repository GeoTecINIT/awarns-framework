import { Observable } from 'rxjs';
import { LocalTimeSeriesStore, TimeSeriesEntity, TimeSeriesStore } from '@awarns/core/internal/persistence/stores/timeseries/common';
import { TimeSeriesSyncedStore } from '@awarns/core/internal/persistence/stores/timeseries/synchronizer';

describe('Time series synced store', () => {
  let localStoreMock: LocalTimeSeriesStore<TimeSeriesEntity>;
  let externalStoreMock: TimeSeriesStore<TimeSeriesEntity>;
  let syncedStore: TimeSeriesSyncedStore<TimeSeriesEntity>;

  const fakeEntity1: TimeSeriesEntity = {
    timestamp: new Date(),
  };
  const fakeEntity2: TimeSeriesEntity = {
    timestamp: new Date(),
  };

  beforeEach(() => {
    localStoreMock = createLocalStoreMock();
    externalStoreMock = createExternalStoreMock();
    syncedStore = new TimeSeriesSyncedStore<TimeSeriesEntity>('TimeSeriesStore', localStoreMock);

    spyOn(localStoreMock, 'insert');
  });

  it('inserts an entity only locally', async () => {
    await syncedStore.insert(fakeEntity1);
    expect(localStoreMock.insert).toHaveBeenCalledWith(fakeEntity1, false);
  });

  it('marks an entity as synced when stored both locally and externally', async () => {
    spyOn(externalStoreMock, 'insert');
    syncedStore.setExternalStore(externalStoreMock);
    await syncedStore.insert(fakeEntity1);
    expect(externalStoreMock.insert).toHaveBeenCalledWith(fakeEntity1);
    expect(localStoreMock.insert).toHaveBeenCalledWith(fakeEntity1, true);
  });

  it('marks an entity as not synced when external storage fails', async () => {
    spyOn(externalStoreMock, 'insert').and.rejectWith('Could not store');
    syncedStore.setExternalStore(externalStoreMock);
    await syncedStore.insert(fakeEntity1);
    expect(localStoreMock.insert).toHaveBeenCalledWith(fakeEntity1, false);
  });

  it('does not perform sync actions when no external store is provided', async () => {
    spyOn(localStoreMock, 'getNotSynchronized');
    await syncedStore.sync();
    expect(localStoreMock.getNotSynchronized).not.toHaveBeenCalled();
  });

  it('syncs pending unsynced entities when required', async () => {
    spyOn(localStoreMock, 'getNotSynchronized').and.returnValue(Promise.resolve([fakeEntity1, fakeEntity2]));
    spyOn(localStoreMock, 'markAsSynchronized');
    spyOn(externalStoreMock, 'insert');
    syncedStore.setExternalStore(externalStoreMock);
    await syncedStore.sync();
    expect(externalStoreMock.insert).toHaveBeenCalledTimes(2);
    expect(localStoreMock.markAsSynchronized).toHaveBeenCalledTimes(2);
  });

  it('does nothing when no clear old data threshold has been specified', async () => {
    spyOn(localStoreMock, 'clearOld');
    await syncedStore.clearOld();
    expect(localStoreMock.clearOld).not.toHaveBeenCalled();
  });

  it('clears old data when threshold has been specified', async () => {
    spyOn(localStoreMock, 'clearOld');
    syncedStore.setClearOldThreshold(1);
    await syncedStore.clearOld();
    expect(localStoreMock.clearOld).toHaveBeenCalledWith(1);
  });

  it('propagates list call to local store', () => {
    spyOn(localStoreMock, 'list');
    syncedStore.list(10);
    expect(localStoreMock.list).toHaveBeenCalledWith(10);
  });

  it('propagates getAll call to local store', async () => {
    spyOn(localStoreMock, 'getAll');
    await syncedStore.getAll();
    expect(localStoreMock.getAll).toHaveBeenCalled();
  });

  it('propagates clear call to local store', async () => {
    spyOn(localStoreMock, 'clear');
    await syncedStore.clear();
    expect(localStoreMock.clear).toHaveBeenCalled();
  });
});

function createLocalStoreMock(): LocalTimeSeriesStore<TimeSeriesEntity> {
  return {
    getAll(): Promise<Array<TimeSeriesEntity>> {
      return Promise.resolve(undefined);
    },
    getNotSynchronized(): Promise<Array<TimeSeriesEntity>> {
      return Promise.resolve(undefined);
    },
    list(_size?: number): Observable<Array<TimeSeriesEntity>> {
      return undefined;
    },
    markAsSynchronized(_entity: TimeSeriesEntity): Promise<void> {
      return Promise.resolve(undefined);
    },
    clear(): Promise<void> {
      return Promise.resolve(undefined);
    },
    insert(_entity: TimeSeriesEntity, _synchronized?: boolean): Promise<void> {
      return Promise.resolve(undefined);
    },
    clearOld(_minAgeHours: number): Promise<void> {
      return Promise.resolve(undefined);
    },
  };
}

function createExternalStoreMock(): TimeSeriesStore<TimeSeriesEntity> {
  return {
    getAll(): Promise<Array<TimeSeriesEntity>> {
      return Promise.resolve(undefined);
    },
    insert(_entity: TimeSeriesEntity): Promise<void> {
      return Promise.resolve(undefined);
    },
    list(_size?: number): Observable<Array<TimeSeriesEntity>> {
      return undefined;
    },
    clear(): Promise<void> {
      return Promise.resolve(undefined);
    },
  };
}
