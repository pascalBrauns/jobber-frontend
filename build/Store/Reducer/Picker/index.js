"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Filter_1 = __importDefault(require("./Filter"));
var Picked_1 = __importDefault(require("./Picked"));
var Loader_1 = __importDefault(require("./Loader"));
var redux_1 = require("redux");
var Picker = redux_1.combineReducers({
    Filter: Filter_1.default,
    Picked: Picked_1.default,
    Loader: Loader_1.default
});
exports.default = Picker;
//# sourceMappingURL=index.js.map