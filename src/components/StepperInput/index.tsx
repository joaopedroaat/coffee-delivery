import { FormEvent } from 'react'
import {
  DecreaseButton,
  IncreaseButton,
  Input,
  StepperInputContainer,
} from './styles'

interface StepperInputProps {
  value: number
  handleValueChange: (newValue: number) => void
}

export function StepperInput({ value, handleValueChange }: StepperInputProps) {
  const handleDecrease = (evt: FormEvent) => {
    evt.preventDefault()
    if (value > 0) {
      handleValueChange(value - 1)
    }
  }

  const handleIncrease = (evt: FormEvent) => {
    evt.preventDefault()
    if (value < 99) {
      handleValueChange(value + 1)
    }
  }

  return (
    <StepperInputContainer>
      <DecreaseButton onClick={handleDecrease}>-</DecreaseButton>
      <Input type="number" min="0" max="99" value={value} readOnly />
      <IncreaseButton onClick={handleIncrease}>+</IncreaseButton>
    </StepperInputContainer>
  )
}
