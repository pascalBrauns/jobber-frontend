import { createAction } from 'typesafe-actions';
import { Type, Status, Lifetime, ID } from 'Type/Job';

export namespace setTypes {
  export type Payload = {
    types: Type[];
  }
}

export const setTypes = (
  createAction('picker/SET_TYPES')<setTypes.Payload>()
);

export namespace setStatuses {
  export type Payload = {
    statuses: Status[];
  }
}

export const setStatuses = (
  createAction('picker/SET_STATUSES')<setStatuses.Payload>()
);

export namespace setPickerLifetime {
  export type Payload = {
    lifetime: Partial<Lifetime>;
  }
}

export const setPickerLifetime = (
  createAction('picker/SET_LIFETIME')<setPickerLifetime.Payload>()
);

export namespace setID {
  export type Payload = {
    id: ID;
  }
}

export const setID = (
  createAction('picker/SET_ID')<setID.Payload>()
);
