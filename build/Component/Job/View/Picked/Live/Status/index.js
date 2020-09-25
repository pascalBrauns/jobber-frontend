"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var Container_1 = __importDefault(require("./Container"));
var Text_1 = __importDefault(require("./Text"));
var Status = function (_a) {
    var status = _a.status;
    return (react_1.default.createElement(Container_1.default, null,
        react_1.default.createElement(Text_1.default, null, status)));
};
var enhance = react_redux_1.connect(function (state) { return ({
    status: state.Picker.Picked.status
}); });
exports.default = enhance(Status);
//# sourceMappingURL=index.js.map