import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Picked from './Picked';
import New from './New';
import { State } from 'Store/Reducer';
import { Job } from 'Type/Job';

const View: React.FC = () => {
  const job = useSelector<State, Job | null>(state => state.Picker.picked);
  return (
    <Card>
      {
        job && job.id
          ? <Picked job={job}/>
          : <New/>
      }
    </Card>
  )
};

export default View;
