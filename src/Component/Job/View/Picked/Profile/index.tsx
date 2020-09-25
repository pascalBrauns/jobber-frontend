import React from 'react';
import Details from './Info';
import { Job } from 'Type/Job';
import Container from './Container';
import Header from './Header';
import useActions from 'Store/useActions';

export type Props = {
  job: Job;
}

const Profile: React.FC<Props> = ({ job }) => {
  const { closeJob } = useActions();
  return (
    <Container>
      <Header onClose={closeJob}/>
      <Details job={job}/>
    </Container>
  );
}

export default Profile;
