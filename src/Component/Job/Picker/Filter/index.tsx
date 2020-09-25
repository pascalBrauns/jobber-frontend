import React from 'react';
import Status from './Status';
import Type from './Type';
import Lifetime from './Lifetime';
import Divider from './Divider';
import Heading from './Heading';
import Container from './Container';

const Filter = () => (
  <Container>
    <Heading>STATUS</Heading>
    <Status/>
    <Divider variant='fullWidth'/>
    <Heading>TYPE</Heading>
    <Type/>
    <Divider variant='fullWidth'/>
    <Heading>LIFETIME</Heading>
    <Lifetime/>
  </Container>
);

export default Filter;
