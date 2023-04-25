import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { ChangeEvent, useState } from 'react'
import {
  PaymentFormContainer,
  PaymentFormHeader,
  PaymentMethod,
  PaymentMethodList,
} from './styles'

export type PaymentType = 'credit' | 'debit' | 'cash'

interface PaymentFormProps {
  initialPaymentType: PaymentType
  onPaymentTypeChange: (paymentType: PaymentType) => void
}

export function PaymentForm({
  initialPaymentType,
  onPaymentTypeChange,
}: PaymentFormProps) {
  const [paymentType, setPaymentType] =
    useState<PaymentType>(initialPaymentType)

  function handlePaymentTypeChange(evt: ChangeEvent<HTMLInputElement>) {
    const newPaymentType = evt.target.value as PaymentType
    setPaymentType(newPaymentType)
    onPaymentTypeChange(newPaymentType)
  }

  return (
    <PaymentFormContainer>
      <PaymentFormHeader>
        <i>
          <CurrencyDollar />
        </i>
        <div>
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentFormHeader>
      <PaymentMethodList>
        <PaymentMethod>
          <input
            type="radio"
            checked={paymentType === 'credit'}
            value="credit"
            onChange={handlePaymentTypeChange}
            id="credit"
            name="payment"
          />
          <div>
            <i>
              <CreditCard />
            </i>
            <label htmlFor="credit">Cartão de crédito</label>
          </div>
        </PaymentMethod>
        <PaymentMethod>
          <input
            type="radio"
            checked={paymentType === 'debit'}
            value="debit"
            onChange={handlePaymentTypeChange}
            id="debit"
            name="payment"
          />
          <div>
            <i>
              <Bank />
            </i>
            <label htmlFor="debit">Cartão de débito</label>
          </div>
        </PaymentMethod>
        <PaymentMethod>
          <input
            type="radio"
            checked={paymentType === 'cash'}
            value="cash"
            onChange={handlePaymentTypeChange}
            id="cash"
            name="payment"
          />
          <div>
            <i>
              <Money />
            </i>
            <label htmlFor="cash">Dinheiro</label>
          </div>
        </PaymentMethod>
      </PaymentMethodList>
    </PaymentFormContainer>
  )
}
