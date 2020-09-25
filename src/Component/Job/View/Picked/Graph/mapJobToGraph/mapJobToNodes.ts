import { Task, Pipeline, Bridge } from 'Type/Job';
import { Node } from 'Type/Network';

const mapJobToTasks = (job: Task | Pipeline | Bridge): Task[] => {
  if (job.type === 'task') {
    return [job];
  }
  else {
    return mapJobListToTasks(job.jobs);
  }
}

const mapJobListToTasks = (jobs: (Task | Pipeline | Bridge)[]): Task[] => (
  jobs.reduce(
    (tasks, job) => [
      ...tasks,
      ...mapJobToTasks(job)
    ],
    [] as Task[]
  )
);

const mapTaskToNode = (task: Task): Node<Task> => ({
  id: task.id,
  data: task
});

const mapJobToNodes = (job: Task | Pipeline | Bridge) => (
  mapJobToTasks(job).map(mapTaskToNode)
);

export default mapJobToNodes;
