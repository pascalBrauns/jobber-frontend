import { createReducer, ActionType } from 'typesafe-actions';
import * as Action from 'Store/Action/App';

export type State = {
  initialized: boolean;
}

export const initialState: State = {
  initialized: false
}

const App = createReducer<State, ActionType<typeof Action>>(initialState)
  .handleAction(
    Action.appInitialized,
    state => ({
      ...state,
      initialized: true
    })
  );

export default App;
