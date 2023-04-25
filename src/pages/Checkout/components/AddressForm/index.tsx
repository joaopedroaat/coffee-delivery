import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressFormContainer,
  AddressInput,
  AddressGrid,
  AddressFormHeader,
} from './styles'
import { ChangeEvent, useState } from 'react'

export interface Address {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

interface AddressFormProps {
  initialAddress: Address
  onAddressChange: (address: Address) => void
}

export function AddressForm({
  initialAddress,
  onAddressChange,
}: AddressFormProps) {
  const [address, setAddress] = useState<Address>(initialAddress)

  function handleAddressChange(newAddress: Address) {
    setAddress(newAddress)
    onAddressChange(newAddress)
  }

  function handleCepChange(evt: ChangeEvent<HTMLInputElement>) {
    handleAddressChange({ ...address, cep: evt.target.value })
  }

  function handleStreetChange(evt: ChangeEvent<HTMLInputElement>) {
    handleAddressChange({ ...address, street: evt.target.value })
  }

  function handleNumberChange(evt: ChangeEvent<HTMLInputElement>) {
    handleAddressChange({ ...address, number: evt.target.value })
  }

  function handleComplementChange(evt: ChangeEvent<HTMLInputElement>) {
    handleAddressChange({ ...address, complement: evt.target.value })
  }

  function handleDistrictChange(evt: ChangeEvent<HTMLInputElement>) {
    handleAddressChange({ ...address, district: evt.target.value })
  }

  function handleCityChange(evt: ChangeEvent<HTMLInputElement>) {
    handleAddressChange({ ...address, city: evt.target.value })
  }

  function handleStateChange(evt: ChangeEvent<HTMLInputElement>) {
    handleAddressChange({ ...address, state: evt.target.value })
  }

  return (
    <AddressFormContainer>
      <AddressFormHeader>
        <i>
          <MapPinLine />
        </i>
        <div>
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressFormHeader>
      <AddressGrid>
        <AddressInput
          placeholder="CEP"
          value={address.cep}
          onChange={handleCepChange}
          area="cep"
        />
        <AddressInput
          placeholder="Rua"
          value={address.street}
          onChange={handleStreetChange}
          area="street"
        />
        <AddressInput
          placeholder="Número"
          value={address.number}
          onChange={handleNumberChange}
          area="number"
        />
        <AddressInput
          placeholder="Compemento"
          value={address.complement}
          onChange={handleComplementChange}
          area="complement"
        />
        <AddressInput
          placeholder="Bairro"
          value={address.district}
          onChange={handleDistrictChange}
          area="district"
        />
        <AddressInput
          placeholder="Cidade"
          value={address.city}
          onChange={handleCityChange}
          area="city"
        />
        <AddressInput
          placeholder="UF"
          value={address.state}
          onChange={handleStateChange}
          area="state"
        />
      </AddressGrid>
    </AddressFormContainer>
  )
}
