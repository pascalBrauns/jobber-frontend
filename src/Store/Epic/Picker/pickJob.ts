import { Epic } from 'Type/Redux';
import * as Action from 'Store/Action/Picker';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { concat, of } from 'rxjs';

const pickJob: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.pickJob)),
    switchMap(
      ({ payload: { job } }) => concat(
        of(Action.loadJob({ id: job.id })),
        of(Action.pickedJob({ job }))
      )
    )
  )
);

export default pickJob;
