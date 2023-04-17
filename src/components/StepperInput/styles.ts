import styled from 'styled-components'

export const StepperInputContainer = styled.div``

const Button = styled.button`
  border: none;

  background: ${(props) => props.theme['base-button']};

  padding: 0.5rem;

  cursor: pointer;
`

export const DecreaseButton = styled(Button)`
  border-radius: 6px 0 0 6px;
`

export const IncreaseButton = styled(Button)`
  border-radius: 0 6px 6px 0;
`

export const Input = styled.input.attrs({
  type: 'number',
})`
  background: ${(props) => props.theme['base-button']};
  outline: none;
  border: none;

  padding: 0.5rem 0;
  text-align: center;
`
