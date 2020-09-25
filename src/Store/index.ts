import { createStore } from 'redux';
import root from './Reducer';
import middleware, { start } from './Middleware';

const store = createStore(root, middleware);
start();

export default store;
