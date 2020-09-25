"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var Container_1 = __importDefault(require("./Container"));
var Text_1 = __importDefault(require("./Text"));
var react_redux_1 = require("react-redux");
var Progress = function (props) {
    var progress = props.progress;
    var job = props.job;
    var pending = progress ? progress.pending : 1;
    var completed = progress ? progress.completed : 0;
    var status = props.status;
    var text = (job
        ? job.type === 'task'
            ? (status === 'completed' ? 100 : Math.round(completed)) + "%"
            : completed + "/" + pending
        : '');
    return (react_1.default.createElement(Container_1.default, null,
        react_1.default.createElement(CircularProgress_1.default, { variant: 'determinate', value: status === 'completed' ? 100 : completed, size: 100 }),
        react_1.default.createElement(Text_1.default, null, text)));
};
var enhance = react_redux_1.connect(function (state) { return ({
    progress: state.Picker.Picked.progress,
    status: state.Picker.Picked.status,
    job: state.Picker.Picked.job
}); });
exports.default = enhance(Progress);
//# sourceMappingURL=index.js.map