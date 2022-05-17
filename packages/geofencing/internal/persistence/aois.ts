import { AreaOfInterest } from '../entities';
import { AwarnsStore } from '@awarns/persistence';
import { Observable } from 'rxjs';

export interface AreasOfInterestStore {
  insert(aois: Array<AreaOfInterest>): Promise<void>;
  getById(id: string): Promise<AreaOfInterest>;
  getAll(): Promise<Array<AreaOfInterest>>;
  list(): Observable<Array<AreaOfInterest>>;
  deleteAll(): Promise<void>;
}

const DOC_TYPE = 'area-of-interest';

class AreasOfInterestStoreDB implements AreasOfInterestStore {
  private readonly store: AwarnsStore<AreaOfInterest>;

  constructor() {
    this.store = new AwarnsStore<AreaOfInterest>(DOC_TYPE, docFrom, aoiFrom);
  }

  async insert(aois: Array<AreaOfInterest>): Promise<void> {
    await this.store.insert(aois);
  }

  async getById(id: string): Promise<AreaOfInterest> {
    return await this.store.get(id);
  }

  async getAll(): Promise<Array<AreaOfInterest>> {
    return this.store.fetch();
  }

  list(): Observable<Array<AreaOfInterest>> {
    return new Observable<Array<AreaOfInterest>>((subscriber) => {
      const pushUpdatedAoIs = () => {
        this.store
          .fetch()
          .then((aois) => subscriber.next(aois))
          .catch((err) => subscriber.error(err));
      };

      pushUpdatedAoIs();
      const subscription = this.store.changes.subscribe(() => {
        pushUpdatedAoIs();
      });

      return () => {
        subscription.unsubscribe();
      };
    });
  }

  async deleteAll(): Promise<void> {
    return this.store.clear();
  }
}

interface AoIDoc {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
  category?: string;
  level?: number;
}

function docFrom(aoi: AreaOfInterest): AoIDoc {
  return { ...aoi };
}

function aoiFrom(doc: AoIDoc): AreaOfInterest {
  const { id, name, latitude, longitude, radius, category, level } = doc;
  return {
    id,
    name,
    latitude,
    longitude,
    radius,
    category,
    level,
  };
}

export const areasOfInterestStoreDB = new AreasOfInterestStoreDB();
