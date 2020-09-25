import React from 'react';
import Stop from '@material-ui/icons/Stop';
import Button from '@material-ui/core/Button';
import { Status, isPending } from 'Type/Job';

export type Props = {
  status: Status;
  onStop?: () => void;
}

const StopButton: React.FC<Props> = ({ status, onStop }) => (
  <Button
    onClick={onStop || (() => {})}
    disabled={!isPending(status)}>
    <Stop/>
  </Button>
);

export default StopButton;
