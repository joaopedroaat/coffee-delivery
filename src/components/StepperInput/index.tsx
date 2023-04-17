import { useState } from 'react'
import {
  DecreaseButton,
  IncreaseButton,
  Input,
  StepperInputContainer,
} from './styles'

export function StepperInput() {
  const [value, setValue] = useState(0)

  const handleDecrease = () => {
    if (value > 0) {
      setValue((currentState) => {
        return currentState - 1
      })
    }
  }

  const handleIncrease = () => {
    if (value < 99) {
      setValue((currentState) => {
        return currentState + 1
      })
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
