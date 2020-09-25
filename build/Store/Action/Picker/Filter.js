"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setID = exports.setLifetime = exports.setStatuses = exports.setTypes = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.setTypes = (typesafe_actions_1.createAction('picker/SET_TYPES')());
exports.setStatuses = (typesafe_actions_1.createAction('picker/SET_STATUSES')());
exports.setLifetime = (typesafe_actions_1.createAction('picker/SET_LIFETIME')());
exports.setID = (typesafe_actions_1.createAction('picker/SET_ID')());
//# sourceMappingURL=Filter.js.map