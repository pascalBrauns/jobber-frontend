import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Text = styled.h2`
  margin: 0;
`;

const Header: React.FC = () => (
  <Container>
    <Text>Send query to Jobber</Text>
  </Container>
);

export default Header;
