import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import GitHubButton from './GitHubButton';

const useStyles = makeStyles({
  root: {
    height: 54,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgb(39, 39, 39)',
    color: 'white'
  }
});

const Header: React.FC = () => (
  <AppBar classes={useStyles()}>
    <Title/>
    <GitHubButton/>
  </AppBar>
);

export default Header;
