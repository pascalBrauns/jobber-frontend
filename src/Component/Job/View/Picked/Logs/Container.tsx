import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  div.MuiInputBase-root {
    box-sizing: border-box;
    height: 100%;
  }

  div.MuiFormControl-root {
    box-sizing: border-box;
    height: 100%;
  }
`;

export default Container;
