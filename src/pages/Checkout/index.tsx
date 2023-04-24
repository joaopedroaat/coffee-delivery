import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <AddressForm />
        <PaymentForm />
      </form>
    </CheckoutContainer>
  )
}
