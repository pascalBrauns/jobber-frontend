import { Epic } from 'Type/Redux';
import * as Action from 'Store/Action/Picker';
import { isActionOf } from 'typesafe-actions';
import { filter, switchMap, debounce } from 'rxjs/operators';
import { from, of, concat, EMPTY, timer } from 'rxjs';
import { Job, Blueprint } from 'Type/Job';
import { combineEpics } from 'redux-observable';

const createJob: Epic = (action$, state$, { api }) => (
  action$.pipe(
    filter(isActionOf(Action.createJob)),
    switchMap(() => from(api.createJob(state$.value.Picker.query)).pipe(
      switchMap(({ data: blueprint }) => of(Action.succeededToCreateJob({
        data: blueprint
      })))
    ))
  )
);

const pickIfExists = (jobs: Job[], blueprint: Blueprint) => {
  const job = jobs.find(({ id }) => id === blueprint.id) as Job
  if (job) {
    return of(Action.pickJob({ job }));
  }
  else {
    return EMPTY;
  }
}

const pickCreatedJob: Epic = (action$, state$, { api }) => (
  action$.pipe(
    filter(isActionOf(Action.succeededToCreateJob)),
    debounce(() => timer(200)),
    switchMap(({ payload: { data: blueprint } }) => from(api.loadJobs({
      statuses: state$.value.Picker.statuses,
      types: state$.value.Picker.types,
      start: state$.value.Picker.lifetime.start as Date,
      end: state$.value.Picker.lifetime.end as Date
    })).pipe(
      switchMap(({ data: jobs }) => concat(
        of(Action.succeededToLoadJobs({ data: jobs })),
        pickIfExists(jobs, blueprint)
      ))
    ))
  )
);

export const fetchAfterRemove: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.blueprintRemoved)),
    switchMap(() => of(Action.loadJobs()))
  )
);

export default combineEpics(
  createJob,
  pickCreatedJob,
  fetchAfterRemove
);
