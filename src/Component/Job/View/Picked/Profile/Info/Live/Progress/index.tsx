import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from './Container';
import Text from './Text';
import { Progress } from 'Type/Job';

export type Props = {
  progress: Progress;
}

const Progress: React.FC<Props> = ({ progress }) => {
  const { pending, completed } = progress;
  const total = completed + pending;
  return (
    <Container>
      <CircularProgress
        variant='static'
        value={typeof completed === 'number' && typeof pending === 'number'
          ? (completed / (completed + pending)) * 100
          : 0
        }
        size={100}/>
      <Text>
        {`${completed || '0'}/${total || '0'}`}
      </Text>
    </Container>
  );
}

export default Progress;
