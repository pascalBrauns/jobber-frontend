import { IChart } from "@mrblenny/react-flow-chart"
import { Graph, Node } from 'Type/Network';
import mapNodeToChartNode from './mapNodeToChartNode';
import mapEdgeToLink from './mapEdgeToLink';

const offset = {
  x: 300,
  y: 250,
  base: {
    x: 50,
    y: 50
  }
}

const getDimensions = <T>(graph: Graph<T>) => ({
  x: graph.map.rows.reduce(
    (width, row) => (
      row.length > width
        ? row.length
        : width
    ),
    0
  ),
  y: graph.map.rows.length
})

const getPosition = <T>(graph: Graph<T>, node: Node<T>) => {

  const rowIndex = graph.map.rows.findIndex(
    row => row.map(({ id }) => id).includes(node.id)
  );

  const row = graph.map.rows[rowIndex];

  const columnIndex = row.findIndex(({ id }) => id === node.id);

  const column = row[columnIndex];

  const dimensions = getDimensions(graph);

  return {
    x: (
      (dimensions.x * offset.x - row.length * offset.x) / 2
      + columnIndex * offset.x
      + offset.base.x
    ),
    y: rowIndex * offset.y + offset.base.x
  };
}

const mapGraphToChart = <T>(graph: Graph<T>): IChart => ({
  offset: {
    x: 0,
    y: 0
  },
  nodes: graph.nodes.reduce(
    (nodes, node) => ({
      ...nodes,
      [node.id]: mapNodeToChartNode(
        node,
        getPosition(graph, node)
      )
    }),
    {}
  ),
  links: graph.edges.map(mapEdgeToLink).reduce(
    (links, { id, ...rest }) => ({
      ...links,
      [id]: {
        id,
        ...rest
      }
    }),
    {}
  ),
  scale: 1,
  selected: {},
  hovered: {}
});

export default mapGraphToChart;
