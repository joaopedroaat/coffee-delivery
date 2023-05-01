import { FormEvent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddressForm } from './components/AddressForm'
import { CartForm } from './components/CartForm'
import { PaymentForm } from './components/PaymentForm'
import { CheckoutContainer } from './styles'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { emptyCart } = useContext(CartContext)

  const navigate = useNavigate()

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    emptyCart()
    navigate('/success')
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
