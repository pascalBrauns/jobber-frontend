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
var react_redux_1 = require("react-redux");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var PlayArrow_1 = __importDefault(require("@material-ui/icons/PlayArrow"));
var Pause_1 = __importDefault(require("@material-ui/icons/Pause"));
var Action = __importStar(require("Store/Action/Picker/Picked"));
var isDisabled = function (status) { return [
    'completed',
    'planned',
    'canceled',
].includes(status); };
var PlayPauseButton = function (_a) {
    var status = _a.status, props = __rest(_a, ["status"]);
    var updateStatus = props.updateStatus;
    return (status === 'active'
        ? (react_1.default.createElement(Button_1.default, { onClick: function () { return updateStatus({ status: 'suspended' }); } },
            react_1.default.createElement(Pause_1.default, null)))
        : (react_1.default.createElement(Button_1.default, { onClick: function () { return updateStatus({ status: 'active' }); }, disabled: isDisabled(status) },
            react_1.default.createElement(PlayArrow_1.default, null))));
};
var enhance = react_redux_1.connect(function (state) { return ({
    status: state.Picker.Picked.status
}); }, Action);
exports.default = enhance(PlayPauseButton);
//# sourceMappingURL=PlayPauseButton.js.map