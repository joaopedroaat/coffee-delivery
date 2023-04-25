import { useContext } from 'react'
import { SuccessContainer } from './styles'
import { CheckoutContext } from '../../contexts/CheckoutContext'

export function Success() {
  const { address, paymentType } = useContext(CheckoutContext)

  return (
    <SuccessContainer>
      <p>{JSON.stringify(address)}</p>
      <p>{paymentType}</p>
    </SuccessContainer>
  )
}
