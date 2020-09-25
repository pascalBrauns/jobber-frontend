import { createAction } from 'typesafe-actions';
import { Task, Status } from 'Type/Job';
import { Node } from 'Type/Network';

namespace setGraphNodes {
  export type Payload = {
    nodes: Node<Task>[];
  }
}

export const setGraphNodes = (
  createAction('picked/SET_GRAPH_NODES')<setGraphNodes.Payload>()
);

namespace setGraphStatus {
  export type Payload = {
    id: string;
    status: Status;
  }
}

export const setGraphStatus = createAction('picked/SET_GRAPH_STATUS')<setGraphStatus.Payload>();
