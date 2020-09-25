"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var react_redux_1 = require("react-redux");
var Text_1 = __importDefault(require("Utility/Text"));
var Type = function (props) {
    var wideScreen = useMediaQuery_1.default('(min-width: 1150px)');
    var type = props.type;
    return (react_1.default.createElement(TextField_1.default, { label: 'Type', value: type ? Text_1.default.capitalize(type) : '', fullWidth: !wideScreen, variant: 'filled', disabled: true }));
};
var enhance = react_redux_1.connect(function (state) { return ({
    type: state.Picker.Picked.job && state.Picker.Picked.job.type
}); });
exports.default = enhance(Type);
//# sourceMappingURL=Type.js.map