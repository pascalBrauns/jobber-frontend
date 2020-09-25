"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    root: {
        height: 54,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'rgb(39, 39, 39)',
        color: 'white'
    }
});
var Header = function () {
    var classes = useStyles();
    return (react_1.default.createElement(AppBar_1.default, { classes: classes },
        react_1.default.createElement("h3", null, "Jobber")));
};
exports.default = Header;
//# sourceMappingURL=index.js.map