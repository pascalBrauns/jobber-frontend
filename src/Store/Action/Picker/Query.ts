import { createAction } from 'typesafe-actions';
import { Query } from 'Type/Job';

namespace setQuery {
  export type Payload = {
    query: Query;
  }
}

export const setQuery = createAction('query/SET')<setQuery.Payload>();
