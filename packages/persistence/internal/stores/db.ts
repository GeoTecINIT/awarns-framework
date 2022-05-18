import {
  CouchBase,
  Query as Q,
  QueryComparisonOperator as QCO,
  QueryLogicalOperator,
  QueryMeta,
  QueryWhereItem as QWI,
} from '@triniwiz/nativescript-couchbase';

export type QueryComparisonOperator = QCO;
export type Query = Q;
export type QueryWhereItem = QWI;
export { QueryLogicalOperator };

const DB_NAME = 'awarns-framework';

class Database {
  private db: CouchBase;

  constructor() {
    this.db = new CouchBase(DB_NAME);
  }

  async createDocument(docType: string, doc: DbDocument, id?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.db.inBatch(() => {
        const typedId = id ? typeId(docType, id) : undefined;
        if (typedId && this.db.getDocument(typedId)) {
          reject(new NotUniqueErr(id));
          return;
        }
        const typedDoc = { docType, ...doc };
        const docId = this.db.createDocument(typedDoc, typedId);
        resolve(untypeId(docType, docId));
      });
    });
  }

  async createMultipleDocs(docType: string, docs: Array<DbDocument>): Promise<Array<string>> {
    if (docs.length === 0) {
      return [];
    }
    if (docs[0].id && typeof docs[0].id !== 'string') {
      throw new Error('Built in id property must be a string!');
    }
    return new Promise((resolve, reject) => {
      this.db.inBatch(() => {
        if (docs[0].id) {
          const existingIds = [];
          for (const doc of docs) {
            const existingDoc = this.db.getDocument(typeId(docType, doc.id));
            if (existingDoc) {
              existingIds.push(existingDoc.id);
            }
          }
          if (existingIds.length > 0) {
            reject(new NotUniqueErr(existingIds));
            return;
          }
        }

        const ids = [];
        for (const doc of docs) {
          const typedDoc = { docType, ...doc };
          let id: string;
          if (typedDoc.id) {
            id = typeId(docType, typedDoc.id);
            delete typedDoc['id'];
          }
          const docId = this.db.createDocument(typedDoc, id);
          ids.push(untypeId(docType, docId));
        }
        resolve(ids);
      });
    });
  }

  async getDocument(docType: string, id: string): Promise<DbDocument> {
    const doc = this.db.getDocument(typeId(docType, id));
    if (!doc) {
      return null;
    }
    doc.id = untypeId(docType, doc.id);
    return doc;
  }

  async query(docType: string, q: Query = { select: [QueryMeta.ALL, QueryMeta.ID] }): Promise<Array<DbDocument>> {
    const docTypeFilter: QueryWhereItem = {
      property: 'docType',
      comparison: 'equalTo',
      value: docType,
    };

    if (!q.where) {
      q.where = [docTypeFilter];
    } else {
      q.where.push({ logical: QueryLogicalOperator.AND, ...docTypeFilter });
    }

    return this.db.query(q).map((doc) => ({ ...doc, id: untypeId(docType, doc.id) }));
  }

  async updateDocument(docType: string, id: string, doc: DbDocument): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.inBatch(() => {
        this.getDocument(docType, id)
          .then((prevDoc) => {
            if (!prevDoc) {
              resolve();
              return;
            }
            this.db.updateDocument(typeId(docType, id), doc);
            resolve();
          })
          .catch((err) => reject(err));
      });
    });
  }

  async deleteDocument(docType: string, id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.inBatch(() => {
        this.getDocument(docType, id)
          .then((prevDoc) => {
            if (!prevDoc) {
              resolve();
              return;
            }
            this.db.deleteDocument(typeId(docType, id));
            resolve();
          })
          .catch((err) => reject(err));
      });
    });
  }

  async deleteAll(docType?: string): Promise<Array<string>> {
    return new Promise((resolve) => {
      this.db.inBatch(() => {
        const docs = this.db.query({
          select: [QueryMeta.ID],
          where: docType ? [{ property: 'docType', comparison: 'equalTo', value: docType }] : [],
        });
        const ids: Array<string> = [];
        for (const doc of docs) {
          const id = doc.id;
          this.db.deleteDocument(id);
          ids.push(untypeId(docType, id));
        }
        resolve(ids);
      });
    });
  }
}

function typeId(docType: string, id: string) {
  if (/^[a-f0-9]{8}-[a-f0-9]{4}-[1-9][a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/.test(id)) {
    return id; // It is an UUID
  }
  return `${docType}#${id}`;
}

function untypeId(docType: string, typedId: string) {
  return typedId.replace(`${docType}#`, '');
}

export const pluginDB = new Database();

export class NotUniqueErr extends Error {
  constructor(ids: string | Array<string>) {
    super(
      typeof ids === 'string'
        ? `Document with id (${ids}) already exists (perhaps with a different doc type)`
        : `Documents with ids (${JSON.stringify(
            ids
          )}) already exist (perhaps with a different doc type). No change has been committed`
    );
  }
}

interface DbDocument {
  id?: string;
}
