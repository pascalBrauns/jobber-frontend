import { combineReducers } from 'redux';
import App, { State as AppState } from './App';
import Picker, { State as PickerState } from './Picker';
import WebSocket, { State as WebSocketState } from './WebSocket';

export type State = {
  App: AppState;
  Picker: PickerState;
  WebSocket: WebSocketState;
};

const Global = combineReducers<State>({
  App,
  Picker,
  WebSocket
});

export default Global;
