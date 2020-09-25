import React from 'react';
import Container from './Container';
import ID from './ID';
import IconButton from '@material-ui/core/IconButton';
import Arrow from 'Component/Arrow';
import { useSelector } from 'Type/Redux';
import useActions from 'Store/useActions';

const Controls: React.FC = () => {
  const expanded = useSelector<boolean>(state => state.Picker.expanded);
  const { expandPicker, collapsePicker } = useActions();
  return (
    <Container>
      <ID/>
      <IconButton
        onClick={
          expanded
            ? collapsePicker
            : expandPicker
        }
        style={{ marginLeft: 10 }}>
        <Arrow direction={expanded ? 'left' : 'right'}/>
      </IconButton>
    </Container>
  );
}

export default Controls;
