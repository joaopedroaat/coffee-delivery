import { NavLink } from 'react-router-dom'
import { CoffeeList } from './components/CoffeeList'
import { HomeInfo } from './components/HomeInfo'
import { CartInfo, HomeContainer } from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { items } = useContext(CartContext)

  return (
    <HomeContainer>
      <HomeInfo />
      <CoffeeList />
      {items.length && (
        <NavLink to="checkout" title="Carrinho">
          <CartInfo>
            <ShoppingCartSimple size={24} />
            <span>
              {items
                .reduce((acc, item) => item.quantity + acc, 0)
                .toString()
                .padStart(2, '0')}
            </span>
          </CartInfo>
        </NavLink>
      )}
    </HomeContainer>
  )
}
