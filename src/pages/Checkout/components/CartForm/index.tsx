import { useContext } from 'react'
import { Budget } from './components/Budget'
import { CartList } from './components/CartList'
import { CartFormButton, CartFormContainer } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export function CartForm() {
  const { items } = useContext(CartContext)

  return (
    <CartFormContainer>
      <CartList />
      <Budget />

      <CartFormButton type="submit" disabled={items.length === 0}>
        Confirmar Pedido
      </CartFormButton>
    </CartFormContainer>
  )
}
