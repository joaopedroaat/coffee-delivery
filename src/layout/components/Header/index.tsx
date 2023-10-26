import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderNavigation,
  CartButton,
  LocationButton,
  CartItemCount,
} from './styles'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export function Header() {
  const { items } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src="coffee-delivery-logo.svg" alt="" />
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

            {items.length > 0 && <CartItemCount>{items.length}</CartItemCount>}
          </CartButton>
        </NavLink>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
