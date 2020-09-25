import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card, { CardProps } from '@material-ui/core/Card';
import ViewCardStyles from './Styles';
import Animation from './Animation';

const useStyles = makeStyles({
  ...ViewCardStyles,
  root: {
    ...ViewCardStyles.root,
    flexDirection: 'column',
    overflowY: 'scroll'
  }
});

const ViewCard: React.FC<CardProps> = ({ children, ...props }) => (
  <Animation duration={650}>
    <Card
      classes={useStyles()}
      {...props}>
      {children}
    </Card>
  </Animation>
);

export default ViewCard;
