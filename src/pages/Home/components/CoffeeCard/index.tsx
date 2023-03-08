import { ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeCardContainer,
  Description,
  FormContainer,
  Tag,
  TagList,
} from './styles'

import expressTraditional from '../../../../assets/coffees/expressTraditional.svg'

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
        <label>
          R$
          <span>9.00</span>
        </label>
        <div>
          <input name="coffeeCount" type="number" value={1} />
          <button type="submit">
            <ShoppingCart size={'1rem'} weight="fill" />
          </button>
        </div>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
