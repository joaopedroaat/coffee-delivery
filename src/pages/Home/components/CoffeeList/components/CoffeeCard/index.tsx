import { ShoppingCartSimple } from '@phosphor-icons/react'
import { FormEvent, useState } from 'react'
import { StepperInput } from '../../../../../../components/StepperInput'
import {
  CardForm,
  CardImage,
  CardSubmitButton,
  CoffeeCardContainer,
  FormSubmit,
  Tag,
  TagList,
} from './styles'

type ITag = 'tradicional' | 'gelado' | 'com leite' | 'especial' | 'alcoólico'

export interface ICoffee {
  name: string
  description: string
  tags: ITag[]
  img: string
  price: number
}

export interface ICartItem {
  coffee: ICoffee
  quantity: number
}

interface CoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)

  function handleFormSubmit(evt: FormEvent) {
    evt.preventDefault()

    console.log({
      coffee,
      quantity,
    } as ICartItem)
  }

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
      <CardForm onSubmit={handleFormSubmit}>
        <label>
          R$<span>{coffee.price.toFixed(2)}</span>
        </label>
        <FormSubmit>
          <StepperInput value={quantity} handleValueChange={setQuantity} />
          <CardSubmitButton type="submit">
            <i>
              <ShoppingCartSimple weight="fill" />
            </i>
          </CardSubmitButton>
        </FormSubmit>
      </CardForm>
    </CoffeeCardContainer>
  )
}
