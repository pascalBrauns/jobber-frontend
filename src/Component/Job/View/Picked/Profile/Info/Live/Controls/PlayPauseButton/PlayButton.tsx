import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';

export type Props = {
  onClick?: () => void;
  disabled?: boolean;
};

const PlayButton: React.FC<Props> = ({ disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick || (() => {})}>
    <PlayArrow/>
  </Button>
);

export default PlayButton;
