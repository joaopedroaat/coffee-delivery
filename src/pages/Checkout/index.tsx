import { FormEvent, useState } from 'react'
import { Address, AddressForm } from './components/AddressForm'
import { CartForm } from './components/CartForm'
import { PaymentForm } from './components/PaymentForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const [address, setAddress] = useState<Address>({
    cep: '',
    city: '',
    complement: '',
    district: '',
    number: '',
    state: '',
    street: '',
  })

  function handleAddressChange(newAddress: Address) {
    setAddress(newAddress)
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log('Form Submit')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Complete seu pedido</h1>
          <AddressForm
            initialAddress={address}
            onAddressChange={handleAddressChange}
          />
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
