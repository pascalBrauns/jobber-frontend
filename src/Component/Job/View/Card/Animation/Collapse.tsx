import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% { width: calc(100% - 410px); }
  100% { width: calc(100% - 760px); }
`;

const Collapse = styled.div<{ duration: number; }>`
  animation: ${({ duration }) => duration}ms ${animation};
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export default Collapse;
