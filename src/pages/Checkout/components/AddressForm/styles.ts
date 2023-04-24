import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 6px;
`

interface AddressInputProps {
  area: string
}

export const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  grid-template-areas:
    'cep . . .'
    'street street street street'
    'number complement complement complement'
    'district city city state';
`

export const AddressInput = styled.input<AddressInputProps>`
  background: ${(props) => props.theme['base-input']};

  grid-area: ${(props) => props.area};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  padding: 0.75rem;

  color: ${(props) => props.theme['base-text']};
`
