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
            <a>
              <MapPin size={24} weight="fill" />
            </a>
            <p>Porto Alegre, RS</p>
          </LocationLink>
          <CartLink>
            <a>
              <ShoppingCart size={24} weight="fill" />
            </a>
          </CartLink>
        </Actions>
      </nav>
    </HeaderContainer>
  )
}
