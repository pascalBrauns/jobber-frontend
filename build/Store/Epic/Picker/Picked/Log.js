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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var redux_observable_1 = require("redux-observable");
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("Store/Action/Picker/Picked"));
var subscribeLogs = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var WebSocket = state$.value.WebSocket;
    if (WebSocket.socket && job) {
        var socket_1 = WebSocket.socket;
        return new rxjs_1.Observable(function (observer) {
            socket_1.on("job/" + job.id + "/log", function (_a) {
                var message = _a.message;
                return observer.next(Action.setLogs({
                    logs: __spreadArrays(state$.value.Picker.Picked.logs, [
                        message
                    ])
                }));
            });
        });
    }
    return rxjs_1.EMPTY;
}))); };
var unsubscribeLogs = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var _b = state$.value, WebSocket = _b.WebSocket, Picked = _b.Picker.Picked;
    if (WebSocket.socket && !job && Picked.job) {
        var socket = WebSocket.socket;
        var job_1 = Picked.job;
        socket.off("job/" + job_1.id + "/log");
    }
    return rxjs_1.EMPTY;
}))); };
exports.default = redux_observable_1.combineEpics(subscribeLogs, unsubscribeLogs);
//# sourceMappingURL=Log.js.map