import React from 'react';
import Container from './Container';
import Progress from './Progress';
import Controls from './Controls';
import Status from './Status';
import * as Job from 'Type/Job';

export type Props = {
  status: Job.Status;
  progress: Job.Progress;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
}

const Live: React.FC<Props> = ({
  status, progress, onPlay, onPause, onStop
}) => (
  <Container>
    <Progress progress={progress}/>
    <Status status={status}/>
    <Controls
      status={status}
      onPlay={onPlay}
      onPause={onPause}
      onStop={onStop}/>
  </Container>
);

export default Live;
