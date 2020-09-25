import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { fadeOutUp } from 'react-animations';

const Container = styled.div`
  animation: 800ms ${keyframes`${fadeOutUp}`} 600ms;
  width: 100vw;
  height: 100vh;
`;

export default Container;
