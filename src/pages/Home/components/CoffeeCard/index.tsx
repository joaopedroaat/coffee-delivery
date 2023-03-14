import {
  CartButton,
  CoffeeCardContainer,
  Description,
  FormContainer,
  Tag,
  TagList,
} from './styles'

import { ShoppingCartSimple } from '@phosphor-icons/react'

interface CoffeeCardProps {
  name: string
  description: string
  tags: string[]
  img: string
  price: number
}

export function CoffeCard({
  name,
  description,
  tags,
  img,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={`./src/assets/coffees/${img}`} alt="" />
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagList>
      <Description>
        <h1>{name}</h1>
        <p>{description}</p>
      </Description>
      <FormContainer>
        <label htmlFor="coffee-count">
          <span>R$</span>
          {price.toFixed(2)}
        </label>
        <input type="number" id="coffee-count" value={0} />
        <CartButton type="submit">
          <ShoppingCartSimple size={20} weight="fill" />
        </CartButton>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
