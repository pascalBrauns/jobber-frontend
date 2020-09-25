import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Job } from 'Type/Job';
import ListItemText from '@material-ui/core/ListItemText';
import Text from 'Utility/Text';

const useSelectedStyles = makeStyles({
  secondary: {
    color: 'rgb(57, 57, 57)'
  }
});

const useUnselectedStyles = makeStyles({});

type TextProps = {
  job: Job;
  selected: boolean;
}

const ResultListItemText: React.FC<TextProps> = ({ selected, job }) => (
  <ListItemText
    classes={
      selected
        ? useSelectedStyles()
        : useUnselectedStyles()
    }
    primary={`#${job.id}`}
    secondary={Text.capitalize(job.type)}/>
);

export default ResultListItemText;
