import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-color: ${(props) => props.theme['green-500']};
}

body {
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem 'Roboto', sans-serif;
}

a, button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}
`
