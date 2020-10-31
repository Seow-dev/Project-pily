import { createGlobalStyle } from "styled-components";
// import reset from 'styled-reset';



const GlobalStyle = createGlobalStyle`
  @import url("https://use.fontawesome.com/releases/v5.11.2/css/all.css");
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic|Black+Han+Sans|Do+Hyeon|Song+Myung|Nanum+Myeongjo|Nanum+Pen+Script");

  * {
    box-sizing: border-box;
  }
  body{
    background-color: #fff;
    font-family: "Noto Sans KR", sans-serif;
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
