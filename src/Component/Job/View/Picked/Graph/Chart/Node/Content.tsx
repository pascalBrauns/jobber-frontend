import React from 'react';
import { INode } from "@mrblenny/react-flow-chart";
import { Task } from 'Type/Job';
import { useSelector } from 'Type/Redux';
import { Node } from 'Type/Network';
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  node: INode;
}

const Content: React.FC<Props> = ({ node }) => {
  const graphNode = useSelector<Node<Task> | undefined>(state => {
    return state.Picker.graphNodes.find(graphNode => {
      if (graphNode.id === node.id) {
        return true;
      }
      else {
        return false;
      }
    })
  });

  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    color: 'black',
    borderRadius: '100%'
  };

  let title = `${node.id}`;
  if (graphNode) {
    style.background = (
      graphNode.data.status === 'completed'
        ? 'linear-gradient(45deg, lightgreen 30%, yellow 90%)'
        : graphNode.data.status === 'planned'
          ? 'linear-gradient(45deg, grey 30%, white 90%)'
          : graphNode.data.status === 'active'
            ? 'linear-gradient(45deg, #b38bf4 30%, #FE6B8B 90%)'
            : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    )
    title += `: ${graphNode.data.status}`;
  }
  return (
    <Tooltip title={title}>
      <div style={style}>
        {node.id}
      </div>
    </Tooltip>
  )
};

export default Content;
