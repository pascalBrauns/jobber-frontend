"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Text = /** @class */ (function () {
    function Text() {
    }
    Text.capitalize = function (text) { return (text[0].toUpperCase() + text.substring(1)); };
    Text.beginsWith = function (text, pattern) { return (text.substring(pattern.length) === pattern); };
    return Text;
}());
exports.default = Text;
//# sourceMappingURL=Text.js.map