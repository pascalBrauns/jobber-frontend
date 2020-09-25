"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var App_1 = __importDefault(require("Component/App"));
var Header_1 = __importDefault(require("Component/Header"));
var Content_1 = __importDefault(require("Component/Content"));
var Picker_1 = __importDefault(require("Component/Job/Picker"));
var View_1 = __importDefault(require("Component/Job/View"));
react_dom_1.render(react_1.default.createElement(App_1.default, null,
    react_1.default.createElement(Header_1.default, null),
    react_1.default.createElement(Content_1.default.Container, null,
        react_1.default.createElement(Picker_1.default, null),
        react_1.default.createElement(Content_1.default.Spacer, null),
        react_1.default.createElement(View_1.default, null))), document.getElementById('root'));
//# sourceMappingURL=index.js.map