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
import { useState } from 'react'

type Tag = 'tradicional' | 'gelado' | 'com leite' | 'especial' | 'alcoólico'

interface ICoffee {
  name: string
  description: string
  tags: Tag[]
  img: string
  price: number
}

export function Home() {
  const [coffees] = useState<ICoffee[]>([
    {
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      img: 'expresso-tradicional.svg',
      price: 9.9,
    },
    {
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      tags: ['tradicional'],
      img: 'expresso-americano.svg',
      price: 9.9,
    },
    {
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tags: ['tradicional'],
      img: 'expresso-cremoso.svg',
      price: 9.9,
    },
    {
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: ['tradicional', 'gelado'],
      img: 'expresso-gelado.svg',
      price: 9.9,
    },
    {
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: ['tradicional', 'com leite'],
      img: 'cafe-com-leite.svg',
      price: 9.9,
    },
    {
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: ['tradicional', 'com leite'],
      img: 'latte.svg',
      price: 9.9,
    },
    {
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: ['tradicional', 'com leite'],
      img: 'capuccino.svg',
      price: 9.9,
    },
    {
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['tradicional', 'com leite'],
      img: 'macchiato.svg',
      price: 9.9,
    },
    {
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tags: ['tradicional', 'com leite'],
      img: 'mocaccino.svg',
      price: 9.9,
    },
    {
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: ['especial', 'com leite'],
      img: 'chocolate-quente.svg',
      price: 9.9,
    },
    {
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: ['especial', 'alcoólico', 'gelado'],
      img: 'cubano.svg',
      price: 9.9,
    },
    {
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: ['especial'],
      img: 'havaiano.svg',
      price: 9.9,
    },
    {
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: ['especial'],
      img: 'arabe.svg',
      price: 9.9,
    },
    {
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: ['especial', 'alcoólico'],
      img: 'irlandes.svg',
      price: 9.9,
    },
  ])

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
          {coffees.map((coffee) => (
            <CoffeCard
              key={coffee.name}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              img={coffee.img}
              price={coffee.price}
            />
          ))}
        </CoffeeList>
      </CoffeeSection>
    </HomeContainer>
  )
}
