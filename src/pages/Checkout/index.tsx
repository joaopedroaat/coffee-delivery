import { AddressForm } from './components/AddressForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <AddressForm />
      </form>
    </CheckoutContainer>
  )
}
