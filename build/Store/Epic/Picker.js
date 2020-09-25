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
var loadJobs = function (action$, state$, _a) {
    var loadJobs = _a.api.loadJobs;
    return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.loadJobs)), operators_1.switchMap(function () { return rxjs_1.from(loadJobs({ filter: state$.value.Picker.Filter })).pipe(operators_1.switchMap(function (response) { return rxjs_1.of(Action.succeededToLoadJobs(response)); })); })));
};
var subscribePicked = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var WebSocket = state$.value.WebSocket;
    if (WebSocket.socket) {
        var socket_1 = WebSocket.socket;
        var segments = ['status', 'progress', 'log'];
        if (job) {
            segments.forEach(function (segment) { return socket_1.on("job/" + job.id + "/" + segment, console.log); });
        }
    }
    return rxjs_1.EMPTY;
}))); };
var unsubscribePicked = function (action$, state$) { return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.setJob)), operators_1.switchMap(function (_a) {
    var job = _a.payload.job;
    var _b = state$.value, WebSocket = _b.WebSocket, Picked = _b.Picker.Picked;
    if (WebSocket.socket) {
        var socket_2 = WebSocket.socket;
        var segments = ['status', 'progress', 'log'];
        if (!job && Picked.job) {
            var job_1 = Picked.job;
            segments.forEach(function (segment) { return socket_2.off("job/" + job_1.id + "/" + segment); });
        }
    }
    return rxjs_1.EMPTY;
}))); };
exports.default = redux_observable_1.combineEpics(loadJobs, subscribePicked, unsubscribePicked);
//# sourceMappingURL=Picker.js.map