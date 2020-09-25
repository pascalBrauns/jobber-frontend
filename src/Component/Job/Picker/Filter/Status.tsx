import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Status } from 'Type/Job';
import Text from 'Utility/Text';
import { useSelector } from 'Type/Redux';
import useActions from 'Store/useActions';

const allStates: Status[] = [
  'active', 'canceled', 'completed', 'suspended', 'planned'
];

const Status: React.FC = () => {
  const statuses = useSelector<Status[]>(state => state.Picker.statuses);
  const { setStatuses } = useActions();
  return (
    <>
      {allStates.map(
        status => (
          <FormControlLabel
            key={status}
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            control={
              <Checkbox
                checked={statuses.includes(status)}
                onChange={(_event, checked) => setStatuses({
                  statuses: (
                    checked
                      ? [
                        ...statuses,
                        status
                      ]
                      : statuses.filter(entry => entry !== status)
                  )
                })}
                size='small'/>
            }
            label={Text.capitalize(status)}/>
        )
      )}
    </>
  );
}

export default Status;
