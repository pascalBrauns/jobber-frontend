import { combineEpics } from 'redux-observable';
import createJob from './createJob';
import loadJobs from './loadJobs';
import loadJob from './loadJob';
import pickJob from './pickJob';
import setJob from './setJob';
import suspendJob from './suspendJob';
import resumeJob from './resumeJob';
import cancelJob from './cancelJob';
import setGraphNodes from './setGraphNodes';
import loadBlueprints from './loadBlueprints';
import subscribeBlueprints from './subscribeBlueprints';

const Picker = combineEpics(
  createJob,
  loadJobs,
  loadJob,
  pickJob,
  setJob,
  suspendJob,
  resumeJob,
  cancelJob,
  setGraphNodes,
  loadBlueprints,
  subscribeBlueprints
);

export default Picker;
