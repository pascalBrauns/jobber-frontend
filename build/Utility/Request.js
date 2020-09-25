"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var Request = /** @class */ (function () {
    function Request() {
    }
    Request.createActions = function (constant) { return ({
        call: typesafe_actions_1.createAction("request/LOAD_" + constant)(),
        success: typesafe_actions_1.createAction("request/SUCCEEDED_TO_LOAD_" + constant)(),
        fail: typesafe_actions_1.createAction("request/FAILED_TO_LOAD_" + constant)()
    }); };
    return Request;
}());
exports.default = Request;
//# sourceMappingURL=Request.js.map