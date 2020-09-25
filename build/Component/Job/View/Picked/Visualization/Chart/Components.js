"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = __importDefault(require("./Canvas"));
var Node_1 = __importDefault(require("./Node"));
var Components = {
    Node: Node_1.default.Container,
    NodeInner: Node_1.default.Content,
    CanvasOuter: Canvas_1.default.Container
};
exports.default = Components;
//# sourceMappingURL=Components.js.map