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
var pickers_1 = require("@material-ui/pickers");
require("date-fns");
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
var react_redux_1 = require("react-redux");
var Action = __importStar(require("Store/Action/Picker"));
var Lifetime = function (props) {
    var lifetime = props.lifetime;
    var setLifetime = props.setLifetime;
    return (react_1.default.createElement(pickers_1.MuiPickersUtilsProvider, { utils: date_fns_1.default },
        react_1.default.createElement(pickers_1.DateTimePicker, { variant: "inline", ampm: false, format: "dd.MM.yyyy HH:mm", margin: "normal", id: "date-picker-start", label: "Start", disableFuture: true, inputVariant: 'outlined', maxDate: lifetime.end, onChange: function (date) { return setLifetime({
                lifetime: {
                    start: date,
                    end: lifetime.end
                }
            }); }, value: lifetime.start }),
        react_1.default.createElement(pickers_1.DateTimePicker, { variant: "inline", ampm: false, format: "dd.MM.yyyy HH:mm", margin: "normal", id: "date-picker-end", label: "End", disableFuture: true, inputVariant: 'outlined', minDate: lifetime.start, onError: function () { return console.log('DIRTY'); }, onAccept: function () { return console.log('CLEAN'); }, onChange: function (date) { return setLifetime({
                lifetime: {
                    start: ((lifetime.start || new Date) > date
                        ? date
                        : (lifetime.start || new Date)),
                    end: date
                }
            }); }, value: lifetime.end })));
};
var enhance = react_redux_1.connect(function (state) { return ({
    lifetime: state.Picker.Filter.lifetime
}); }, Action);
exports.default = enhance(Lifetime);
//# sourceMappingURL=Lifetime.js.map