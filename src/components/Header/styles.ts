import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin-bottom: 7.875rem;
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

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const LocationLink = styled(BaseActionLink)`
  i {
    color: ${(props) => props.theme.purple};
  }

  gap: 0.25rem;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartLink = styled(BaseActionLink)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
