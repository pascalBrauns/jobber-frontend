"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var redux_observable_1 = require("redux-observable");
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("Store/Action/Picker"));
var subscribePicked = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var WebSocket = state$.value.WebSocket;
    if (WebSocket.socket && job) {
        var socket_1 = WebSocket.socket;
        var segments = ['status', 'progress', 'log'];
        segments.forEach(function (segment) { return socket_1.on("job/" + job.id + "/" + segment, console.log); });
    }
    return rxjs_1.EMPTY;
}))); };
var unsubscribePicked = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var _b = state$.value, WebSocket = _b.WebSocket, Picked = _b.Picker.Picked;
    if (WebSocket.socket && !job && Picked.job) {
        var socket_2 = WebSocket.socket;
        var segments = ['status', 'progress', 'log'];
        var job_1 = Picked.job;
        segments.forEach(function (segment) { return socket_2.off("job/" + job_1.id + "/" + segment); });
    }
    return rxjs_1.EMPTY;
}))); };
exports.default = redux_observable_1.combineEpics(subscribePicked, unsubscribePicked);
//# sourceMappingURL=Picked.js.map