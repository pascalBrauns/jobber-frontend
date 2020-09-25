"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketConnected = exports.connectSocket = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.connectSocket = typesafe_actions_1.createAction('websocket/CONNECT')();
exports.socketConnected = (typesafe_actions_1.createAction('websocket/CONNECTED')());
//# sourceMappingURL=WebSocket.js.map