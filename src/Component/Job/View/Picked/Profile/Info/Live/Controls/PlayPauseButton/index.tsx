import React from 'react';
import Button from '@material-ui/core/Button';
import Play from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import { Status } from 'Type/Job';

export type Props = {
  status: Status;
  disabled?: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const PlayPauseButton: React.FC<Props> = ({ status, onPlay, onPause }) => {
  if (status === 'active') {
    return <PauseButton onClick={onPause}/>;
  }
  else if (status === 'suspended') {
    return <PlayButton onClick={onPlay}/>;
  }
  else {
    return (
      <Button disabled={true}>
        <Play/>
        <Pause/>
      </Button>
    );
  }
}

export default PlayPauseButton;
