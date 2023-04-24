import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 6px;
`

export const FormHeader = styled.header`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  display: flex;
  gap: 0.5rem;

  i {
    color: ${(props) => props.theme.yellow};
    align-self: flex-start;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
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
