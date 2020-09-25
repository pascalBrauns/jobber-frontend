import React from 'react';
import { useSelector } from 'Type/Redux';
import { Job } from 'Type/Job';
import List from '@material-ui/core/List';
import ListItem from './ListItem';

export type Props = {
  jobs: Job[];
}

const ResultList: React.FC<Props> = ({ jobs }) => {
  const picked = useSelector<Job>(state => state.Picker.picked as Job);
  return (
    <List>
      {jobs.map(job => (
        <ListItem
          key={`${job.type}-${job.id}`}
          selected={picked && picked.id === job.id && picked.type === job.type}
          job={job}/>
      ))}
    </List>
  )
};

export default ResultList;
