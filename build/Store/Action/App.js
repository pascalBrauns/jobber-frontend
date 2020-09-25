"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInitialized = exports.initializeApp = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.initializeApp = typesafe_actions_1.createAction('app/INITIALIZE')();
exports.appInitialized = typesafe_actions_1.createAction('app/INITIALIZED')();
//# sourceMappingURL=App.js.map