import { Trash } from '@phosphor-icons/react'
import { StepperInput } from '../../../../../../../../components/StepperInput'
import {
  CartItemImage,
  CartListItemContainer,
  DataContainer,
  Form,
  Info,
  TrashButton,
} from './styles'
import { CartItem } from '../../../../../../../../reducers/cart/reducer'

interface CartListItemProps {
  item: CartItem
}

export function CartListItem({ item }: CartListItemProps) {
  function handleProductQuantityChange() {}

  function handleTrashButtonClick() {}

  return (
    <CartListItemContainer>
      <CartItemImage src={`src/assets/coffeeImages/${item.coffee.img}`} />
      <DataContainer>
        <Info>
          <p>{item.coffee.name}</p>
          <span>R$ {item.coffee.price.toFixed(2)}</span>
        </Info>
        <Form>
          <StepperInput
            value={item.quantity}
            onChange={handleProductQuantityChange}
          />
          <TrashButton onClick={handleTrashButtonClick}>
            <i>
              <Trash />
            </i>
            Remover
          </TrashButton>
        </Form>
      </DataContainer>
    </CartListItemContainer>
  )
}
