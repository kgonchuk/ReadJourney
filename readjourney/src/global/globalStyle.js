import { createGlobalStyle } from "styled-components";

import GilroyBold from "../fonts/Gilroy-Bold.woff";
import GilroyMedium from "../fonts/Gilroy-Medium.woff";
import color from "../global/globalColor";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700; 
  src: url(${GilroyBold}) format('woff');
}
@font-face {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500; 
  src: url(${GilroyMedium}) format('woff');
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Gilroy", -apple-system, BlinkMacSystemFont, "SF Pro Text", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.29;
  color: ${color.whitePrimary};
  background-color: ${color.black};
  width: 100%;
  height: 100vh;
  margin: 0;  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  color: ${color.whitePrimary};
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: inherit;
}
html {
  scroll-behavior: smooth;
}

.no-scroll {
  overflow: hidden;
}

`;
