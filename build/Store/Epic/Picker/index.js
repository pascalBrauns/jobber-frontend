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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var Loader_1 = __importDefault(require("./Loader"));
var Picked_1 = __importDefault(require("./Picked"));
var Action = __importStar(require("Store/Action/Picker"));
var typesafe_actions_1 = require("typesafe-actions");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var createJob = function (action$, _state$, _a) {
    var api = _a.api;
    return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.createJob)), operators_1.switchMap(function () {
        rxjs_1.from(api.createJob());
        return rxjs_1.EMPTY;
    })));
};
var Picker = redux_observable_1.combineEpics(createJob, Loader_1.default, Picked_1.default);
exports.default = Picker;
//# sourceMappingURL=index.js.map