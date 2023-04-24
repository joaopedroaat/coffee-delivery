import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  PaymentFormContainer,
  PaymentFormHeader,
  PaymentMethod,
  PaymentMethodList,
} from './styles'

export function PaymentForm() {
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
          <input type="radio" id="credit" name="payment" />
          <div>
            <i>
              <CreditCard />
            </i>
            <label htmlFor="credit">Cartão de crédito</label>
          </div>
        </PaymentMethod>
        <PaymentMethod>
          <input type="radio" id="debit" name="payment" />
          <div>
            <i>
              <Bank />
            </i>
            <label htmlFor="debit">Cartão de débito</label>
          </div>
        </PaymentMethod>
        <PaymentMethod>
          <input type="radio" id="cash" name="payment" />
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
