import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}
html * {
  box-sizing: inherit;
}

html, body, #root {
  height: 100%;
}
body {
  font-size: 18px;
  margin: 0;
  font-family: 'Kumbh Sans', sans-serif;
  background-color: ${(props) => props.theme.body.color};
}
h2, h3 {
  margin: 0;
}
`;

export default GlobalStyles;
