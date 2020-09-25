import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ID } from 'Type/Job';
import { useSelector } from 'Type/Redux';
import useActions from 'Store/useActions';

const ID: React.FC = () => {
  const id = useSelector<ID>(state => state.Picker.id);
  const { setID } = useActions();
  return (
    <TextField
      placeholder='Find ID'
      variant='outlined'
      value={id}
      style={{ width: '100%' }}
      onChange={(event) => setID({
        id: event.target.value
      })}/>
  );
}

export default ID;
