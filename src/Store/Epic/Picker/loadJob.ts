import { combineEpics } from 'redux-observable';
import { Epic } from 'Type/Redux';
import * as Action from 'Store/Action/Picker/Picked';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';

const loadJob: Epic = (action$, _state$, { api }) => (
  action$.pipe(
    filter(isActionOf(Action.loadJob)),
    switchMap(
      ({ payload: { id } }) => from(api.loadJob({ id })).pipe(
        switchMap(
          ({ data: job }) => of(Action.setJob({ job }))
        )
      )
    )
  )
);

export default combineEpics(
  loadJob
);
