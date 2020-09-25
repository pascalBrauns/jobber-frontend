import React from 'react';
import Fab, { FabProps } from '@material-ui/core/Fab';
import Arrow, { arrows } from 'Component/Arrow';

export type Props = Partial<FabProps> & {
  direction: keyof typeof arrows;
  onClick: () => void;
  label?: string;
}

const ArrowButton: React.FC<Props> = ({
  direction, onClick, label, ...rest
}) => (
  <Fab
    size='small'
    variant='extended'
    color='default'
    onClick={onClick}
    {...rest}>
    <Arrow direction={direction}/>
    {label || null}
  </Fab>
);

export default ArrowButton;
