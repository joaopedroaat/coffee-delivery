import styled from 'styled-components'
import { FormContainer, FormHeader } from '../../styles'

export const PaymentFormContainer = styled(FormContainer)`
  margin-top: 1rem;
`

export const PaymentFormHeader = styled(FormHeader)`
  i {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentMethodList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const PaymentMethod = styled.div`
  position: relative;
  flex: 1;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
  }
  input:checked + div {
    border-color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    label {
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
    i {
      color: ${(props) => props.theme.purple};
    }
  }
`
