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
        <div>
          <h1>Complete seu pedido</h1>
          <AddressForm />
          <PaymentForm />
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <CartForm />
        </div>
      </form>
    </CheckoutContainer>
  )
}
