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
            <i>
              <MapPin size={24} weight="fill" />
            </i>
            <p>Porto Alegre, RS</p>
          </LocationLink>
          <CartLink>
            <i>
              <ShoppingCart size={24} weight="fill" />
            </i>
          </CartLink>
        </Actions>
      </nav>
    </HeaderContainer>
  )
}
