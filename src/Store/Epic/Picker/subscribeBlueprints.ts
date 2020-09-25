import { Epic } from 'Type/Redux';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf, Action as TAction } from 'typesafe-actions';
import * as Action from 'Store/Action/Picker';
import { EMPTY, Observable, of } from 'rxjs';
import { combineEpics } from 'redux-observable';

const autoSubscribe: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.succeededToLoadBlueprints)),
    switchMap(({ payload: { data: blueprints } }) => of(
      Action.subscribeBlueprints({ blueprints })
    ))
  )
)

const subscribeBlueprints: Epic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(Action.subscribeBlueprints)),
    switchMap(({ payload: { blueprints } }) => new Observable<TAction>(
      observer => {
        if (state$.value.WebSocket.socket) {
          const { socket } = state$.value.WebSocket;
          blueprints.forEach(
            blueprint => socket.on(
              `blueprint/${blueprint.id}`,
              ({ message } : { message: string; }) => {
                if (message === 'removed') {
                  observer.next(Action.blueprintRemoved({ blueprint }));
                }
              }
            )
          );
        }
      }
    ))
  )
)

export default combineEpics(
  autoSubscribe,
  subscribeBlueprints
);
