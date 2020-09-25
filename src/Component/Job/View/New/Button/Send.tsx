import React from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Send from '@material-ui/icons/Send';
import makeStyles from '@material-ui/styles/makeStyles';
import useActions from 'Store/useActions';

export type Props = {
  disabled?: boolean;
};

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
});

const SendButton: React.FC<Props> = ({ disabled }) => {
  const { createJob } = useActions();
  return (
    <Zoom in={true}>
      <Fab
        disabled={disabled}
        onClick={createJob}
        size='large'
        style={{
          position: 'absolute',
          bottom: 65,
          right: 70
        }}
        classes={useStyles()}
        color='primary'
        variant='extended'>
        Send
        <Send style={{ marginLeft: 5, fontWeight: 'bold' }}/>
      </Fab>
    </Zoom>
  );
}

export default SendButton;
