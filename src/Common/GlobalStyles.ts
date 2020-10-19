import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #fff;
    // font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    // border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;