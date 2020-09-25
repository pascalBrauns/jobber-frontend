"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Theme_1 = __importDefault(require("./Theme"));
var react_redux_1 = require("react-redux");
var Store_1 = __importDefault(require("Store"));
var Container_1 = __importDefault(require("./Container"));
var Loader_1 = __importDefault(require("./Loader"));
var App = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_redux_1.Provider, { store: Store_1.default },
        react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement(Theme_1.default, null,
                react_1.default.createElement(Loader_1.default, null, children)))));
};
exports.default = App;
//# sourceMappingURL=index.js.map