"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var Action = __importStar(require("Store/Action/App"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var styled_components_1 = __importDefault(require("styled-components"));
var SpinnerContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var App = function (_a) {
    var children = _a.children, initializeApp = _a.initializeApp, initialized = _a.initialized;
    react_1.useEffect(function () {
        if (!initialized) {
            initializeApp();
        }
    }, []);
    if (initialized) {
        return (react_1.default.createElement(react_1.default.Fragment, null, children));
    }
    else {
        return (react_1.default.createElement(SpinnerContainer, null,
            react_1.default.createElement(CircularProgress_1.default, { size: 100 })));
    }
};
var enhance = react_redux_1.connect(function (state) { return ({
    initialized: state.App.initialized
}); }, Action);
exports.default = enhance(App);
var templateObject_1;
//# sourceMappingURL=Loader.js.map