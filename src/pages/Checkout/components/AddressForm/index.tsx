import { MapPinLine } from '@phosphor-icons/react'
import { ChangeEvent, useContext } from 'react'
import { Address, CheckoutContext } from '../../../../contexts/CheckoutContext'
import {
  AddressFormContainer,
  AddressFormHeader,
  AddressGrid,
  AddressInput,
} from './styles'

export function AddressForm() {
  const { address, changeAddress } = useContext(CheckoutContext)

  function handleAddressChange(newAddress: Address) {
    changeAddress(newAddress)
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
          required
        />
        <AddressInput
          placeholder="Rua"
          value={address.street}
          onChange={handleStreetChange}
          area="street"
          required
        />
        <AddressInput
          placeholder="Número"
          value={address.number}
          onChange={handleNumberChange}
          area="number"
          required
        />
        <AddressInput
          placeholder="Complemento"
          value={address.complement}
          onChange={handleComplementChange}
          area="complement"
        />
        <AddressInput
          placeholder="Bairro"
          value={address.district}
          onChange={handleDistrictChange}
          area="district"
          required
        />
        <AddressInput
          placeholder="Cidade"
          value={address.city}
          onChange={handleCityChange}
          area="city"
          required
        />
        <AddressInput
          placeholder="UF"
          value={address.state}
          onChange={handleStateChange}
          area="state"
          required
        />
      </AddressGrid>
    </AddressFormContainer>
  )
}
