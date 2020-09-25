import { Epic } from 'Type/Redux';
import * as Action from 'Store/Action/Picker';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { EMPTY } from 'rxjs';

const resumeJob: Epic = (action$, state$, { api }) => (
  action$.pipe(
    filter(isActionOf(Action.resumeJob)),
    switchMap(() => {
      if (state$.value.Picker.picked) {
        const id = state$.value.Picker.picked.id;
        api.resumeJob(id);
      }
      return EMPTY;
    })
  )
);

export default resumeJob;
