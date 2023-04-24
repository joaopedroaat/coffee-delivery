import { Trash } from '@phosphor-icons/react'
import { StepperInput } from '../../../../../../../../components/StepperInput'
import { ICartItem } from '../../../../../../../../contexts/CartContext'
import {
  CartItemImage,
  CartListItemContainer,
  DataContainer,
  Form,
  Info,
  TrashButton,
} from './styles'

interface CartListItemProps {
  item: ICartItem
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
