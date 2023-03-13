import {
  CartButton,
  CoffeeCardContainer,
  Description,
  FormContainer,
  Tag,
  TagList,
} from './styles'

import expressTraditional from '../../../../assets/coffees/expressTraditional.svg'
import { ShoppingCartSimple } from '@phosphor-icons/react'

export function CoffeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expressTraditional} alt="" />
      <TagList>
        <Tag>Tradicional</Tag>
      </TagList>
      <Description>
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Description>
      <FormContainer>
        <label htmlFor="coffee-count">
          <span>R$</span>
          9,90
        </label>
        <input type="number" id="coffee-count" value={0} />
        <CartButton type="submit">
          <ShoppingCartSimple size={20} weight="fill" />
        </CartButton>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
