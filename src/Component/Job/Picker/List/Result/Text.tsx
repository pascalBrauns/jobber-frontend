import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  margin: 0;
  padding: 0;
  color: rgb(140, 140, 140);
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text: React.FC = ({ children }) => (
  <Container>
    <Title>{children}</Title>
  </Container>
);

export default Text;
