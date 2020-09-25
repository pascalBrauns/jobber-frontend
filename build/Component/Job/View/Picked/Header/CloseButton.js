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
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var react_redux_1 = require("react-redux");
var Action = __importStar(require("Store/Action/Picker/Picked"));
var CloseButton = function (props) {
    var setJob = props.setJob;
    return (react_1.default.createElement(Button_1.default, { onClick: function () { return setJob({ job: null }); } },
        react_1.default.createElement(Close_1.default, null)));
};
var enhance = react_redux_1.connect(null, Action);
exports.default = enhance(CloseButton);
//# sourceMappingURL=CloseButton.js.map