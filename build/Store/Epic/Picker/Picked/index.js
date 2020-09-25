"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var Log_1 = __importDefault(require("./Log"));
var Status_1 = __importDefault(require("./Status"));
var Progress_1 = __importDefault(require("./Progress"));
var Loader_1 = __importDefault(require("./Loader"));
exports.default = redux_observable_1.combineEpics(Log_1.default, Status_1.default, Progress_1.default, Loader_1.default);
//# sourceMappingURL=index.js.map