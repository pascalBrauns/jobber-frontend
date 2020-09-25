import { Task, Pipeline, Bridge } from 'Type/Job';
import { Node, Map } from 'Type/Network';
import mapJobToRoutes from './mapJobToRoutes';
import mapJobToNodes from './mapJobToNodes';

const mapJobToMap = (job: Task | Pipeline | Bridge): Map<Task> => {
  if (job.type === 'task') {
    return {
      rows: [
        [{ id: job.id, data: job }]
      ],
      dimensions: {
        x: 1, y: 1
      }
    };
  }
  else {
    const routes = mapJobToRoutes(job);
    const nodes = mapJobToNodes(job);

    const longest = Math.max(...routes.map(route => route.length));

    const mapNodeToRowIndex = <T>(node: Node<T>) => routes.reduce(
      (maxIndex, route) => {
        const indexInRoute = route.map(({ id }) => id).indexOf(node.id);
        return (
          indexInRoute > maxIndex
            ? indexInRoute
            : maxIndex
        );
      },
      0
    );

    const mapIndexToRow = (index: number) => nodes.filter(
      node => mapNodeToRowIndex(node) === index
    );

    const rows = Array(longest).fill(null).map((_, index) => mapIndexToRow(index));

    return {
      rows,
      dimensions: {
        x: rows.reduce(
          (maxRow, row) => (
            row.length > maxRow
              ? row.length
              : maxRow
          ),
          0
        ),
        y: longest
      }
    }
  }
}

export default mapJobToMap;
