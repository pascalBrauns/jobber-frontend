"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(require("./Container"));
var Content_1 = __importDefault(require("./Content"));
var Node = /** @class */ (function () {
    function Node() {
    }
    Node.Container = Container_1.default;
    Node.Content = Content_1.default;
    return Node;
}());
exports.default = Node;
//# sourceMappingURL=index.js.map