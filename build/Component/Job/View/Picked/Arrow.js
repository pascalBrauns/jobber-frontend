"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrows = void 0;
var react_1 = __importDefault(require("react"));
var KeyboardArrowUp_1 = __importDefault(require("@material-ui/icons/KeyboardArrowUp"));
var KeyboardArrowDown_1 = __importDefault(require("@material-ui/icons/KeyboardArrowDown"));
var KeyboardArrowLeft_1 = __importDefault(require("@material-ui/icons/KeyboardArrowLeft"));
var KeyboardArrowRight_1 = __importDefault(require("@material-ui/icons/KeyboardArrowRight"));
exports.arrows = {
    up: KeyboardArrowUp_1.default,
    down: KeyboardArrowDown_1.default,
    left: KeyboardArrowLeft_1.default,
    right: KeyboardArrowRight_1.default,
};
var Arrow = function (_a) {
    var direction = _a.direction;
    var ArrowIcon = exports.arrows[direction];
    return (react_1.default.createElement(ArrowIcon, null));
};
exports.default = Arrow;
//# sourceMappingURL=Arrow.js.map