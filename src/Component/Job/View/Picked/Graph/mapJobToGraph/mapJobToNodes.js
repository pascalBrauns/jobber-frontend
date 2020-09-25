"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapJobToTasks = function (job) {
    if (job.type === 'task') {
        return [job];
    }
    else {
        return mapJobListToTasks(job.jobs);
    }
};
var mapJobListToTasks = function (jobs) { return (jobs.reduce(function (tasks, job) { return __spreadArrays(tasks, mapJobToTasks(job)); }, [])); };
var mapTaskToNode = function (task) { return ({
    id: task.id,
    data: task
}); };
var mapJobToNodes = function (job) { return (mapJobToTasks(job).map(mapTaskToNode)); };
exports.default = mapJobToNodes;
//# sourceMappingURL=mapJobToNodes.js.map