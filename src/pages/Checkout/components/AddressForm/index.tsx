import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressFormContainer,
  AddressInput,
  AddressGrid,
  AddressHeader,
} from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <AddressHeader>
        <i>
          <MapPinLine />
        </i>
        <div>
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressHeader>
      <AddressGrid>
        <AddressInput placeholder="CEP" area="cep" />
        <AddressInput placeholder="Rua" area="street" />
        <AddressInput placeholder="Número" area="number" />
        <AddressInput placeholder="Compemento" area="complement" />
        <AddressInput placeholder="Bairro" area="district" />
        <AddressInput placeholder="Cidade" area="city" />
        <AddressInput placeholder="UF" area="state" />
      </AddressGrid>
    </AddressFormContainer>
  )
}
