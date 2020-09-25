"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapEdgeToLink = function (_a) {
    var from = _a.from, to = _a.to;
    return ({
        id: from.id + "-" + to.id,
        from: {
            nodeId: from.id,
            portId: from.id + "-out"
        },
        to: {
            nodeId: to.id,
            portId: to.id + "-in"
        }
    });
};
exports.default = mapEdgeToLink;
//# sourceMappingURL=mapEdgeToLink.js.map