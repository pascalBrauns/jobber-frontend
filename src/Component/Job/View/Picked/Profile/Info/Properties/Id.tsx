import React from 'react';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export type Props = {
  id: string;
}

const Id: React.FC<Props> = ({ id }) => {
  const wideScreen = useMediaQuery('(min-width: 1150px)');
  return (
    <TextField
      label='ID'
      fullWidth={!wideScreen}
      value={id || ''}
      variant='filled'
      disabled={true}/>
  );
}

export default Id;
