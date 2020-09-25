import { Job, Task } from 'Type/Job';
import { Graph } from 'Type/Network';
import mapJobToNodes from './mapJobToNodes';
import mapJobToOrigins from './mapJobToOrigins';
import mapJobToMap from './mapJobToMap';
import mapJobToEdges from './mapJobToEdges';

const mapJobToGraph = (job: Job): Graph<Task> => ({
  nodes: mapJobToNodes(job),
  edges: mapJobToEdges(job),
  origins: mapJobToOrigins(job),
  map: mapJobToMap(job)
});

export default mapJobToGraph;
