import { of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action/WebSocket';
import { Epic } from 'Type/Redux';
import io from 'socket.io-client';

const connectSocket: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.connectSocket)),
    switchMap(() => of(Action.socketConnected({
      socket: io.connect('http://localhost:3000')
    })))
  )
);

export default combineEpics(
  connectSocket
);
