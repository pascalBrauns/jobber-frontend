import { createAction } from 'typesafe-actions';

export const connectSocket = createAction('websocket/CONNECT')();

export namespace socketConnected {
  export type Payload = {
    socket: SocketIOClient.Socket;
  }
}

export const socketConnected = (
  createAction('websocket/CONNECTED')<socketConnected.Payload>()
);
