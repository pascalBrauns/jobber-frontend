import React from 'react';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export const arrows = {
  up: KeyboardArrowUp,
  down: KeyboardArrowDown,
  left: KeyboardArrowLeft,
  right: KeyboardArrowRight,
};

export type Props = {
  direction: keyof typeof arrows;
}

const Arrow: React.FC<Props> = ({ direction }) => {
  const ArrowIcon = arrows[direction];
  return (
    <ArrowIcon/>
  );
}

export default Arrow;
