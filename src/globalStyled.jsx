import 'modern-normalize';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    background-color: rgb(250, 250, 248);
  }
  
  code {
    font-family: 'Manrope', sans-serif;
      
  }

  .wrapper-container{
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border: thick double #32a1ce;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li{
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
  }
  
  hr{
    margin: 0;
    color: blue;
  }
`;