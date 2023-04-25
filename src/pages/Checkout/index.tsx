import { FormEvent, useState } from 'react'
import { Address, AddressForm } from './components/AddressForm'
import { CartForm } from './components/CartForm'
import { PaymentForm, PaymentType } from './components/PaymentForm'
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

  const [paymentType, setPaymentType] = useState<PaymentType>('credit')

  function handleAddressChange(newAddress: Address) {
    setAddress(newAddress)
  }

  function handlePaymenTypeChange(newPaymentType: PaymentType) {
    setPaymentType(newPaymentType)
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log(address, paymentType)
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
          <PaymentForm
            initialPaymentType={paymentType}
            onPaymentTypeChange={handlePaymenTypeChange}
          />
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <CartForm />
        </div>
      </form>
    </CheckoutContainer>
  )
}
