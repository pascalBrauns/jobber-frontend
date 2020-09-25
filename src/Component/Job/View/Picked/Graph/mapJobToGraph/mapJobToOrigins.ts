import { Task, Pipeline, Bridge } from 'Type/Job';
import { Node } from 'Type/Network';
import mapJobToRoutes from './mapJobToRoutes';

const mapJobToOrigins = (job: Task | Pipeline | Bridge): Node<Task>[] => {
  if (job.type === 'task') {
    return [{ id: job.id, data: job }];
  }
  else {
    const routes = mapJobToRoutes(job);
    return Array.from(
      new Set(routes.map(route => route[0]))
    ).map(task => ({
      id: task.id,
      data: task
    }));
  }
}

export default mapJobToOrigins;
