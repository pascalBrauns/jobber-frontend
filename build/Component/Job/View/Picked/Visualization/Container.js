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
var styled_components_1 = __importDefault(require("styled-components"));
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 835px;\n  box-sizing: border-box;\n  background: rgb(48, 48, 48);\n"], ["\n  width: 100%;\n  height: 835px;\n  box-sizing: border-box;\n  background: rgb(48, 48, 48);\n"])));
var Container = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledContainer, { id: 'visualization' }, children));
};
exports.default = Container;
var templateObject_1;
//# sourceMappingURL=Container.js.map