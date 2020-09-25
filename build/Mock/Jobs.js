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
exports.randomJobs = exports.randomJob = exports.randomBridge = exports.randomPipeline = exports.randomTask = exports.randomType = exports.randomId = void 0;
var Random_1 = __importDefault(require("Utility/Random"));
var maxAmount = 5;
var allStatuses = [
    'active',
    'canceled',
    'suspended',
    'planned',
    'completed'
];
var allTypes = [
    'task',
    'pipeline',
    'bridge'
];
var randomStatus = function () { return allStatuses[Random_1.default.index(allStatuses)]; };
var randomLifetime = function () { return ({
    start: new Date,
    end: Random_1.default.boolean() ? new Date : null
}); };
exports.randomId = function () { return Math.random().toString(36).substring(7); };
exports.randomType = function () { return allTypes[Random_1.default.index(allTypes)]; };
exports.randomTask = function () { return ({
    id: exports.randomId(),
    type: 'task',
    status: randomStatus(),
    lifetime: randomLifetime(),
    payload: '',
    logs: []
}); };
exports.randomPipeline = function (allowedDepth) { return ({
    id: exports.randomId(),
    type: 'pipeline',
    status: randomStatus(),
    lifetime: randomLifetime(),
    jobs: exports.randomJobs(allowedDepth)
}); };
exports.randomBridge = function (allowedDepth) { return ({
    id: exports.randomId(),
    type: 'bridge',
    status: randomStatus(),
    lifetime: randomLifetime(),
    jobs: exports.randomJobs(allowedDepth)
}); };
exports.randomJob = function (allowedDepth) {
    var type = exports.randomType();
    if (type === 'task' || allowedDepth === 1) {
        return exports.randomTask();
    }
    else if (type === 'pipeline') {
        return exports.randomPipeline(allowedDepth - 1);
    }
    else if (type === 'bridge') {
        return exports.randomBridge(allowedDepth - 1);
    }
    else {
        throw 'Invalid type';
    }
};
exports.randomJobs = function (allowedDepth) {
    if (allowedDepth === void 0) { allowedDepth = 4; }
    return (Array(Random_1.default.number(1, maxAmount))
        .fill(null)
        .map(function () { return exports.randomJob(allowedDepth); }));
};
exports.default = __spreadArrays([
    {
        type: 'bridge',
        status: randomStatus(),
        lifetime: randomLifetime(),
        id: exports.randomId(),
        jobs: [
            exports.randomTask(),
            exports.randomTask(),
            exports.randomTask(),
            {
                type: 'pipeline',
                status: randomStatus(),
                lifetime: randomLifetime(),
                id: exports.randomId(),
                jobs: [
                    exports.randomTask(),
                    exports.randomTask(),
                ]
            },
            {
                type: 'pipeline',
                status: randomStatus(),
                lifetime: randomLifetime(),
                id: exports.randomId(),
                jobs: [
                    exports.randomTask(),
                    exports.randomTask(),
                    {
                        type: 'bridge',
                        status: randomStatus(),
                        lifetime: randomLifetime(),
                        id: exports.randomId(),
                        jobs: [
                            exports.randomTask(),
                            {
                                type: 'pipeline',
                                status: randomStatus(),
                                lifetime: randomLifetime(),
                                id: exports.randomId(),
                                jobs: [
                                    exports.randomTask(),
                                    exports.randomTask(),
                                    exports.randomTask(),
                                    exports.randomTask(),
                                ]
                            }
                        ]
                    },
                    exports.randomTask(),
                ]
            }
        ]
    }
], Array(20).fill(null).map(exports.randomTask));
//# sourceMappingURL=Jobs.js.map