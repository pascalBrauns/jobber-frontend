import React from 'react';
import Container from './Container';
import Properties from './Properties';
import Live from './Live';
import { Job } from 'Type/Job';
import { connect } from 'react-redux';
import * as Action from 'Store/Action/Picker';

export type Props = {
  job: Job;
} & Partial<typeof Action>;

const Details: React.FC<Props> = ({ job, suspendJob, resumeJob, cancelJob }) => (
  <Container>
    <Properties
      id={job.id}
      type={job.type}
      lifetime={job.lifetime}/>
    <Live
      status={job.status}
      progress={job.progress}
      onPlay={() => (resumeJob as () => void)()}
      onPause={() => (suspendJob as () => void)()}
      onStop={() => (cancelJob as () => void)()}/>
  </Container>
);

const enhance = connect(null, Action);

export default enhance(Details);
