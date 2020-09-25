import React from 'react';
import Arrow from 'Component/Arrow';
import Tooltip from '@material-ui/core/Tooltip';
import Toggle from './Toggle';

export type Props = {
  tooltip: {
    title: string;
    placement: 'left' | 'right';
  }
  onToggle: () => void;
  direction: 'left' | 'right';
};

const Switcher: React.FC<Props> = ({ tooltip, onToggle, direction }) => (
  <Tooltip title={tooltip.title} placement={tooltip.placement}>
    <Toggle onClick={onToggle}>
      <Arrow direction={direction}/>
    </Toggle>
  </Tooltip>
);

export default Switcher;
