"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRouteToEdges = void 0;
var mapJobToRoutes_1 = __importDefault(require("./mapJobToRoutes"));
exports.mapRouteToEdges = function (route) { return route.reduce(function (edges, task, index) {
    var nextIndex = index + 1;
    var nextTask = route[nextIndex] || null;
    if (nextTask) {
        return __spreadArrays(edges, [
            {
                from: {
                    id: task.id,
                    data: task
                },
                to: {
                    id: nextTask.id,
                    data: nextTask
                }
            }
        ]);
    }
    else {
        return edges;
    }
}, []); };
var mapRoutesToEdges = function (routes) { return routes.reduce(function (edges, route) { return __spreadArrays(edges, exports.mapRouteToEdges(route)); }, []); };
var mapJobToEdges = function (job) {
    if (job.type === 'task') {
        return [];
    }
    else {
        var routes = mapJobToRoutes_1.default(job);
        return mapRoutesToEdges(routes);
    }
};
exports.default = mapJobToEdges;
//# sourceMappingURL=mapJobToEdges.js.map