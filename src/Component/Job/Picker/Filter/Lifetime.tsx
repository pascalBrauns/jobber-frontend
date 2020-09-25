import React from 'react';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Lifetime } from 'Type/Job';
import useActions from 'Store/useActions';
import { useSelector } from 'Type/Redux';

const Lifetime: React.FC = () => {
  const { setPickerLifetime } = useActions();
  const lifetime = useSelector(state => state.Picker.lifetime);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        variant="inline"
        ampm={false}
        format="dd.MM.yyyy HH:mm"
        margin="normal"
        id="date-picker-start"
        label="Start"
        disableFuture
        inputVariant='outlined'
        maxDate={lifetime.end}
        onChange={date => setPickerLifetime({
          lifetime: {
            start: (date as Date),
            end: lifetime.end || null
          }
        })}
        value={lifetime.start}/>
      <DateTimePicker
        variant="inline"
        ampm={false}
        format="dd.MM.yyyy HH:mm"
        margin="normal"
        id="date-picker-end"
        label="End"
        disableFuture
        inputVariant='outlined'
        minDate={lifetime.start}
        onError={() => console.log('DIRTY')}
        onAccept={() => console.log('CLEAN')}
        onChange={date => setPickerLifetime({
          lifetime: {
            start: (
              (lifetime.start || new Date) > (date as Date)
                ? (date as Date)
                : (lifetime.start || new Date)
            ),
            end: (date as Date)
          }
        })}
        value={lifetime.end}/>
    </MuiPickersUtilsProvider>
  );
}

export default Lifetime;
