import { useContext } from 'react'
import { BudgetContainer, BudgetItem, BudgetTotal } from './styles'
import { CartContext } from '../../../../../../contexts/CartContext'

export function Budget() {
  const { items } = useContext(CartContext)

  const itemsValue = items.reduce(
    (acc, item) => item.coffee.price * item.quantity + acc,
    0,
  )
  const deliveryValue = itemsValue ? 3.5 : 0
  const total = itemsValue + deliveryValue

  return (
    <BudgetContainer>
      <BudgetItem>
        <p>Total de itens</p>
        <p>R$ {itemsValue.toFixed(2)}</p>
      </BudgetItem>
      <BudgetItem>
        <p>Entrega</p>
        <p>R$ {deliveryValue.toFixed(2)}</p>
      </BudgetItem>
      <BudgetTotal>
        <p>Total</p>
        <p>R$ {total.toFixed(2)}</p>
      </BudgetTotal>
    </BudgetContainer>
  )
}
