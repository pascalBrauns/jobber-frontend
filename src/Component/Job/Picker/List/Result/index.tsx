import React from 'react';
import List from './List';
import { Job } from 'Type/Job';
import Container from './Container';
import { useSelector } from 'Type/Redux';
import Text from './Text';

const Result: React.FC = () => {
  const jobs = useSelector<Job[]>(state => state.Picker.jobs);
  return (
    <Container>
      {
        jobs.length
          ? <List jobs={jobs}/>
          : <Text>NO JOBS</Text>
      }
    </Container>
  );
}

export default Result;
