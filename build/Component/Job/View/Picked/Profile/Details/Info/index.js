"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(require("./Container"));
var Id_1 = __importDefault(require("Component/Job/View/Picked/Profile/Id"));
var Type_1 = __importDefault(require("Component/Job/View/Picked/Profile/Type"));
var Lifetime_1 = __importDefault(require("Component/Job/View/Picked/Profile/Lifetime"));
var Info = /** @class */ (function () {
    function Info() {
    }
    Info.Container = Container_1.default;
    Info.Id = Id_1.default;
    Info.Type = Type_1.default;
    Info.Lifetime = Lifetime_1.default;
    return Info;
}());
exports.default = Info;
//# sourceMappingURL=index.js.map