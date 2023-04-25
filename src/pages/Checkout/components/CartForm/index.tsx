import { Budget } from './components/Budget'
import { CartList } from './components/CartList'
import { CartFormContainer } from './styles'

export function CartForm() {
  return (
    <CartFormContainer>
      <CartList />
      <Budget />
      <button type="submit">Submit Form</button>
    </CartFormContainer>
  )
}
