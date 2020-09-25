import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Type } from 'Type/Job';
import Text from 'Utility/Text';
import { useSelector } from 'Type/Redux';
import useActions from 'Store/useActions';

const allTypes: Type[] = [
  'task', 'pipeline', 'bridge'
];

const Type: React.FC = () => {
  const types = useSelector<Type[]>(state => state.Picker.types);
  const { setTypes } = useActions();
  return (
    <>
      {allTypes.map(
        type => (
          <FormControlLabel
            key={type}
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            control={
              <Checkbox
                onChange={(_event, checked) => setTypes({
                  types: (
                    checked
                      ? [
                        ...types,
                        type
                      ]
                      : types.filter(entry => entry !== type)
                  )
                })}
                checked={types.includes(type)}
                size='small'/>
            }
            label={Text.capitalize(type)}/>
        )
      )}
    </>
  );
}

export default Type;
