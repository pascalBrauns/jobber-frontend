"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var react_redux_1 = require("react-redux");
var Format_1 = __importDefault(require("Utility/Format"));
var format = function (date) { return [
    Format_1.default.date(date),
    Format_1.default.time(date)
].join(' '); };
var Lifetime = function (props) {
    var wideScreen = useMediaQuery_1.default('(min-width: 1150px)');
    var lifetime = props.lifetime;
    return (react_1.default.createElement(TextField_1.default, { label: 'Start', value: lifetime && lifetime.start
            ? format(lifetime.start)
            : 'N/A', variant: 'filled', fullWidth: !wideScreen, disabled: true }));
};
var enhance = react_redux_1.connect(function (state) { return ({
    lifetime: state.Picker.Picked.job && state.Picker.Picked.job.lifetime
}); });
exports.default = enhance(Lifetime);
//# sourceMappingURL=Start.js.map