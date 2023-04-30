import { useContext } from 'react'
import {
  DeliveryInfoBox,
  DeliveryInfoContainer,
  SuccessContainer,
} from './styles'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  const { address, paymentType } = useContext(CheckoutContext)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <DeliveryInfoContainer>
        <DeliveryInfoBox>
          <li>
            <i>
              <MapPin weight="fill" />
            </i>
            <p>
              Entrega em {address.street}, {address.number}
            </p>
            <p>
              {address.district} - {address.city}, {address.state}
            </p>
          </li>
          <li>
            <i>
              <Timer weight="fill" />
            </i>
            <p>Previsão de entrega</p>
            <p>20 min - 30 min </p>
          </li>
          <li>
            <i>
              <CurrencyDollar />
            </i>
            <p>Pagamento na entrega</p>
            <p>{paymentType}</p>
          </li>
        </DeliveryInfoBox>
        <div>
          <img src="./src/assets/motoboy.svg" alt="" />
        </div>
      </DeliveryInfoContainer>
    </SuccessContainer>
  )
}
