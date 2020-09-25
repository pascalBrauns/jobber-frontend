import React from 'react';
import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { slideOutLeft } from 'react-animations';
import Content from './Content';

const Animation = styled.div<{ duration: number; }>`
  animation: ${props => props.duration}ms ${keyframes`${slideOutLeft}`};
  width: 350px;
  height: 835px;
  position: absolute;
  bottom: 20px;
`;

const Collapse: React.FC<{ duration: number }> = ({ children, duration }) => (
  <Animation duration={duration}>
    <Content>
      {children}
    </Content>
  </Animation>
);

export default Collapse;
