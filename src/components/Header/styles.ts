import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2em 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Brand = styled.a`
  cursor: pointer;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.75rem;
`

const BaseActionLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  font-size: 0.875em;

  border: none;
  border-radius: 8px;

  cursor: pointer;
`

export const LocationLink = styled(BaseActionLink)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartLink = styled(BaseActionLink)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
