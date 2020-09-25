"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapJobToRoutes_1 = __importDefault(require("./mapJobToRoutes"));
var mapJobToOrigins = function (job) {
    if (job.type === 'task') {
        return [{ id: job.id, data: job }];
    }
    else {
        var routes = mapJobToRoutes_1.default(job);
        return Array.from(new Set(routes.map(function (route) { return route[0]; }))).map(function (task) { return ({
            id: task.id,
            data: task
        }); });
    }
};
exports.default = mapJobToOrigins;
//# sourceMappingURL=mapJobToOrigins.js.map