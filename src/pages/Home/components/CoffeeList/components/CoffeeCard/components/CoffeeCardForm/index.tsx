import { ShoppingCartSimple } from '@phosphor-icons/react'
import { FormEvent, useContext, useState } from 'react'
import { StepperInput } from '../../../../../../../../components/StepperInput'
import {
  CartContext,
  ICartItem,
  ICoffee,
} from '../../../../../../../../contexts/CartContext'
import {
  CardForm,
  CardImage,
  CardSubmitButton,
  CoffeeCardContainer,
  FormSubmit,
  Tag,
  TagList,
} from './styles'

interface CoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addItemToCart } = useContext(CartContext)

  function handleCoffeeSubmit(evt: FormEvent) {
    evt.preventDefault()
    addItemToCart({
      coffee,
      quantity,
    } as ICartItem)
    setQuantity(0)
  }

  function handleQuantityChange(value: number) {
    setQuantity(value)
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
      <CardForm onSubmit={handleCoffeeSubmit}>
        <label>
          R$<span>{coffee.price.toFixed(2)}</span>
        </label>
        <FormSubmit>
          <StepperInput value={quantity} onChange={handleQuantityChange} />
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
