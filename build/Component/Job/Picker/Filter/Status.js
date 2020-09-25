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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var react_redux_1 = require("react-redux");
var Text_1 = __importDefault(require("Utility/Text"));
var Action = __importStar(require("Store/Action/Picker"));
var allStates = [
    'active', 'canceled', 'completed', 'suspended', 'planned'
];
var Status = function (props) {
    var statuses = props.statuses;
    var setStatuses = props.setStatuses;
    return (react_1.default.createElement(react_1.default.Fragment, null, allStates.map(function (status) { return (react_1.default.createElement(FormControlLabel_1.default, { key: status, style: { color: 'rgba(255, 255, 255, 0.6)' }, control: react_1.default.createElement(Checkbox_1.default, { checked: statuses.includes(status), onChange: function (_event, checked) { return setStatuses({
                statuses: (checked
                    ? __spreadArrays(statuses, [
                        status
                    ]) : statuses.filter(function (entry) { return entry !== status; }))
            }); }, size: 'small' }), label: Text_1.default.capitalize(status) })); })));
};
var enhance = react_redux_1.connect(function (state) { return ({
    statuses: state.Picker.Filter.statuses
}); }, Action);
exports.default = enhance(Status);
//# sourceMappingURL=Status.js.map