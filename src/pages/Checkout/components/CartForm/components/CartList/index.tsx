import { useContext } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'
import { CartListItem } from './components/CartListItem'
import { CartListContainer } from './styles'

export function CartList() {
  const { items } = useContext(CartContext)

  return (
    <CartListContainer>
      {items.map((item) => (
        <CartListItem key={item.coffee.name} item={item} />
      ))}
    </CartListContainer>
  )
}
