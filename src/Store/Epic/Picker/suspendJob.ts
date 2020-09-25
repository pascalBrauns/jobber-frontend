import { Epic } from 'Type/Redux';
import { combineEpics } from 'redux-observable';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action/Picker';
import { of, EMPTY, from } from 'rxjs';

const suspendJob: Epic = (action$, state$, { api }) => (
  action$.pipe(
    filter(isActionOf(Action.suspendJob)),
    switchMap(() => {
      if (state$.value.Picker.picked) {
        const id = state$.value.Picker.picked.id;
        from(api.suspendJob(id));
      }
      return EMPTY;
    })
  )
);

export default combineEpics(
  suspendJob
);
