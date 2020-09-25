"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var styles_1 = require("@material-ui/core/styles");
var styled_components_1 = __importDefault(require("styled-components"));
var react_redux_1 = require("react-redux");
var useStyles = styles_1.makeStyles({
    root: {
        fontFamily: 'Menlo'
    }
});
var Title = styled_components_1.default.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: normal;\n"], ["\n  font-weight: normal;\n"])));
var Logs = function (props) {
    var logs = props.logs;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Title, null, "Logs"),
        react_1.default.createElement(TextField_1.default, { inputProps: {
                style: {
                    fontFamily: 'Menlo',
                    cursor: 'text'
                }
            }, classes: useStyles(), value: logs ? logs.join('\n') : '', disabled: true, multiline: true, variant: 'filled', fullWidth: true, rows: 12 })));
};
var enhance = react_redux_1.connect(function (state) { return ({
    logs: state.Picker.Picked.job && state.Picker.Picked.logs
}); });
exports.default = enhance(Logs);
var templateObject_1;
//# sourceMappingURL=Logs.js.map