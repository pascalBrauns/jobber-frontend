"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Format = /** @class */ (function () {
    function Format() {
    }
    Format.digits = function (text, count, fill) { return (Array(count - text.length).fill(null).map(function () { return fill; }) + text); };
    Format.time = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        return [
            hours.toString(),
            minutes.toString()
        ].map(function (text) { return Format.digits(text, 2, '0'); }).join(':');
    };
    Format.date = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return __spreadArrays([
            day.toString(),
            month.toString()
        ].map(function (text) { return Format.digits(text, 2, '0'); }), [
            year,
        ]).join('.');
    };
    return Format;
}());
exports.default = Format;
//# sourceMappingURL=Format.js.map