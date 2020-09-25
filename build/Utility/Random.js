"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.boolean = function () { return Boolean(Math.round(Math.random())); };
    Random.index = function (array) { return (Math.round(Math.random() * (array.length - 1))); };
    Random.number = function (minimum, maximum) { return (minimum + Math.round((maximum - minimum) * Math.random())); };
    return Random;
}());
exports.default = Random;
//# sourceMappingURL=Random.js.map