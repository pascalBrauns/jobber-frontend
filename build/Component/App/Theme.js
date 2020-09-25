"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Theme = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: styles_1.createMuiTheme({
            palette: {
                type: 'dark',
                primary: {
                    main: '#b38bf4'
                },
                secondary: {
                    main: '#b38bf4'
                }
            },
            typography: {
                fontFamily: [
                    'Roboto'
                ].join(',')
            }
        }) }, children));
};
exports.default = Theme;
//# sourceMappingURL=Theme.js.map