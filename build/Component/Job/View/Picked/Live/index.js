"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Container_1 = __importDefault(require("./Container"));
var Progress_1 = __importDefault(require("./Progress"));
var Controls_1 = __importDefault(require("./Controls"));
var Status_1 = __importDefault(require("./Status"));
var Live = function () { return (react_1.default.createElement(Container_1.default, null,
    react_1.default.createElement(Progress_1.default, null),
    react_1.default.createElement(Status_1.default, null),
    react_1.default.createElement(Controls_1.default, null))); };
exports.default = Live;
//# sourceMappingURL=index.js.map