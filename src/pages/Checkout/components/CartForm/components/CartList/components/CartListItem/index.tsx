import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { StepperInput } from '../../../../../../../../components/StepperInput'
import { CartContext } from '../../../../../../../../contexts/CartContext'
import { CartItem } from '../../../../../../../../reducers/cart/reducer'
import {
  CartItemImage,
  CartListItemContainer,
  DataContainer,
  Form,
  Info,
  TrashButton,
} from './styles'

interface CartListItemProps {
  item: CartItem
}

export function CartListItem({ item }: CartListItemProps) {
  const { incrementItem, decrementItem, removeItem } = useContext(CartContext)

  function handleProductQuantityChange(value: number) {
    if (item.quantity < value) {
      incrementItem(item.coffee)
    } else {
      decrementItem(item.coffee)
    }
  }

  function handleTrashButtonClick() {
    removeItem(item.coffee)
  }

  return (
    <CartListItemContainer>
      <CartItemImage src={`coffeeImages/${item.coffee.img}`} />
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
