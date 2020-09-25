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
var Status_1 = __importDefault(require("./Status"));
var Type_1 = __importDefault(require("./Type"));
var Lifetime_1 = __importDefault(require("./Lifetime"));
var styled_components_1 = __importDefault(require("styled-components"));
var Divider_1 = __importDefault(require("../Divider"));
var Heading_1 = __importDefault(require("../Heading"));
var FilterContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var Filter = function () { return (react_1.default.createElement(FilterContainer, null,
    react_1.default.createElement(Heading_1.default, null, "STATUS"),
    react_1.default.createElement(Status_1.default, null),
    react_1.default.createElement(Divider_1.default, null),
    react_1.default.createElement(Heading_1.default, null, "TYPE"),
    react_1.default.createElement(Type_1.default, null),
    react_1.default.createElement(Divider_1.default, null),
    react_1.default.createElement(Heading_1.default, null, "LIFETIME"),
    react_1.default.createElement(Lifetime_1.default, null),
    react_1.default.createElement(Divider_1.default, null))); };
exports.default = Filter;
var templateObject_1;
//# sourceMappingURL=index.js.map