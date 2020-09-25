import React from 'react';
import JobberIcon from './Icon/Jobber';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Title: React.FC = () => (
  <Container>
    <JobberIcon style={{ marginRight: 5 }}/>
    <h3>Monitor</h3>
  </Container>
);

export default Title;
