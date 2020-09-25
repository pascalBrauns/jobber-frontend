"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJob = exports.setStatus = exports.loadJob = exports.loadJobs = void 0;
var axios_1 = __importDefault(require("axios"));
var Query_1 = __importDefault(require("Mock/Query"));
var query = function (_a) {
    var statuses = _a.statuses, types = _a.types, lifetime = __rest(_a, ["statuses", "types"]);
    var parameters = [];
    var start = (lifetime.start
        ? "start=" + Math.round(lifetime.start.getTime() / 1000)
        : '');
    if (start) {
        parameters.push(start);
    }
    var end = (lifetime.end
        ? "end=" + Math.round(lifetime.end.getTime() / 1000)
        : '');
    if (end) {
        parameters.push(end);
    }
    var status = statuses.reduce(function (query, status) { return query + (query.length ? '&' : '') + ("status=" + status); }, '');
    if (status) {
        parameters.push(status);
    }
    var type = types.reduce(function (query, type) { return query + (query.length ? '&' : '') + ("type=" + type); }, '');
    if (type) {
        parameters.push(type);
    }
    if (parameters.length) {
        return "?" + parameters.join('&');
    }
    else {
        return '';
    }
};
exports.loadJobs = function (parameters) { return axios_1.default.get("/api/jobs" + query(parameters)); };
exports.loadJob = function (_a) {
    var id = _a.id;
    return (axios_1.default.get("/api/job/" + id));
};
exports.setStatus = function (_a) {
    var id = _a.id, status = _a.status;
    return (axios_1.default.post("/api/job/" + id + "/status/" + status));
};
exports.createJob = function () { return (axios_1.default.put("/api/job", Query_1.default)); };
//# sourceMappingURL=index.js.map