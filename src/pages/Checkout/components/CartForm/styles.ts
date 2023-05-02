import styled from 'styled-components'
import { FormContainer } from '../../styles'

export const CartFormContainer = styled(FormContainer)`
  border-radius: 6px 44px;
`

export const CartFormButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  padding: 0.75rem 0;

  border: none;
  border-radius: 6px;

  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.875rem;

  cursor: pointer;

  :disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`
