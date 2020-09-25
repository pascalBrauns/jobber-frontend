"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.succeededToLoadJobs = exports.failedToloadJobs = exports.loadJobs = void 0;
var Request_1 = __importDefault(require("Utility/Request"));
exports.loadJobs = (_a = Request_1.default.createActions('JOBS'), _a.call), exports.failedToloadJobs = _a.fail, exports.succeededToLoadJobs = _a.success;
//# sourceMappingURL=Loader.js.map