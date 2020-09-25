"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapJobToRoutes_1 = __importDefault(require("./mapJobToRoutes"));
var mapJobToNodes_1 = __importDefault(require("./mapJobToNodes"));
var mapJobToMap = function (job) {
    if (job.type === 'task') {
        return {
            rows: [
                [{ id: job.id, data: job }]
            ],
            dimensions: {
                x: 1, y: 1
            }
        };
    }
    else {
        var routes_1 = mapJobToRoutes_1.default(job);
        var nodes_1 = mapJobToNodes_1.default(job);
        var longest = Math.max.apply(Math, routes_1.map(function (route) { return route.length; }));
        var mapNodeToRowIndex_1 = function (node) { return routes_1.reduce(function (maxIndex, route) {
            var indexInRoute = route.map(function (_a) {
                var id = _a.id;
                return id;
            }).indexOf(node.id);
            return (indexInRoute > maxIndex
                ? indexInRoute
                : maxIndex);
        }, 0); };
        var mapIndexToRow_1 = function (index) { return nodes_1.filter(function (node) { return mapNodeToRowIndex_1(node) === index; }); };
        var rows = Array(longest).fill(null).map(function (_, index) { return mapIndexToRow_1(index); });
        return {
            rows: rows,
            dimensions: {
                x: rows.reduce(function (maxRow, row) { return (row.length > maxRow
                    ? row.length
                    : maxRow); }, 0),
                y: longest
            }
        };
    }
};
exports.default = mapJobToMap;
//# sourceMappingURL=mapJobToMap.js.map