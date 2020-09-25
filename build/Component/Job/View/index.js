"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var Card_1 = __importDefault(require("./Card"));
var Picked_1 = __importDefault(require("./Picked"));
var New_1 = __importDefault(require("./New"));
var View = function (_a) {
    var picked = _a.picked;
    return (react_1.default.createElement(Card_1.default, null, picked
        ? react_1.default.createElement(Picked_1.default, null)
        : react_1.default.createElement(New_1.default, null)));
};
var enhance = react_redux_1.connect(function (state) { return ({
    picked: state.Picker.Picked.job
}); });
exports.default = enhance(View);
//# sourceMappingURL=index.js.map