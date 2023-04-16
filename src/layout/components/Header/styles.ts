import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0;
`

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 6px;

  padding: 0.5rem;

  cursor: pointer;
`

export const CartButton = styled(HeaderButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
export const LocationButton = styled(HeaderButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  i {
    color: ${(props) => props.theme.purple};
  }
`
