import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding-top: 5.75rem;
`

export const InfoSection = styled.section`
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1.25rem;

    margin-bottom: 4.125rem;
  }

  div {
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1.125rem;
    }

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

interface ListIconProps {
  fillColor: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const ListIcon = styled.i<ListIconProps>`
  background: ${(props) => props.theme[props.fillColor]};
  color: ${(props) => props.theme.white};

  font-size: 1rem;

  padding: 0.5rem;
  border-radius: 50%;
`
