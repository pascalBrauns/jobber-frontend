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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Styles_1 = __importDefault(require("Component/Card/Styles"));
var ViewCardStyles = __assign(__assign({}, Styles_1.default), { root: __assign(__assign({}, Styles_1.default.root), { width: '100%', height: 835, display: 'flex' }) });
exports.default = ViewCardStyles;
//# sourceMappingURL=Styles.js.map