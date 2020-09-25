import { createReducer, ActionType } from 'typesafe-actions';
import * as Action from 'Store/Action/WebSocket';

export type State = {
  socket: SocketIOClient.Socket | null;
}

export const initialState: State = {
  socket: null
}

const WebSocket = createReducer<State, ActionType<typeof Action>>(initialState)
  .handleAction(
    Action.socketConnected,
    (state, action) => ({
      ...state,
      socket: action.payload.socket
    })
  );

export default WebSocket;
