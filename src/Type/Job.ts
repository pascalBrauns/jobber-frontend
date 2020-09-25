export type Query = {
  type: 'task';
  payload: string;
} | {
  type: 'pipeline' | 'bridge'
  jobs: Query[];
};

export type Blueprint = Query & {
  id: string;
}

export type Lifetime = {
  start: Date | null;
  end: Date | null;
};

export type ID = string;

export type Status = 'planned' | 'suspended' | 'canceled' | 'active' | 'completed';
const pending: Status[] = [
  'active',
  'suspended',
  'planned'
];

export const isPending = (status: Status) => pending.includes(status);

export type Type = 'task' | 'pipeline' | 'bridge';

export type Logs = string[];

export type Progress = {
  pending: number;
  completed: number;
};

type Details = {
  id: ID;
  status: Status;
  lifetime: Lifetime;
  progress: Progress;
};

export type Task = Details & {
  type: 'task';
  payload: string;
  logs: Logs;
}

export type Pipeline = Details & {
  type: 'pipeline';
  jobs: Job[];
}

export type Bridge = Details & {
  type: 'bridge';
  jobs: Job[];
}

export type Job = Task | Pipeline | Bridge;
export type Complex = Pipeline | Bridge;

export const isComplex = (type: Type) => type !== 'task';

export type Route = Task[];
