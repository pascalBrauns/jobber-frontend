import { Query } from 'Type/Job';

export class Valid {
  private static task = (query: Query): boolean => (
    query.type && query.type === 'task' && typeof query.payload === 'string'
  );

  private static complex = (query: Query): boolean => (
    query.type &&
    (query.type === 'pipeline' || query.type === 'bridge') &&
    query.jobs && Array.isArray(query.jobs) &&
    query.jobs.every(Valid.job)
  );

  static job = (query: Query) => Boolean(
    query && (Valid.task(query) || Valid.complex(query))
  );
}
