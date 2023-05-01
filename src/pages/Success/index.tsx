import { useContext } from 'react'
import {
  DeliveryInfoBox,
  DeliveryInfoContainer,
  SuccessContainer,
  ListIcon,
} from './styles'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

/* eslint-disable no-unused-vars */
enum PaymentEnum {
  cash = 'Dinheiro',
  credit = 'Cartão de Crédito',
  debit = 'Cartão de Débito',
}
/* eslint-enable no-unused-vars */

export function Success() {
  const { address, paymentType } = useContext(CheckoutContext)

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <DeliveryInfoContainer>
        <DeliveryInfoBox>
          <li>
            <ListIcon fillColor="purple">
              <MapPin weight="fill" />
            </ListIcon>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {address.street}, {address.number}
                </span>
              </p>
              <p>
                {address.district} - {address.city}, {address.state}
              </p>
            </div>
          </li>
          <li>
            <ListIcon fillColor="yellow">
              <Timer weight="fill" />
            </ListIcon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </li>
          <li>
            <ListIcon fillColor="yellow-dark">
              <CurrencyDollar />
            </ListIcon>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <span>{PaymentEnum[paymentType]}</span>
              </p>
            </div>
          </li>
        </DeliveryInfoBox>
        <div>
          <img src="./src/assets/motoboy.svg" alt="" />
        </div>
      </DeliveryInfoContainer>
    </SuccessContainer>
  )
}
