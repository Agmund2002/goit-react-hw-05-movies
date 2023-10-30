import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  padding: ${p => p.theme.spacing(5)};
  padding-top: ${p => p.theme.spacing(1)};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
button {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
`;