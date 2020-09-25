"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Container_1 = __importDefault(require("./Container"));
var react_flow_chart_1 = require("@mrblenny/react-flow-chart");
var Components_1 = __importDefault(require("./Chart/Components"));
var react_redux_1 = require("react-redux");
var mapJobToChart_1 = __importDefault(require("./mapJobToChart"));
var Visualization = function (_a) {
    var picked = _a.picked;
    console.log({ picked: picked });
    return (react_1.default.createElement(Container_1.default, null, picked && (react_1.default.createElement(react_flow_chart_1.FlowChartWithState, { key: picked.id, Components: Components_1.default, initialValue: mapJobToChart_1.default(picked) }))));
};
var enhance = react_redux_1.connect(function (state) { return ({
    picked: state.Picker.Picked.job
}); });
exports.default = enhance(Visualization);
//# sourceMappingURL=index.js.map