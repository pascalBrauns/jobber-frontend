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
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Zoom_1 = __importDefault(require("@material-ui/core/Zoom"));
var ArrowButton_1 = __importDefault(require("../ArrowButton"));
var Styles_1 = __importDefault(require("./Styles"));
var useProfileStyles = styles_1.makeStyles(__assign(__assign({}, Styles_1.default), { root: __assign(__assign({}, Styles_1.default.root), { top: 100, right: 40 }) }));
var useVisualizationStyles = styles_1.makeStyles(__assign(__assign({}, Styles_1.default), { root: __assign(__assign({}, Styles_1.default.root), { bottom: 40, right: 40 }) }));
var Button = function (_a) {
    var onClick = _a.onClick, spotlight = _a.spotlight, hidden = _a.hidden;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Zoom_1.default, { in: spotlight === 'profile' },
            react_1.default.createElement(ArrowButton_1.default, { direction: 'down', classes: useVisualizationStyles(), onClick: onClick, label: hidden })),
        react_1.default.createElement(Zoom_1.default, { in: spotlight === 'visualization' },
            react_1.default.createElement(ArrowButton_1.default, { direction: 'up', classes: useProfileStyles(), onClick: onClick, label: hidden }))));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map