import { AddressFormContainer, AddressInput, AddressGrid } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
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
