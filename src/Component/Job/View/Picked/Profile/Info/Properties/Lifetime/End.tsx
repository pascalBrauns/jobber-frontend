import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Lifetime } from 'Type/Job';
import DateField from 'Component/DateField';

export type Props = {
  date: Date | null;
};

const Lifetime: React.FC<Props> = ({ date }) => {
  const wideScreen = useMediaQuery('(min-width: 1150px)');
  return (
    <DateField
      label='End'
      date={date}
      variant='filled'
      fullWidth={!wideScreen}
      disabled={true}/>
  );
}

export default Lifetime;
