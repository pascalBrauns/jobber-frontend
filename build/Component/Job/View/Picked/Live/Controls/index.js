"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Container_1 = __importDefault(require("./Container"));
var PlayPauseButton_1 = __importDefault(require("./PlayPauseButton"));
var StopButton_1 = __importDefault(require("./StopButton"));
var Controls = function () { return (react_1.default.createElement(Container_1.default, null,
    react_1.default.createElement(PlayPauseButton_1.default, null),
    react_1.default.createElement(StopButton_1.default, null))); };
exports.default = Controls;
//# sourceMappingURL=index.js.map