import React from 'react';
import Container from './Container';
import PlayPauseButton from './PlayPauseButton';
import StopButton from './StopButton';
import { Status } from 'Type/Job';

export type Props = {
  status: Status;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
};

const Controls: React.FC<Props> = ({ status, onPlay, onPause, onStop }) => (
  <Container>
    <PlayPauseButton
      status={status}
      onPlay={onPlay}
      onPause={onPause}/>
    <StopButton
      status={status}
      onStop={onStop}/>
  </Container>
);

export default Controls;
