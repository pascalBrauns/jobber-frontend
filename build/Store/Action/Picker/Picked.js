"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProgress = exports.setLogs = exports.statusUpdated = exports.updateStatus = exports.setStatus = exports.setJob = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.setJob = (typesafe_actions_1.createAction('picked/SET_JOB')());
exports.setStatus = typesafe_actions_1.createAction('picked/SET_STATUS')();
exports.updateStatus = typesafe_actions_1.createAction('picked/UPDATE_STATUS')();
exports.statusUpdated = typesafe_actions_1.createAction('picked/STATUS_UPDATED')();
exports.setLogs = typesafe_actions_1.createAction('picked/SET_LOGS')();
exports.setProgress = (typesafe_actions_1.createAction('picked/SET_PROGRESS')());
//# sourceMappingURL=Picked.js.map