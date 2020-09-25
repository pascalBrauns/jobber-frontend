"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Container_1 = __importDefault(require("./Container"));
var Title_1 = __importDefault(require("./Title"));
var CloseButton_1 = __importDefault(require("./CloseButton"));
var Header = function () { return (react_1.default.createElement(Container_1.default, null,
    react_1.default.createElement(Title_1.default, null, "Job"),
    react_1.default.createElement(CloseButton_1.default, null))); };
exports.default = Header;
//# sourceMappingURL=index.js.map