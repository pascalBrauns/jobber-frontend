"use strict";
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
var Button_1 = __importDefault(require("./Button"));
var ViewSwitchButtonFragment = function () {
    var _a = react_1.useState('profile'), spotlight = _a[0], setSpotlight = _a[1];
    var _b = react_1.useState('visualization'), hidden = _b[0], setHidden = _b[1];
    var toggleSpotlight = function () { return setSpotlight(hidden); };
    react_1.useEffect(function () {
        var view = document.querySelector("#" + hidden);
        if (view) {
            view.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setHidden(spotlight === 'profile'
            ? 'visualization'
            : 'profile');
    }, [spotlight]);
    return (react_1.default.createElement(Button_1.default, { spotlight: spotlight, hidden: hidden, onClick: toggleSpotlight }));
};
exports.default = ViewSwitchButtonFragment;
//# sourceMappingURL=index.js.map