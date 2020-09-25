import { IFlowChartComponents } from "@mrblenny/react-flow-chart";
import Canvas from './Canvas';
import Node from './Node';

const Components: IFlowChartComponents = {
  Node: Node.Container as any,
  NodeInner: Node.Content as any,
  CanvasOuter: Canvas.Container
}

export default Components;
