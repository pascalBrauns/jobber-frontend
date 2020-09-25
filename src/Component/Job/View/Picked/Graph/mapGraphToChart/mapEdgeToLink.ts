import { Node, Edge } from 'Type/Network';
import { ILink } from "@mrblenny/react-flow-chart";

const mapEdgeToLink = <T>({ from, to }: Edge<T>): ILink => ({
  id: `${(from as Node<T>).id}-${to.id}`,
  from: {
    nodeId: (from as Node<T>).id,
    portId: `${(from as Node<T>).id}-out`
  },
  to: {
    nodeId: to.id,
    portId: `${to.id}-in`
  }
});

export default mapEdgeToLink;
