"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Content = function (_a) {
    var node = _a.node;
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 90,
            width: 90,
            color: 'black',
            background: (node.properties.status === 'completed'
                ? 'linear-gradient(45deg, lightgreen 30%, yellow 90%)'
                : node.properties.status === 'planned'
                    ? 'linear-gradient(45deg, grey 30%, white 90%)'
                    : node.properties.status === 'active'
                        ? 'linear-gradient(45deg, #b38bf4 30%, #FE6B8B 90%)'
                        : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'),
            borderRadius: '100%'
        } }, node.id));
};
exports.default = Content;
//# sourceMappingURL=Content.js.map