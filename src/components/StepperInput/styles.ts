import styled from 'styled-components'

export const StepperInputContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

const Button = styled.button`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  border: none;
  cursor: pointer;
`

export const DecreaseButton = styled(Button)`
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 6px 0 0 6px;
`

export const IncreaseButton = styled(Button)`
  padding: 0.5rem 0.5rem 0.5rem 0;
  border-radius: 0 6px 6px 0;
`

export const Input = styled.span`
  background: ${(props) => props.theme['base-button']};
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`
