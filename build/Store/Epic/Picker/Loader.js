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
    return (action$.pipe(operators_1.filter(typesafe_actions_1.isActionOf(Action.loadJobs)), operators_1.switchMap(function () { return rxjs_1.from(loadJobs({
        statuses: state$.value.Picker.Filter.statuses,
        types: state$.value.Picker.Filter.types,
        start: state$.value.Picker.Filter.lifetime.start,
        end: state$.value.Picker.Filter.lifetime.end
    })).pipe(operators_1.switchMap(function (response) { return rxjs_1.of(Action.succeededToLoadJobs(response)); })); })));
};
exports.default = redux_observable_1.combineEpics(loadJobs);
//# sourceMappingURL=Loader.js.map