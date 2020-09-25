"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Fab_1 = __importDefault(require("@material-ui/core/Fab"));
var Arrow_1 = __importDefault(require("./Arrow"));
var ArrowButton = function (_a) {
    var direction = _a.direction, onClick = _a.onClick, label = _a.label, rest = __rest(_a, ["direction", "onClick", "label"]);
    return (react_1.default.createElement(Fab_1.default, __assign({ size: 'small', variant: 'extended', color: 'default', onClick: onClick }, rest),
        react_1.default.createElement(Arrow_1.default, { direction: direction }),
        label || null));
};
exports.default = ArrowButton;
//# sourceMappingURL=ArrowButton.js.map