"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    root: {
        marginTop: 10,
        marginBottom: 10
    }
});
var StyledDivider = function () { return (react_1.default.createElement(Divider_1.default, { classes: useStyles(), variant: 'fullWidth' })); };
exports.default = StyledDivider;
//# sourceMappingURL=Divider.js.map