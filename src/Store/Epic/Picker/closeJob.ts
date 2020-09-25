import { Epic } from 'Type/Redux';
import * as Action from 'Store/Action/Picker';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { EMPTY } from 'rxjs';

const closeJob: Epic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(Action.closeJob)),
    switchMap(() => {
      if (state$.value.WebSocket.socket) {
        state$.value.WebSocket.socket.removeAllListeners();
      }
      return EMPTY;
    })
  )
);

export default closeJob;
