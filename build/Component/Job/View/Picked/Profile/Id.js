"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var react_redux_1 = require("react-redux");
var Id = function (_a) {
    var id = _a.id;
    var wideScreen = useMediaQuery_1.default('(min-width: 1150px)');
    return (react_1.default.createElement(TextField_1.default, { label: 'ID', fullWidth: !wideScreen, value: id || '', variant: 'filled', disabled: true }));
};
var enhance = react_redux_1.connect(function (state) { return ({
    id: state.Picker.Picked.job && state.Picker.Picked.job.id
}); });
exports.default = enhance(Id);
//# sourceMappingURL=Id.js.map