"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("./Card"));
var List_1 = __importDefault(require("./List"));
var Filter_1 = __importDefault(require("./Filter"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var Picker = function () { return (react_1.default.createElement(Card_1.default, null,
    react_1.default.createElement(Filter_1.default, null),
    react_1.default.createElement(Divider_1.default, { orientation: 'vertical', style: { marginLeft: 15, marginRight: 15 } }),
    react_1.default.createElement(List_1.default, null))); };
exports.default = Picker;
//# sourceMappingURL=index.js.map