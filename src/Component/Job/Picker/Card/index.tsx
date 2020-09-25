import React from 'react';
import MUICard, { CardProps } from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardStyles from 'Component/Card/Styles';
import Animation from './Animation';

const useStyles = makeStyles({
  ...CardStyles,
  root: {
    ...CardStyles.root,
    minWidth: 700,
    height: '100%',
    boxSizing: 'border-box',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    overflowY: 'scroll'
  }
});

const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <Animation duration={650}>
    <MUICard classes={useStyles()} {...props}>
      {children}
    </MUICard>
  </Animation>
);

export default Card;
