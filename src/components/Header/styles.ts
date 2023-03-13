import styled from 'styled-components'
import { BaseButton } from '../../styles/BaseButton'

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

export const LocationLink = styled(BaseButton)`
  gap: 0.25rem;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartLink = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
