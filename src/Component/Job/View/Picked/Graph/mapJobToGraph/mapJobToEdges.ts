import { Task, Pipeline, Bridge, Route } from 'Type/Job';
import { Edge } from 'Type/Network';
import mapJobToRoutes from './mapJobToRoutes';

export const mapRouteToEdges = (route: Route): Edge<Task>[] => route.reduce(
  (edges, task, index) => {
    const nextIndex = index +1;
    const nextTask = route[nextIndex] || null;
    if (nextTask) {
      return [
        ...edges,
        {
          from: {
            id: task.id,
            data: task
          },
          to: {
            id: nextTask.id,
            data: nextTask
          }
        }
      ];
    }
    else {
      return edges;
    }
  },
  [] as Edge<Task> []
);

const mapRoutesToEdges = (routes: Route[]): Edge<Task>[] => routes.reduce(
  (edges, route) => [
    ...edges,
    ...mapRouteToEdges(route)
  ],
  [] as Edge<Task>[]
);

const mapJobToEdges = (job: Task | Pipeline | Bridge): Edge<Task>[] => {
  if (job.type === 'task') {
    return [];
  }
  else {
    const routes = mapJobToRoutes(job);
    return mapRoutesToEdges(routes);
  }
}

export default mapJobToEdges;
