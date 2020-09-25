import React from 'react';
import { Status } from 'Type/Job';
import Container from './Container';
import Text from './Text';

export type Props = {
  status: Status;
}

const Status: React.FC<Props> = ({ status }) => (
  <Container>
    <Text>
      {status}
    </Text>
  </Container>
);

export default Status;
