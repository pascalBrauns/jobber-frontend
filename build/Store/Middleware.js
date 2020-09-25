"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.epicMiddleware = void 0;
var api = __importStar(require("Api"));
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_observable_1 = require("redux-observable");
var Epic_1 = __importDefault(require("Store/Epic"));
exports.epicMiddleware = redux_observable_1.createEpicMiddleware({
    dependencies: {
        api: api
    }
});
var composeEnhancers = redux_devtools_extension_1.composeWithDevTools({});
var storeEnhancer = redux_1.applyMiddleware(exports.epicMiddleware);
var middleware = composeEnhancers(storeEnhancer);
exports.start = function () { return exports.epicMiddleware.run(Epic_1.default); };
exports.default = middleware;
//# sourceMappingURL=Middleware.js.map