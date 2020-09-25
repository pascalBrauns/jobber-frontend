import React from 'react';
import Profile from './Profile';
import Graph from './Graph';
import { Job, Task } from 'Type/Job';
import Logs from './Logs';
import Container from './Container';
import useSwitcher from './useSwitcher';

export type Props = {
  job: Job;
}

const Picked: React.FC<Props> = ({ job }) => {
  const { switcher, spotlight } = useSwitcher({ job });
  return (
    <Container>
      {spotlight === 'profile' && (
        <>
          <Profile job={job}/>
          {switcher}
        </>
      )}
      {spotlight === 'logs' && (
        <>
          {switcher}
          <Logs messages={(job as Task).logs}/>
        </>
      )}
      {spotlight === 'graph' && (
        <>
          {switcher}
          <Graph job={job}/>
        </>
      )}
    </Container>
  );
}

export default Picked;
