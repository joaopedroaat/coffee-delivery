import { useContext } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'
import { CartListItem } from './components/CartListItem'
import { CartListContainer } from './styles'

export function CartList() {
  const { cart } = useContext(CartContext)

  return (
    <CartListContainer>
      {cart.map((item) => (
        <CartListItem key={item.coffee.name} item={item} />
      ))}
    </CartListContainer>
  )
}
