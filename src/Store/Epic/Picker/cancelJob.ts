import { Epic } from 'Type/Redux';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action/Picker';
import { EMPTY } from 'rxjs';

const cancelJob: Epic = (action$, state$, { api }) => (
  action$.pipe(
    filter(isActionOf(Action.cancelJob)),
    switchMap(() => {
      if (state$.value.Picker.picked) {
        const id = state$.value.Picker.picked.id;
        api.cancelJob(id);
      }
      return EMPTY;
    })
  )
);

export default cancelJob;
