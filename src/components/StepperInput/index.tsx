import { FormEvent, InputHTMLAttributes } from 'react'
import {
  DecreaseButton,
  IncreaseButton,
  Input,
  StepperInputContainer,
} from './styles'

interface StepperInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number
  min: number
  max: number
  handleValueChange: (newValue: number) => void
}

export function StepperInput({
  value,
  min,
  max,
  handleValueChange,
  ...rest
}: StepperInputProps) {
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
      <Input
        type="number"
        value={value}
        min={min}
        max={max}
        readOnly
        {...rest}
      />
      <IncreaseButton onClick={handleIncrease}>+</IncreaseButton>
    </StepperInputContainer>
  )
}
