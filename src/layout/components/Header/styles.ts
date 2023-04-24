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
  position: relative;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CartItemCount = styled.span`
  position: absolute;
  top: -25%;
  right: -25%;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  font-weight: 700;

  border-radius: 1000px;
  width: 1.25rem;
  padding: 0.125rem;
`

export const LocationButton = styled(HeaderButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  i {
    color: ${(props) => props.theme.purple};
  }
`
