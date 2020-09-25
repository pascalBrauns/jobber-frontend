import { from, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action/Picker';
import { Epic } from 'Type/Redux';

const loadJobs: Epic = (action$, state$, { api: { loadJobs } }) => (
  action$.pipe(
    filter(isActionOf([
      Action.loadJobs,
      Action.setTypes,
      Action.setStatuses,
      Action.setPickerLifetime
    ])),
    switchMap(
      () => from(
        loadJobs({
          statuses: state$.value.Picker.statuses,
          types: state$.value.Picker.types,
          start: state$.value.Picker.lifetime.start as Date,
          end: state$.value.Picker.lifetime.end as Date
        })
      ).pipe(
        switchMap(response => of(Action.succeededToLoadJobs(response)))
      )
    )
  )
);

export default combineEpics(
  loadJobs
);
