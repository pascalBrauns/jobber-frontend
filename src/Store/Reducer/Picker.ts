import { createReducer, ActionType } from 'typesafe-actions';
import * as Action from 'Store/Action/Picker';
import { Type, Status, Lifetime, Job, Task, Query, Blueprint } from 'Type/Job';
import { Node } from 'Type/Network';
import MockQuery from 'Mock/Query';
import { Valid } from 'Utility/Query';

export type State = {
  types: Type[];
  statuses: Status[];
  lifetime: Partial<Lifetime>;
  id: string;
  jobs: Job[];
  picked: Job | null;
  graphNodes: Node<Task>[];
  query: Query
  queryIsValid: boolean;
  blueprints: Blueprint[];
  expanded: boolean;
}

export const initialState: State = {
  types: [],
  statuses: [],
  lifetime: { start: null, end: null },
  id: '',
  jobs: [],
  picked: null,
  graphNodes: [],
  query: MockQuery as Query,
  queryIsValid: true,
  blueprints: [],
  expanded: true
}

const Picker = createReducer<State, ActionType<typeof Action>>(initialState)
  .handleAction(
    Action.setJob,
    (state, action) => ({
      ...state,
      picked: action.payload.job
    })
  )
  .handleAction(
    Action.setProgress,
    (state, action) => ({
      ...state,
      picked: {
        ...state.picked,
        progress: action.payload.progress
      } as Job
    })
  )
  .handleAction(
    Action.setStatus,
    (state, action) => ({
      ...state,
      picked: {
        ...state.picked,
        status: action.payload.status
      } as Job
    })
  )
  .handleAction(
    Action.setLifetime,
    (state, action) => ({
      ...state,
      picked: {
        ...state.picked,
        lifetime: action.payload.lifetime
      } as Job
    })
  )
  .handleAction(
    Action.setLogs,
    (state, action) => (
      state.picked && state.picked.type === 'task'
        ? ({
          ...state,
          picked: {
            ...state.picked,
            logs: action.payload.messages
          }
        })
        : state
    )
  )
  .handleAction(
    Action.setGraphNodes,
    (state, action) => ({
      ...state,
      graphNodes: action.payload.nodes
    })
  )
  .handleAction(
    Action.setGraphStatus,
    (state, action) => ({
      ...state,
      graphNodes: state.graphNodes.map(node => {
        if (node.id === action.payload.id) {
          return {
            ...node,
            data: {
              ...node.data,
              status: action.payload.status
            }
          };
        }
        else {
          return node;
        }
      })
    })
  )
  .handleAction(
    Action.closeJob,
    state => ({
      ...state,
      picked: null
    })
  )
  .handleAction(
    Action.setTypes,
    (state, action) => ({
      ...state,
      types: action.payload.types
    }),
  )
  .handleAction(
    Action.setStatuses,
    (state, action) => ({
      ...state,
      statuses: action.payload.statuses
    })
  )
  .handleAction(
    Action.setPickerLifetime,
    (state, action) => ({
      ...state,
      lifetime: action.payload.lifetime
    })
  )
  .handleAction(
    Action.setID,
    (state, action) => ({
      ...state,
      id: action.payload.id
    })
  )
  .handleAction(
    Action.succeededToLoadJobs,
    (state, action) => ({
      ...state,
      jobs: action.payload.data.map(
        job => ({
          ...job,
          lifetime: {
            ...job.lifetime,
            start: (
              job.lifetime.start
                ? new Date(job.lifetime.start as Date)
                : null
            ),
            end: (
              job.lifetime.end
                ? new Date(job.lifetime.end as Date)
                : null
            ),
          }
        })
      )
    })
  )
  .handleAction(
    Action.setQuery,
    (state, { payload: { query } }) => ({
      ...state,
      query,
      queryIsValid: Valid.job(query)
    })
  )
  .handleAction(
    Action.succeededToCreateJob,
    (state, { payload: { data: blueprint } }) => ({
      ...state,
      blueprints: [
        ...state.blueprints,
        blueprint
      ]
    })
  )
  .handleAction(
    Action.succeededToLoadBlueprints,
    (state, { payload: { data: blueprints } }) => ({
      ...state,
      blueprints
    })
  )
  .handleAction(
    Action.blueprintRemoved,
    (state, { payload: { blueprint } }) => ({
      ...state,
      blueprints: state.blueprints.filter(({ id }) => id !== blueprint.id)
    })
  )
  .handleAction(
    Action.expandPicker,
    state => ({
      ...state,
      expanded: true
    })
  )
  .handleAction(
    Action.collapsePicker,
    state => ({
      ...state,
      expanded: false
    })
  );

export default Picker;
