"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var combineRoutes = function () {
    var routes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        routes[_i] = arguments[_i];
    }
    return routes.reduce(function (combined, route) { return __spreadArrays(combined, route); }, []);
};
var connectRoutesToOrigins = function (origins, routes) { return routes.reduce(function (combined, route) { return __spreadArrays(combined, origins.map(function (origin) { return combineRoutes(origin, route); })); }, []); };
var mapPipelineToRoutes = function (_a) {
    var jobs = _a.jobs;
    return jobs.reduce(function (origins, job) {
        if (job.type === 'task') {
            if (origins.length) {
                return origins.map(function (origin) { return __spreadArrays(origin, [
                    job
                ]); });
            }
            else {
                return [
                    [job]
                ];
            }
        }
        else {
            var routes = (job.type === 'pipeline'
                ? mapPipelineToRoutes(job)
                : mapBridgeToRoutes(job));
            if (origins.length) {
                return connectRoutesToOrigins(origins, routes);
            }
            else {
                return routes;
            }
        }
    }, []);
};
var mapBridgeToRoutes = function (_a) {
    var jobs = _a.jobs;
    return jobs.reduce(function (origins, job) {
        if (job.type === 'task') {
            return __spreadArrays(origins, [
                [job]
            ]);
        }
        else {
            var routes = (job.type === 'pipeline'
                ? mapPipelineToRoutes(job)
                : mapBridgeToRoutes(job));
            return __spreadArrays(origins, routes);
        }
    }, []);
};
var mapJobToRoutes = function (job) {
    if (job.type === 'pipeline') {
        return mapPipelineToRoutes(job);
    }
    else {
        return mapBridgeToRoutes(job);
    }
};
exports.default = mapJobToRoutes;
//# sourceMappingURL=mapJobToRoutes.js.map