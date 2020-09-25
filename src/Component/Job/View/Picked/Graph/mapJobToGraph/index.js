"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapJobToNodes_1 = __importDefault(require("./mapJobToNodes"));
var mapJobToOrigins_1 = __importDefault(require("./mapJobToOrigins"));
var mapJobToMap_1 = __importDefault(require("./mapJobToMap"));
var mapJobToEdges_1 = __importDefault(require("./mapJobToEdges"));
var mapJobToGraph = function (job) { return ({
    nodes: mapJobToNodes_1.default(job),
    edges: mapJobToEdges_1.default(job),
    origins: mapJobToOrigins_1.default(job),
    map: mapJobToMap_1.default(job)
}); };
exports.default = mapJobToGraph;
//# sourceMappingURL=index.js.map