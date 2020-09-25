import { combineEpics } from 'redux-observable';
import { Epic } from 'Type/Redux';
import { isActionOf, Action as TAction } from 'typesafe-actions';
import * as Action from 'Store/Action/Picker';
import { filter, switchMap } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';
import { Progress, Status } from 'Type/Job';
import mapJobToNodes from 'Component/Job/View/Picked/Graph/mapJobToGraph/mapJobToNodes';

const setJob: Epic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(Action.setJob)),
    switchMap(
      action => merge(
        new Observable<TAction>(observer => {
          if (state$.value.WebSocket.socket) {
            const socket = state$.value.WebSocket.socket;
            const job = action.payload.job;
            const nodes = mapJobToNodes(job);
            socket.removeAllListeners();
            observer.next(Action.setGraphNodes({ nodes }));
            socket.on(`job/${job.id}/progress`, (progress: Progress) => {
              observer.next(Action.setProgress({ progress }));
            });
            socket.on(`job/${job.id}/status`, ({ status }: { status: Status; }) => {
              observer.next(Action.setStatus({ status }));
              if (status === 'completed' && state$.value.Picker.picked) {
                observer.next(Action.setLifetime({
                  lifetime: {
                    ...state$.value.Picker.picked.lifetime,
                    end: new Date
                  }
                }));
              }
            });
            socket.on(`job/${job.id}/log`, ({ message }: { message: string }) => {
              if (state$.value.Picker.picked) {
                const { picked } = state$.value.Picker;
                if (picked.type === 'task') {
                  observer.next(Action.setLogs({
                    messages: [
                      ...picked.logs,
                      message
                    ]
                  }));
                }
              }
            });
          }
        }),
        of(Action.subscribeBlueprints({
          blueprints: state$.value.Picker.blueprints
        }))
      )
    )
  )
);

export default combineEpics(
  setJob
);
