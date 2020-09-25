import React from 'react';
import Button from '@material-ui/core/Button';
import Pause from '@material-ui/icons/Pause';

export type Props = {
  onClick?: () => void;
  disabled?: boolean;
}

const PauseButton: React.FC<Props> = ({ disabled, onClick }) => (
  <Button onClick={onClick || (() => {})} disabled={disabled}>
    <Pause/>
  </Button>
);

export default PauseButton;
