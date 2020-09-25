import { Job, Blueprint } from 'Type/Job';
import Request from 'Utility/Request';
import { createAction } from 'typesafe-actions';

export const {
  call: loadJobs,
  fail: failedToloadJobs,
  success: succeededToLoadJobs
} = Request.createActions<Job[]>('JOBS');

export const {
  call: loadBlueprints,
  fail: failedToLoadJobs,
  success: succeededToLoadBlueprints
} = Request.createActions<Blueprint[]>('BLUEPRINTS');

export const {
  call: createJob,
  fail: failedToCreateJob,
  success: succeededToCreateJob
} = Request.createActions<Blueprint>('CREATE_JOB');

export const blueprintRemoved = createAction('blueprint/REMOVED')<{ blueprint: Blueprint }>();
