import { NavLink } from 'react-router-dom'
import { Budget } from './components/Budget'
import { CartList } from './components/CartList'
import { CartFormButton, CartFormContainer } from './styles'

export function CartForm() {
  return (
    <CartFormContainer>
      <CartList />
      <Budget />
      <NavLink to="/success" title="Finalizar pedido">
        <CartFormButton type="submit">Confirmar Pedido</CartFormButton>
      </NavLink>
    </CartFormContainer>
  )
}
