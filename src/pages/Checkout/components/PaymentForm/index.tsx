import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { ChangeEvent, useContext } from 'react'
import {
  CheckoutContext,
  PaymentType,
} from '../../../../contexts/CheckoutContext'
import {
  PaymentFormContainer,
  PaymentFormHeader,
  PaymentMethod,
  PaymentMethodList,
} from './styles'

export function PaymentForm() {
  const { paymentType, changePaymentType } = useContext(CheckoutContext)

  function handlePaymentTypeChange(evt: ChangeEvent<HTMLInputElement>) {
    changePaymentType(evt.target.value as PaymentType)
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
