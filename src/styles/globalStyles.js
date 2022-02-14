import  { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: none;
  }
`