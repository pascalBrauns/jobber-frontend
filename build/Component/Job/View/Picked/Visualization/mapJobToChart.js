"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapJobToGraph_1 = __importDefault(require("./mapJobToGraph"));
var mapGraphToChart_1 = __importDefault(require("./mapGraphToChart"));
var mapJobToChart = function (job) {
    console.log(job);
    var graph = mapJobToGraph_1.default(job);
    console.log(graph.map);
    var chart = mapGraphToChart_1.default(graph);
    return chart;
};
exports.default = mapJobToChart;
//# sourceMappingURL=mapJobToChart.js.map