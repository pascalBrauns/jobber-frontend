import { Node } from 'Type/Network';
import { INode, IPosition } from '@mrblenny/react-flow-chart';

const mapNodeToChartNode = <T>(node: Node<T>, position: IPosition): INode => ({
  id: node.id,
  type: "output-only",
  readonly: true,
  position: position,
  properties: node.data,
  ports: {
    [`${node.id}-in`]: {
      id: `${node.id}-in`,
      type: "input"
    },
    [`${node.id}-out`]: {
      id: `${node.id}-out`,
      type: "output"
    }
  }
});

export default mapNodeToChartNode;
