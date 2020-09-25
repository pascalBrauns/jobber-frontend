"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapNodeToChartNode = function (node, position) {
    var _a;
    return ({
        id: node.id,
        type: "output-only",
        readonly: true,
        position: position,
        properties: node.data,
        ports: (_a = {},
            _a[node.id + "-in"] = {
                id: node.id + "-in",
                type: "input"
            },
            _a[node.id + "-out"] = {
                id: node.id + "-out",
                type: "output"
            },
            _a)
    });
};
exports.default = mapNodeToChartNode;
//# sourceMappingURL=mapNodeToChartNode.js.map