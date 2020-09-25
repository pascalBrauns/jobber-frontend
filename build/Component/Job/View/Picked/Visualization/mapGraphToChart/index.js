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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapNodeToChartNode_1 = __importDefault(require("./mapNodeToChartNode"));
var mapEdgeToLink_1 = __importDefault(require("./mapEdgeToLink"));
var offset = {
    x: 300,
    y: 200,
    base: {
        x: 50,
        y: 50
    }
};
var getDimensions = function (graph) { return ({
    x: graph.map.rows.reduce(function (width, row) { return (row.length > width
        ? row.length
        : width); }, 0),
    y: graph.map.rows.length
}); };
var getPosition = function (graph, node) {
    var rowIndex = graph.map.rows.findIndex(function (row) { return row.map(function (_a) {
        var id = _a.id;
        return id;
    }).includes(node.id); });
    var row = graph.map.rows[rowIndex];
    var columnIndex = row.findIndex(function (_a) {
        var id = _a.id;
        return id === node.id;
    });
    var column = row[columnIndex];
    var dimensions = getDimensions(graph);
    return {
        x: ((dimensions.x * offset.x - row.length * offset.x) / 2
            + columnIndex * offset.x
            + offset.base.x),
        y: rowIndex * offset.y + offset.base.x
    };
};
var mapGraphToChart = function (graph) { return ({
    offset: {
        x: 0,
        y: 0
    },
    nodes: graph.nodes.reduce(function (nodes, node) {
        var _a;
        return (__assign(__assign({}, nodes), (_a = {}, _a[node.id] = mapNodeToChartNode_1.default(node, getPosition(graph, node)), _a)));
    }, {}),
    links: graph.edges.map(mapEdgeToLink_1.default).reduce(function (links, _a) {
        var _b;
        var id = _a.id, rest = __rest(_a, ["id"]);
        return (__assign(__assign({}, links), (_b = {}, _b[id] = __assign({ id: id }, rest), _b)));
    }, {}),
    scale: 1,
    selected: {},
    hovered: {}
}); };
exports.default = mapGraphToChart;
//# sourceMappingURL=index.js.map