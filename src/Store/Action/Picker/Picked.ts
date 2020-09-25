import { createAction } from 'typesafe-actions';
import { Job, Progress, Status, Lifetime } from 'Type/Job';

namespace pickJob {
  export type Payload = {
    job: Job;
  }
}

export const pickJob = createAction('picker/PICK_JOB')<pickJob.Payload>();

namespace pickedJob {
  export type Payload = {
    job: Job;
  }
}

export const pickedJob = createAction('picker/PICKED_JOB')<pickedJob.Payload>();

namespace loadJob {
  export type Payload = {
    id: string;
  }
}

export const loadJob = createAction('picked/LOAD_JOB')<loadJob.Payload>();

namespace setJob {
  export type Payload = {
    job: Job;
  }
}

export const setJob = createAction('picked/SET_JOB')<setJob.Payload>();

namespace setProgress {
  export type Payload = {
    progress: Progress;
  }
}

export const setProgress = (
  createAction('picked/SET_PROGRESS')<setProgress.Payload>()
);

namespace setStatus {
  export type Payload = {
    status: Status;
  }
}

export const setStatus = (
  createAction('picked/SET_STATUS')<setStatus.Payload>()
);

export const suspendJob = createAction('picked/SUSPEND')();
export const resumeJob = createAction('picked/RESUME')();
export const cancelJob = createAction('picked/CANCEL')();

export const closeJob = createAction('picked/CLOSE')();

namespace setLifetime {
  export type Payload = {
    lifetime: Lifetime;
  }
}

export const setLifetime = (
  createAction('picked/SET_LIFETIME')<setLifetime.Payload>()
);

namespace setLogs {
  export type Payload = {
    messages: string[];
  }
}

export const setLogs = (
  createAction('picked/SET_LOGS')<setLogs.Payload>()
)
