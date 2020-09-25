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
var initialState = __importStar(require("Constant/Picker/initialState"));
var Action = __importStar(require("Store/Action/Picker/Filter"));
var Filter = typesafe_actions_1.createReducer(initialState)
    .handleAction(Action.setTypes, function (state, action) { return (__assign(__assign({}, state), { types: action.payload.types })); })
    .handleAction(Action.setStatuses, function (state, action) { return (__assign(__assign({}, state), { statuses: action.payload.statuses })); })
    .handleAction(Action.setLifetime, function (state, action) { return (__assign(__assign({}, state), { lifetime: action.payload.lifetime })); })
    .handleAction(Action.setID, function (state, action) { return (__assign(__assign({}, state), { id: action.payload.id })); });
exports.default = Filter;
//# sourceMappingURL=Filter.js.map