import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: calc(100% - 75px);
  height: 835px;
  box-sizing: border-box;
  background: rgb(48, 48, 48);
`;

const Container: React.FC = ({ children }) => (
  <StyledContainer id='visualization'>
    {children}
  </StyledContainer>
)

export default Container;
