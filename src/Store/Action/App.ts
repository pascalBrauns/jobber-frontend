import { createAction } from 'typesafe-actions';

export const initializeApp = createAction('app/INITIALIZE')();

export const appInitialized = createAction('app/INITIALIZED')();
