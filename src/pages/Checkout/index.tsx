import { FormEvent } from 'react'
import { AddressForm } from './components/AddressForm'
import { CartForm } from './components/CartForm'
import { PaymentForm } from './components/PaymentForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log('Form Submit')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <AddressForm />
        <PaymentForm />
        <CartForm />
      </form>
    </CheckoutContainer>
  )
}
