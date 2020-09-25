import React from 'react';
import GitHubIcon from './Icon/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const GitHubButton: React.FC = () => (
  <Tooltip
    arrow
    title='Visit Jobber on GitHub'
    placement='bottom-start'>
    <IconButton onClick={() => window.location.href = 'https://github.com'}>
      <GitHubIcon/>
    </IconButton>
  </Tooltip>
);

export default GitHubButton;
