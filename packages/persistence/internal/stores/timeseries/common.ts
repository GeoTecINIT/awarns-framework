import { Observable } from 'rxjs';
import { AwarnsStore } from '../store';
import { QueryLogicalOperator, QueryWhereItem } from '../db';

export interface TimeSeriesEntity {
  id?: string;
  timestamp: Date;
}

export interface TimeSeriesStore<T extends TimeSeriesEntity> {
  insert(entity: T): Promise<void>;
  list(size?: number): Observable<Array<T>>;
  getAll(reverseOrder?: boolean, limitSize?: number): Promise<Array<T>>;
  clear(): Promise<void>;
}

export interface LocalTimeSeriesStore<T extends TimeSeriesEntity> extends TimeSeriesStore<T> {
  insert(entity: T, synchronized?: boolean): Promise<void>;
  getNotSynchronized(): Promise<Array<T>>;
  markAsSynchronized(entity: T): Promise<void>;
  clearOld(minAgeHours: number): Promise<void>;
}

export abstract class AbstractTimeSeriesStore<T extends TimeSeriesEntity> implements LocalTimeSeriesStore<T> {
  private readonly store: AwarnsStore<T & DBEntityProps>;

  protected constructor(
    docType: string,
    private serialize: (entity: T) => TimeSeriesDoc,
    deserialize: (doc: TimeSeriesDoc) => T,
    private keepId = false
  ) {
    const serializer = (entity: T & DBEntityProps) => {
      const serializedEntity = serialize(this.removeDBEntityProps(entity));
      return {
        ...serializedEntity,
        synchronized: entity.synchronized,
      };
    };
    const deserializer = (doc: TimeSeriesDoc) => {
      const { id, synchronized } = doc;
      const deserializedEntity = deserialize(doc);
      return {
        ...deserializedEntity,
        id,
        synchronized,
      };
    };

    this.store = new AwarnsStore<T & DBEntityProps>(docType, serializer, deserializer);
  }

  async insert(entity: T, synchronized = false): Promise<void> {
    const dbEntity = { ...entity, synchronized };
    await this.store.create(dbEntity, entity.id);
  }

  list(size = 100): Observable<Array<T>> {
    return new Observable<Array<T>>((subscriber) => {
      const subscription = this.store.changes.subscribe(() => {
        this.getAll(true, size)
          .then((entities) => {
            subscriber.next(entities);
          })
          .catch((err) => {
            subscriber.error(err);
          });
      });

      this.getAll(true, size)
        .then((entities) => {
          subscriber.next(entities);
        })
        .catch((err) => {
          subscriber.error(err);
        });

      return () => {
        subscription.unsubscribe();
      };
    });
  }

  async getAll(reverseOrder?: boolean, limitSize?: number): Promise<Array<T>> {
    const dbEntities = await this.store.fetch({
      select: [],
      order: [{ property: 'timestamp', direction: !reverseOrder ? 'asc' : 'desc' }],
      limit: limitSize,
    });
    return this.removeDBEntityPropsFromAll(dbEntities);
  }

  async getNotSynchronized(): Promise<Array<T>> {
    const dbEntities = await this.store.fetch({
      select: [],
      where: [{ property: 'synchronized', comparison: 'is', value: false }],
      order: [{ property: 'timestamp', direction: 'asc' }],
    });
    return this.removeDBEntityPropsFromAll(dbEntities);
  }

  async markAsSynchronized(entity: T): Promise<void> {
    const dbEntity = await this.getDBEntityFrom(entity);
    if (!dbEntity) {
      return;
    }

    await this.store.update(dbEntity.id, { synchronized: true });
  }

  async clear(): Promise<void> {
    await this.store.clear();
  }

  async clearOld(minAgeHours: number): Promise<void> {
    const minAgeMs = minAgeHours * 3.6e6;
    const threshold = new Date(Date.now() - minAgeMs).getTime();
    const deletableEntities = await this.store.fetch({
      select: [],
      where: [
        {
          property: 'timestamp',
          comparison: 'lessThanOrEqualTo',
          value: threshold,
        },
        {
          logical: QueryLogicalOperator.AND,
          property: 'synchronized',
          comparison: 'is',
          value: true,
        },
      ],
    });

    for (const entity of deletableEntities) {
      await this.store.delete(entity.id);
    }
  }

  private async getDBEntityFrom(entity: T): Promise<T & DBEntityProps> {
    if (entity.id) {
      return this.store.get(entity.id);
    }

    const serializedEntity = this.serialize(entity);
    const where = Object.keys(serializedEntity).map((key, index) => {
      const conditional = index > 0 ? { logical: QueryLogicalOperator.AND } : {};
      return {
        ...conditional,
        property: key,
        comparison: 'equalTo',
        value: serializedEntity[key],
      } as QueryWhereItem;
    });

    const dbEntities = await this.store.fetch({
      select: [],
      where,
    });

    if (dbEntities.length === 0) {
      return null;
    }
    return dbEntities[0];
  }

  private removeDBEntityPropsFromAll(dbEntities: Array<T & DBEntityProps>): Array<T> {
    return dbEntities.map((entity) => this.removeDBEntityProps(entity));
  }

  private removeDBEntityProps(dbEntity: T & DBEntityProps): T {
    const copy = { ...dbEntity };

    if (!this.keepId) {
      delete copy['id'];
    }
    delete copy['synchronized'];

    return copy;
  }
}

export interface TimeSeriesDoc {
  id?: string;
  synchronized?: boolean;
}

interface DBEntityProps {
  id?: string;
  synchronized: boolean;
}
