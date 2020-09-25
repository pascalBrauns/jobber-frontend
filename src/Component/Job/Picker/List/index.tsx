import React from 'react';
import Controls from './Controls';
import Result from './Result';
import Container from './Container';

const JobList: React.FC = () => (
  <Container>
    <Controls/>
    <Result/>
  </Container>
);

export default JobList;
