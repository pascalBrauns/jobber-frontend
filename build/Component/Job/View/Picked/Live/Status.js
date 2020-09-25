"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var styled_components_1 = __importDefault(require("styled-components"));
var Text = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: normal;\n  font-size: 25px;\n"], ["\n  font-weight: normal;\n  font-size: 25px;\n"])));
var Status = function (_a) {
    var status = _a.status;
    return (react_1.default.createElement(Text, null, status));
};
var enhance = react_redux_1.connect(function (state) { return ({
    status: state.Picker.Picked.status
}); });
exports.default = enhance(Status);
var templateObject_1;
//# sourceMappingURL=Status.js.map