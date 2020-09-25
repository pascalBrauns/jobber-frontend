import { Epic } from 'Type/Redux';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf, Action as TAction } from 'typesafe-actions';
import * as Action from 'Store/Action/Picker';
import { Status } from 'Type/Job';
import { Observable } from 'rxjs';

const setGraphNodes: Epic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(Action.setGraphNodes)),
    switchMap(action => new Observable<TAction>(observer => {
      if (state$.value.WebSocket.socket) {
        const socket = state$.value.WebSocket.socket;
        action.payload.nodes.forEach(
          node => socket.on(`job/${node.id}/status`, ({ status }: { status: Status }) => {
            observer.next(Action.setGraphStatus({
              id: node.id,
              status
            }));
          })
        );
      }
    }))
  )
);

export default setGraphNodes;
