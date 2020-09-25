import React from 'react';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';

export type Props = {
  onClose?: () => void;
};

const CloseButton: React.FC<Props> = ({ onClose }) => (
  <Button onClick={onClose || (() => {})}>
    <Close/>
  </Button>
);

export default CloseButton;
