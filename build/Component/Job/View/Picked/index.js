"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Visualization_1 = __importDefault(require("./Visualization"));
var Profile_1 = __importDefault(require("./Profile"));
var SwitchViewButton_1 = __importDefault(require("./SwitchViewButton"));
var Live_1 = __importDefault(require("./Live"));
var Header_1 = __importDefault(require("./Header"));
var Details = Profile_1.default.Details;
var Info = Details.Info, Logs = Details.Logs;
var Picked = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Profile_1.default.Container, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(Details.Container, null,
            react_1.default.createElement(Info.Container, null,
                react_1.default.createElement(Info.Id, null),
                react_1.default.createElement(Info.Type, null),
                react_1.default.createElement(Info.Lifetime.Start, null),
                react_1.default.createElement(Info.Lifetime.End, null)),
            react_1.default.createElement(Live_1.default, null)),
        react_1.default.createElement(Profile_1.default.Divider, null),
        react_1.default.createElement(Logs, null)),
    react_1.default.createElement(Visualization_1.default, null),
    react_1.default.createElement(SwitchViewButton_1.default, null))); };
exports.default = Picked;
//# sourceMappingURL=index.js.map