"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var App_1 = __importDefault(require("./App"));
var Picker_1 = __importDefault(require("./Picker"));
var WebSocket_1 = __importDefault(require("./WebSocket"));
var Global = redux_1.combineReducers({
    App: App_1.default,
    Picker: Picker_1.default,
    WebSocket: WebSocket_1.default
});
exports.default = Global;
//# sourceMappingURL=index.js.map