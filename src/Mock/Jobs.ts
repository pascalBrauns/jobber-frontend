import { Task, Pipeline, Bridge, Status, Lifetime, Type } from 'Type/Job';
import Random from 'Utility/Random';

const maxAmount = 5;

const allStatuses: Status[] = [
  'active',
  'canceled',
  'suspended',
  'planned',
  'completed'
];

const allTypes: Type[] = [
  'task',
  'pipeline',
  'bridge'
];

const randomStatus = (): Status => allStatuses[Random.index(allStatuses)];
const randomLifetime = (): Lifetime => ({
  start: new Date,
  end: Random.boolean() ? new Date : null
});

export const randomId = () => Math.random().toString(36).substring(7);

export const randomType = (): Type => allTypes[Random.index(allTypes)];

export const randomTask = (): Task => ({
  id: randomId(),
  type: 'task',
  status: randomStatus(),
  lifetime: randomLifetime(),
  payload: '',
  logs: []
});

export const randomPipeline = (allowedDepth: number): Pipeline => ({
  id: randomId(),
  type: 'pipeline',
  status: randomStatus(),
  lifetime: randomLifetime(),
  jobs: randomJobs(allowedDepth)
});

export const randomBridge = (allowedDepth: number): Bridge => ({
  id: randomId(),
  type: 'bridge',
  status: randomStatus(),
  lifetime: randomLifetime(),
  jobs: randomJobs(allowedDepth)
});

export const randomJob = (allowedDepth: number): (Task | Pipeline | Bridge) => {
  const type = randomType();

  if (type === 'task' || allowedDepth === 1) {
    return randomTask();
  }
  else if (type === 'pipeline') {
    return randomPipeline(allowedDepth -1);
  }
  else if (type === 'bridge') {
    return randomBridge(allowedDepth -1);
  }
  else {
    throw 'Invalid type';
  }
};

export const randomJobs = (allowedDepth: number = 4) => (
  Array(Random.number(1, maxAmount))
    .fill(null)
    .map(() => randomJob(allowedDepth))
);

export default [
  {
    type: 'bridge',
    status: randomStatus(),
    lifetime: randomLifetime(),
    id: randomId(),
    jobs: [
      randomTask(),
      randomTask(),
      randomTask(),
      {
        type: 'pipeline',
        status: randomStatus(),
        lifetime: randomLifetime(),
        id: randomId(),
        jobs: [
          randomTask(),
          randomTask(),
        ]
      },
      {
        type: 'pipeline',
        status: randomStatus(),
        lifetime: randomLifetime(),
        id: randomId(),
        jobs: [
          randomTask(),
          randomTask(),
          {
            type: 'bridge',
            status: randomStatus(),
            lifetime: randomLifetime(),
            id: randomId(),
            jobs: [
              randomTask(),
              {
                type: 'pipeline',
                status: randomStatus(),
                lifetime: randomLifetime(),
                id: randomId(),
                jobs: [
                  randomTask(),
                  randomTask(),
                  randomTask(),
                  randomTask(),
                ]
              }
            ]
          },
          randomTask(),
        ]
      }
    ]
  } as Task | Pipeline | Bridge,
  ...Array(20).fill(null).map(randomTask)
];
