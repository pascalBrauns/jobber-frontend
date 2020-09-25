import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { fadeIn } from 'react-animations';

export default styled.div`
  animation: 500ms linear ${keyframes`${fadeIn}`};
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  padding-top: 80px;
`;
