import React from 'react';
import TextField from '@material-ui/core/TextField';

export type Props = {
  messages: string[];
}

const Lines: React.FC<Props> = ({ messages }) => (
  <TextField
    inputProps={{style: {
      fontFamily: 'Menlo',
      cursor: 'text',
      boxSizing: 'border-box',
      height: '100%',
      overflow: 'scroll'
    }}}
    value={messages ? messages.join('\n') : ''}
    disabled
    multiline
    variant='filled'
    fullWidth/>
);

export default Lines;
