import { produce } from 'immer'

import { CartAction, CartActionTypes } from './actions'

type ITag = 'tradicional' | 'gelado' | 'com leite' | 'especial' | 'alcoólico'

export interface Coffee {
  name: string
  description: string
  tags: ITag[]
  img: string
  price: number
}

export interface CartItem {
  coffee: Coffee
  quantity: number
}

interface CartState {
  items: CartItem[]
}

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const coffeeToAdd = action.payload.item
        const quantity = action.payload.quantity

        const existingItem = draft.items.find(
          (item) => item.coffee.name === coffeeToAdd.name,
        )

        if (!existingItem) {
          draft.items.push({ coffee: coffeeToAdd, quantity })
          return
        }

        existingItem.quantity += quantity
      })

    case CartActionTypes.INCREMENT__ITEM:
      return produce(state, (draft) => {
        const coffeeToIncrement = action.payload.item

        const item = draft.items.find(
          (item) => coffeeToIncrement.name === item.coffee.name,
        )

        if (!item) {
          draft.items.push({ coffee: coffeeToIncrement, quantity: 1 })
        } else if (item.quantity + 1 < 100) {
          item.quantity += 1
        }
      })

    case CartActionTypes.DECREMENT_ITEM:
      return produce(state, (draft) => {
        const coffeeToDecrement = action.payload.item

        const item = draft.items.find(
          (item) => coffeeToDecrement.name === item.coffee.name,
        )

        if (!item) return

        if (item.quantity - 1 > 0) {
          item.quantity -= 1
        }
      })
    case CartActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const coffeeToRemove = action.payload.item

        const coffeeIndex = draft.items.findIndex(
          (item) => item.coffee.name === coffeeToRemove.name,
        )

        if (coffeeIndex === -1) return

        draft.items.splice(coffeeIndex, 1)
      })
  }
}
