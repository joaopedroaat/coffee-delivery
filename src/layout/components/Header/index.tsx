import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderNavigation,
  CartButton,
  LocationButton,
  CartItemCount,
} from './styles'

import logo from '../../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

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

            {cart.length > 0 && <CartItemCount>{cart.length}</CartItemCount>}
          </CartButton>
        </NavLink>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
