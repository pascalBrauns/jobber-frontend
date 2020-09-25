import { Epic } from 'Type/Redux';
import * as Action from 'Store/Action/Picker';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';

const loadBlueprints: Epic = (action$, _state$, { api }) => (
  action$.pipe(
    filter(isActionOf(Action.loadBlueprints)),
    switchMap(() => from(api.loadBlueprints()).pipe(
      switchMap(({ data: blueprints }) => of(Action.succeededToLoadBlueprints({
        data: blueprints
      })))
    ))
  )
);

export default loadBlueprints;
