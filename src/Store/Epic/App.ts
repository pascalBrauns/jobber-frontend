import { of, concat } from 'rxjs';
import { switchMap, filter, delay } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { Epic } from 'Type/Redux';

const initializeApp: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.initializeApp)),
    switchMap(() => concat(
      of(Action.connectSocket())
    ))
  )
);

const completeInitialization: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.socketConnected)),
    delay(1300),
    switchMap(() => of(Action.appInitialized()))
  )
)

export default combineEpics(
  initializeApp,
  completeInitialization
);
