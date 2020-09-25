import React from 'react';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Type } from 'Type/Job';
import Text from 'Utility/Text';

export type Props = {
  type: Type;
}

const Type: React.FC<Props> = ({ type }) => {
  const wideScreen = useMediaQuery('(min-width: 1150px)');
  return (
    <TextField
      label='Type'
      value={type ? Text.capitalize(type) : ''}
      fullWidth={!wideScreen}
      variant='filled'
      disabled={true}/>
  );
}

export default Type;
