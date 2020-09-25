import React from 'react';
import Container from './Container';
import Id from './Id';
import Type from './Type';
import Lifetime from './Lifetime';
import * as Job from 'Type/Job';

export type Props = {
  id: string;
  type: Job.Type;
  lifetime: Job.Lifetime;
}

const Properties: React.FC<Props> = ({ id, type, lifetime }) => (
  <Container>
    <Id id={id}/>
    <Type type={type}/>
    <Lifetime lifetime={lifetime}/>
  </Container>
)

export default Properties;
