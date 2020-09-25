import { createAction } from 'typesafe-actions';
import { Blueprint } from 'Type/Job';

export * from './Filter';
export * from './Loader';
export * from './Picked';
export * from './Graph';
export * from './Query';

namespace subscribeBlueprints {
  export type Payload = {
    blueprints: Blueprint[];
  }
}

export const subscribeBlueprints = (
  createAction('blueprints/SUBSCRIBE')<subscribeBlueprints.Payload>()
);

export const collapsePicker = createAction('picker/COLLAPSE')();
export const expandPicker = createAction('picker/EXPAND')();
