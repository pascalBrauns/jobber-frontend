import React from 'react';
import Start from './Start';
import End from './End';
import { Lifetime } from 'Type/Job';

export type Props = {
  lifetime: Lifetime;
};

const Lifetime: React.FC<Props> = ({ lifetime }) => (
  <>
    <Start date={lifetime.start}/>
    <End date={lifetime.end}/>
  </>
);

export default Lifetime;
