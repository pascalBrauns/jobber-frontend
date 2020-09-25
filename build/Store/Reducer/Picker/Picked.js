"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var typesafe_actions_1 = require("typesafe-actions");
var initialState = __importStar(require("Constant/Picked/initialState"));
var Action = __importStar(require("Store/Action/Picker/Picked"));
var Picked = typesafe_actions_1.createReducer(initialState)
    .handleAction(Action.setJob, function (state, _a) {
    var job = _a.payload.job;
    return (__assign(__assign({}, state), { job: job }));
})
    .handleAction(Action.setStatus, function (state, _a) {
    var status = _a.payload.status;
    return (__assign(__assign({}, state), { status: status }));
})
    .handleAction(Action.setLogs, function (state, _a) {
    var logs = _a.payload.logs;
    return (__assign(__assign({}, state), { logs: logs }));
})
    .handleAction(Action.setProgress, function (state, _a) {
    var progress = _a.payload.progress;
    return (__assign(__assign({}, state), { progress: progress }));
});
exports.default = Picked;
//# sourceMappingURL=Picked.js.map