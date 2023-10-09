import { FormEvent } from 'react'
import {
  DecreaseButton,
  IncreaseButton,
  Input,
  StepperInputContainer,
} from './styles'

interface StepperInputProps {
  value: number
  onChange: (newValue: number) => void
}

export function StepperInput({ value, onChange }: StepperInputProps) {
  const handleDecrease = (evt: FormEvent) => {
    evt.preventDefault()
    if (value > 1) {
      onChange(value - 1)
    }
  }

  const handleIncrease = (evt: FormEvent) => {
    evt.preventDefault()
    if (value < 99) {
      onChange(value + 1)
    }
  }

  return (
    <StepperInputContainer>
      <DecreaseButton onClick={handleDecrease}>-</DecreaseButton>
      <Input>{value}</Input>
      <IncreaseButton onClick={handleIncrease}>+</IncreaseButton>
    </StepperInputContainer>
  )
}
