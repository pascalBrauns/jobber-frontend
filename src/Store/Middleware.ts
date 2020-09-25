import * as api from 'Api';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { EpicMiddleware } from 'Type/Redux';
import epic from 'Store/Epic';

export const epicMiddleware: EpicMiddleware = createEpicMiddleware({
  dependencies: {
    api
  }
});

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const storeEnhancer = applyMiddleware(epicMiddleware);
const middleware = composeEnhancers(storeEnhancer);
export const start = () => epicMiddleware.run(epic);
export default middleware;
