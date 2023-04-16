import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderNavigation,
  CartButton,
  LocationButton,
} from './styles'

import logo from '../../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={logo} alt="" />
      </NavLink>
      <HeaderNavigation>
        <LocationButton>
          <i>
            <MapPin weight="fill" />
          </i>
          <p>Maceió, AL</p>
        </LocationButton>
        <NavLink to="/checkout" title="Carrinho">
          <CartButton>
            <i>
              <ShoppingCart weight="fill" />
            </i>
          </CartButton>
        </NavLink>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
