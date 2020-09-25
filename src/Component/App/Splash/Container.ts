import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { fadeInUp } from 'react-animations';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 275px;
    height: 275px;
    animation: 800ms ${keyframes`${fadeInUp}`}
  }
`;

export default Container;
