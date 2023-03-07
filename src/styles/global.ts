import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  h1,h2 {
    font-family: 'Baloo 2', cursive;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
  }


  small {
    color: ${(props) => props.theme['base-label']};
  }
`
