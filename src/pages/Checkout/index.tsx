import { AddressForm } from './components/AddressForm'
import { CartForm } from './components/CartForm'
import { PaymentForm } from './components/PaymentForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <AddressForm />
        <PaymentForm />
        <CartForm />
      </form>
    </CheckoutContainer>
  )
}
