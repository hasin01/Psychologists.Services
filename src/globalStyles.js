// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`



body {

  font-family: "Inter",sans-serif;
}
a{
    text-decoration: none;
  }

  :root {
    --main-rgb-black:rgba(25, 26, 21, 0.2);
    --main-text-batton-color: #fbfbfb;
    --main-batton-color: #54be96;
    --main-text-color: #191a15;
    --main-batton-hover-color: #36a379;
    --main-hover-login-color: rgba(84, 190, 150, 0.2);
    --main-white-color: white;
    --main-logo-color:rgba(84, 190, 150, 1);
}


`;

export default GlobalStyles;