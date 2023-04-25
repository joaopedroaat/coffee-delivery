import { Budget } from './components/Budget'
import { CartList } from './components/CartList'
import { CartFormButton, CartFormContainer } from './styles'

export function CartForm() {
  return (
    <CartFormContainer>
      <CartList />
      <Budget />
      <CartFormButton type="submit">Confirmar Pedido</CartFormButton>
    </CartFormContainer>
  )
}
