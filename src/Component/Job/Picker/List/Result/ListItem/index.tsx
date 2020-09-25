import React from 'react';
import { Job } from 'Type/Job';
import useActions from 'Store/useActions';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from './Text';
import makeStyles from '@material-ui/core/styles/makeStyles';

export type Props = {
  job: Job;
  selected: boolean;
}

const useStyles = makeStyles({
  selected: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'rgb(57, 57, 57)'
  }
});

const ResultListItem: React.FC<Props> = ({ job, selected }) => {
  const { pickJob } = useActions();
  return (
    <ListItem
      button
      onClick={() => pickJob({ job: job })}
      classes={useStyles()}
      selected={selected}>
      <ListItemText job={job} selected={selected}/>
    </ListItem>
  );
}

export default ResultListItem;
