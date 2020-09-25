"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var Text_1 = __importDefault(require("Utility/Text"));
var react_redux_1 = require("react-redux");
var Action = __importStar(require("Store/Action/Picker"));
var ID_1 = __importDefault(require("./ID"));
var Zoom_1 = __importDefault(require("@material-ui/core/Zoom"));
var Fab_1 = __importDefault(require("@material-ui/core/Fab"));
var Refresh_1 = __importDefault(require("@material-ui/icons/Refresh"));
var styles_1 = require("@material-ui/core/styles");
var ControlContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: row;\n  align-items: center;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"], ["\n  flex-direction: row;\n  align-items: center;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"])));
var useButtonStyles = styles_1.makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
});
var JobSelectionContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"])));
var JobListContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 90%;\n  overflow-y: scroll;\n"], ["\n  height: 90%;\n  overflow-y: scroll;\n"])));
var JobList = function (props) {
    var jobs = props.jobs;
    var picked = props.picked;
    var setJob = props.setJob;
    var loadJobs = props.loadJobs;
    react_1.useEffect(function () {
        loadJobs();
    }, []);
    return (react_1.default.createElement(JobSelectionContainer, null,
        react_1.default.createElement(ControlContainer, null,
            react_1.default.createElement(ID_1.default, null),
            react_1.default.createElement(Zoom_1.default, { in: true },
                react_1.default.createElement(Fab_1.default, { classes: useButtonStyles(), size: 'small', onClick: loadJobs },
                    react_1.default.createElement(Refresh_1.default, null)))),
        react_1.default.createElement(JobListContainer, null,
            react_1.default.createElement(List_1.default, null, jobs.map(function (job) { return (react_1.default.createElement(ListItem_1.default, { key: job.type + "-" + job.id, button: true, onClick: function () { return setJob({ job: job }); }, selected: Boolean(picked && (picked.id === job.id &&
                    picked.type === job.type)) },
                react_1.default.createElement(ListItemText_1.default, { primary: "#" + job.id, secondary: Text_1.default.capitalize(job.type) }))); })))));
};
var enhance = react_redux_1.connect(function (state) { return ({
    jobs: state.Picker.Loader.jobs,
    picked: state.Picker.Picked.job
}); }, Action);
exports.default = enhance(JobList);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=List.js.map