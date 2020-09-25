import React from 'react';
import DateField from 'Component/DateField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export type Props = {
  date: Date | null;
}

const Start: React.FC<Props> = ({ date }) => {
  const wideScreen = useMediaQuery('(min-width: 1150px)');
  return (
    <DateField
      label='Start'
      date={date}
      variant='filled'
      fullWidth={!wideScreen}
      disabled={true}/>
  );
}

export default Start;
