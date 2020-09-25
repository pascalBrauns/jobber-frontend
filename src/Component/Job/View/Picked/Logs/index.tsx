import React from 'react';
import { Logs } from 'Type/Job';
import Title from './Title';
import Container from './Container';
import Lines, { Props } from './Lines';

const Logs: React.FC<Props> = ({ messages }) => (
  <Container>
    <Title>Logs</Title>
    <Lines messages={messages}/>
  </Container>
);

export default Logs;
