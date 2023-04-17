import { ShoppingCartSimple } from '@phosphor-icons/react'
import {
  CardForm,
  CardImage,
  CardSubmitButton,
  CoffeeCardContainer,
  FormSubmit,
  Tag,
  TagList,
} from './styles'
import { StepperInput } from '../../../../../../components/StepperInput'

type ITag = 'tradicional' | 'gelado' | 'com leite' | 'especial' | 'alcoólico'

export interface ICoffee {
  name: string
  description: string
  tags: ITag[]
  img: string
  price: number
}

interface CoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CardImage src={`./src/assets/coffeeImages/${coffee.img}`} alt="" />
      <TagList>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagList>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>
      <CardForm onSubmit={(evt) => evt.preventDefault()}>
        <label>
          R$<span>{coffee.price.toFixed(2)}</span>
        </label>
        <FormSubmit>
          <StepperInput />
          <CardSubmitButton>
            <i>
              <ShoppingCartSimple weight="fill" />
            </i>
          </CardSubmitButton>
        </FormSubmit>
      </CardForm>
    </CoffeeCardContainer>
  )
}
