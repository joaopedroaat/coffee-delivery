import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  CoffeeList,
  CoffeeSection,
  HomeContainer,
  InfoGrid,
  InfoIcon,
  InfoItem,
  MainSection,
} from './styles'

import coffeeDeliveryLandpageImage from '../../assets/coffeeDeliveryLandpageImage.svg'
import { CoffeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <MainSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <InfoGrid>
            <InfoItem>
              <InfoIcon backgroundColor="yellow-dark">
                <ShoppingCart size={'1rem'} weight="fill" />
              </InfoIcon>
              <p>Compra simples e segura</p>
            </InfoItem>
            <InfoItem>
              <InfoIcon backgroundColor="gray">
                <Package size={'1rem'} weight="fill" />
              </InfoIcon>
              <p>Embalagem mantém o café intacto</p>
            </InfoItem>
            <InfoItem>
              <InfoIcon backgroundColor="yellow">
                <Timer size={'1rem'} weight="fill" />
              </InfoIcon>
              <p>Entrega rápida e rastreada</p>
            </InfoItem>
            <InfoItem>
              <InfoIcon backgroundColor="purple">
                <Coffee size={'1rem'} weight="fill" />
              </InfoIcon>
              <p>O café chega fresquinho até você</p>
            </InfoItem>
          </InfoGrid>
        </div>
        <img src={coffeeDeliveryLandpageImage} alt="Café do Coffee Delivery" />
      </MainSection>
      <CoffeeSection>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          <CoffeCard />
        </CoffeeList>
      </CoffeeSection>
    </HomeContainer>
  )
}
