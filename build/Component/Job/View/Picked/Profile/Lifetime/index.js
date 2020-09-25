"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Start_1 = __importDefault(require("./Start"));
var End_1 = __importDefault(require("./End"));
var Lifetime = /** @class */ (function () {
    function Lifetime() {
    }
    Lifetime.Start = Start_1.default;
    Lifetime.End = End_1.default;
    return Lifetime;
}());
exports.default = Lifetime;
//# sourceMappingURL=index.js.map