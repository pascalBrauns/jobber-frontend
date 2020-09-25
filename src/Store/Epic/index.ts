import { combineEpics } from 'redux-observable';
import Picker from './Picker';
import WebSocket from './WebSocket';
import App from './App';

export default combineEpics(
  App,
  Picker,
  WebSocket
);
