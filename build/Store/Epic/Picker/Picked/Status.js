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
var Action = __importStar(require("Store/Action/Picker/Picked"));
var subscribeStatus = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var WebSocket = state$.value.WebSocket;
    if (WebSocket.socket && job) {
        var socket_1 = WebSocket.socket;
        return new rxjs_1.Observable(function (observer) {
            socket_1.on("job/" + job.id + "/status", function (_a) {
                var status = _a.status;
                return observer.next(Action.setStatus({ status: status }));
            });
        });
    }
    return rxjs_1.EMPTY;
}))); };
var unsubscribeStatus = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var _b = state$.value, WebSocket = _b.WebSocket, Picked = _b.Picker.Picked;
    if (WebSocket.socket && !job && Picked.job) {
        var socket = WebSocket.socket;
        var job_1 = Picked.job;
        socket.off("job/" + job_1.id + "/status");
    }
    return rxjs_1.EMPTY;
}))); };
var updateStatus = function (action$, state$, _a) {
    var api = _a.api;
    return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.updateStatus)), operators_1.switchMap(function (_a) {
        var status = _a.payload.status;
        return (state$.value.Picker.Picked.job
            ? rxjs_1.from(api.setStatus({
                status: status,
                id: state$.value.Picker.Picked.job.id
            })).pipe(operators_1.switchMap(function () { return rxjs_1.of(Action.statusUpdated()); }))
            : rxjs_1.EMPTY);
    })));
};
var reloadUpdatedJob = function (action$, state$, _a) {
    var api = _a.api;
    return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.statusUpdated)), operators_1.switchMap(function () { return rxjs_1.from(api.loadJob({
        id: state$.value.Picker.Picked.job.id
    })).pipe(operators_1.switchMap(function (_a) {
        var job = _a.data;
        return rxjs_1.of(Action.setStatus({ status: job.status }));
    })); })));
};
exports.default = redux_observable_1.combineEpics(subscribeStatus, unsubscribeStatus, updateStatus, reloadUpdatedJob);
//# sourceMappingURL=Status.js.map