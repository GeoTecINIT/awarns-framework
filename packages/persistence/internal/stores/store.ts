import { pluginDB, Query } from './db';
import { Observable, Subject } from 'rxjs';

export class AwarnsStore<T> {
  private readonly db = pluginDB;
  private readonly _changes: Subject<Array<string>>;

  get changes(): Observable<Array<string>> {
    return this._changes.asObservable();
  }

  constructor(
    private docType: string,
    private serialize: (entity: T) => unknown,
    private deserialize: (doc: unknown) => T
  ) {
    this._changes = new Subject<Array<string>>();
  }

  async create(entity: T, id?: string): Promise<string> {
    const docId = await this.db.createDocument(this.docType, this.serialize(entity), id);
    this._changes.next([docId]);
    return docId;
  }

  async insert(entities: Array<T>): Promise<Array<string>> {
    const docIds = await this.db.createMultipleDocs(
      this.docType,
      entities.map((entity) => this.serialize(entity))
    );
    this._changes.next(docIds);
    return docIds;
  }

  async get(id: string): Promise<T> {
    const doc = await this.db.getDocument(this.docType, id);
    if (!doc) {
      return null;
    }
    return this.deserialize(doc);
  }

  async fetch(q?: Query): Promise<Array<T>> {
    const docs = await this.db.query(this.docType, q);
    return docs.map((doc) => this.deserialize(doc));
  }

  async update(id: string, props: unknown): Promise<void> {
    await this.db.updateDocument(this.docType, id, props);
    this._changes.next([id]);
  }

  async delete(id: string): Promise<void> {
    await this.db.deleteDocument(this.docType, id);
    this._changes.next([id]);
  }

  async clear(): Promise<void> {
    const ids = await this.db.deleteAll(this.docType);
    this._changes.next(ids);
  }
}
