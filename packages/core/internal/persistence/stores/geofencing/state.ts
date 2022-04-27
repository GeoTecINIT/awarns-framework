import { GeofencingProximity } from '../../../tasks/geofencing/geofencing-state';
import { EMAIStore } from '../emai-store';

export interface GeofencingStateStore {
  updateProximity(id: string, proximity: GeofencingProximity): Promise<void>;
  getProximity(id: string): Promise<GeofencingProximity>;
  getKnownNearbyAreas(): Promise<Array<NearbyArea>>;
  clear(): Promise<void>;
}

const DOC_TYPE = 'geofencing-state';

class GeofencingStateStoreDB implements GeofencingStateStore {
  private readonly store: EMAIStore<NearbyArea>;

  constructor() {
    this.store = new EMAIStore<NearbyArea>(DOC_TYPE, docFrom, nearbyAreaFrom);
  }

  async updateProximity(id: string, proximity: GeofencingProximity): Promise<void> {
    const prevState = await this.getProximity(id);
    if (proximity === GeofencingProximity.OUTSIDE) {
      if (prevState === GeofencingProximity.OUTSIDE) {
        return;
      }
      await this.store.delete(id);
      return;
    }

    const doc = await this.store.get(id);
    const area = { id, proximity };
    if (!doc) {
      await this.store.create(<NearbyArea>docFrom(area), id);
      return;
    }
    await this.store.update(id, { proximity });
  }

  async getProximity(id: string): Promise<GeofencingProximity> {
    const areaProximity = await this.store.get(id);
    if (!areaProximity) {
      return GeofencingProximity.OUTSIDE;
    }
    return areaProximity.proximity;
  }

  async getKnownNearbyAreas(): Promise<Array<NearbyArea>> {
    return this.store.fetch();
  }

  async clear(): Promise<void> {
    await this.store.clear();
  }
}

interface NearbyAreaDoc {
  id?: string;
  proximity: GeofencingProximity;
}

function docFrom(area: NearbyArea): NearbyAreaDoc {
  const { proximity } = area;
  return { proximity };
}

function nearbyAreaFrom(doc: NearbyAreaDoc): NearbyArea {
  const { id, proximity } = doc;
  return { id, proximity };
}

export interface NearbyArea {
  id: string;
  proximity: GeofencingProximity;
}

export const geofencingStateStoreDB = new GeofencingStateStoreDB();
