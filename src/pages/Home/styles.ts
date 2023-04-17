import styled from 'styled-components'

export const HomeContainer = styled.main``

export const CoffeeSection = styled.section`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 1rem;
  }
`
