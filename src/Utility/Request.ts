import { createAction } from 'typesafe-actions';

class Request {
  static createActions = <
    Data,
    Parameters = undefined,
    Error = undefined
  >(constant: string) => ({
    call: createAction(`request/LOAD_${constant}`)<Parameters>(),
    success: createAction(`request/SUCCEEDED_TO_LOAD_${constant}`)<{ data: Data }>(),
    fail: createAction(`request/FAILED_TO_LOAD_${constant}`)<Error>()
  });
}

export default Request;
