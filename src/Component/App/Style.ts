import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  div#job-query-warning-box {
    path {
      fill: rgb(57, 57, 57);
    }
    p {
      color: rgb(57, 57, 57) !important;
    }
  }
  #job-query-outer-box {
    path {
      fill: rgb(100, 175, 100);
    }
  }
`;

export default GlobalStyle;
