import { ReactNode, createContext, useState } from 'react'

export interface Address {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

export type PaymentType = 'credit' | 'debit' | 'cash'

interface CheckoutContextType {
  address: Address
  changeAddress: (address: Address) => void
  paymentType: PaymentType
  changePaymentType: (payment: PaymentType) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [address, setAddress] = useState<Address>({
    cep: '',
    city: '',
    complement: '',
    district: '',
    number: '',
    state: '',
    street: '',
  })

  const [paymentType, setPaymentType] = useState<PaymentType>('credit')

  function changeAddress(address: Address) {
    setAddress(address)
  }

  function changePaymentType(payment: PaymentType) {
    setPaymentType(payment)
  }

  return (
    <CheckoutContext.Provider
      value={{
        address,
        changeAddress,
        paymentType,
        changePaymentType,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
