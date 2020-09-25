"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Divider_1 = __importDefault(require("./Divider"));
var Container_1 = __importDefault(require("./Container"));
var Details_1 = __importDefault(require("./Details"));
var Profile = /** @class */ (function () {
    function Profile() {
    }
    Profile.Container = Container_1.default;
    Profile.Divider = Divider_1.default;
    Profile.Details = Details_1.default;
    return Profile;
}());
exports.default = Profile;
//# sourceMappingURL=index.js.map