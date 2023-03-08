import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  Actions,
  Brand,
  CartLink,
  HeaderContainer,
  LocationLink,
} from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Brand>
          <img src={logo} alt="" />
        </Brand>
        <Actions>
          <LocationLink>
            <MapPin size={24} />
            <p>Porto Alegre, RS</p>
          </LocationLink>
          <CartLink>
            <ShoppingCart size={24} />
          </CartLink>
        </Actions>
      </nav>
    </HeaderContainer>
  )
}
