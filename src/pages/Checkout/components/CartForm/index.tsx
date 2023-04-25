import { CartList } from './components/CartList'
import { CartFormContainer } from './styles'

export function CartForm() {
  return (
    <CartFormContainer>
      <CartList />
      <button type="submit">Submit Form</button>
    </CartFormContainer>
  )
}
