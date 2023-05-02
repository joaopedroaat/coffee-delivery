import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    :focus {
      outline: 1px solid ${(props) => props.theme.yellow};
    }
  }

  ul {
    list-style: none;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
`
