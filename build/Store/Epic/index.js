"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var Picker_1 = __importDefault(require("./Picker"));
var WebSocket_1 = __importDefault(require("./WebSocket"));
var App_1 = __importDefault(require("./App"));
exports.default = redux_observable_1.combineEpics(App_1.default, Picker_1.default, WebSocket_1.default);
//# sourceMappingURL=index.js.map