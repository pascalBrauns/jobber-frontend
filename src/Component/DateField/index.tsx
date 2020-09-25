import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import format from './format';

export type Props = TextFieldProps & {
  date: Date | null;
}

const DateField: React.FC<Props> = ({ date, ...props }) => (
  <TextField
    value={
      date
        ? format(date)
        : 'N/A'
    }
    {...props}/>
);

export default DateField;
