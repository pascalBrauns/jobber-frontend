import React from 'react';
import Container from './Container';
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import Components from './Chart/Components';
import { Job, Complex, isComplex } from 'Type/Job';
import mapJobToChart from './mapJobToChart';

export type Props = {
  job: Job;
}

const Graph: React.FC<Props> = ({ job }) => {
  console.log({ job });
  if (job && isComplex(job.type)) {
    return (
      <Container>
        <FlowChartWithState
          key={job.id}
          Components={Components}
          initialValue={mapJobToChart(job as Complex)}/>
      </Container>
    );
  }
  else {
    return null;
  }
}

export default Graph;
