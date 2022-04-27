import { TracesStore } from '../../persistence/stores/timeseries';
import { Trace } from './index';
import { Observable, of } from 'rxjs';

export function createTracesStoreMock(): TracesStore {
  return {
    insert(_trace: Trace): Promise<void> {
      return Promise.resolve();
    },
    list(_size?: number): Observable<Array<Trace>> {
      return of([]);
    },
    getAll(): Promise<Array<Trace>> {
      return Promise.resolve([]);
    },
    clear(): Promise<void> {
      return Promise.resolve();
    },
  };
}
