"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(require("./Container"));
var Info_1 = __importDefault(require("./Info"));
var Logs_1 = __importDefault(require("Component/Job/View/Picked/Profile/Logs"));
var Details = /** @class */ (function () {
    function Details() {
    }
    Details.Container = Container_1.default;
    Details.Info = Info_1.default;
    Details.Logs = Logs_1.default;
    return Details;
}());
exports.default = Details;
//# sourceMappingURL=index.js.map