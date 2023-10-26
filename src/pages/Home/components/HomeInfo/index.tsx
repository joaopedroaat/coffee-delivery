import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { HomeInfoContainer, ListIcon } from './styles'

export function HomeInfo() {
  return (
    <HomeInfoContainer>
      <img src="/homepage-hero.svg" alt="" />
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <ul>
          <li>
            <ListIcon fillColor="yellow-dark">
              <ShoppingCart weight="fill" />
            </ListIcon>
            <p>Compra simples e segura</p>
          </li>
          <li>
            <ListIcon fillColor="base-text">
              <Package weight="fill" />
            </ListIcon>
            <p>Embalagem mantém o café intacto</p>
          </li>
          <li>
            <ListIcon fillColor="yellow">
              <Timer weight="fill" />
            </ListIcon>
            <p>Entrega rápida e rastreada</p>
          </li>
          <li>
            <ListIcon fillColor="purple">
              <Coffee weight="fill" />
            </ListIcon>
            <p>O café chega fresquinho até você</p>
          </li>
        </ul>
      </div>
    </HomeInfoContainer>
  )
}
