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

        existingItem.quantity = quantity
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
    case CartActionTypes.EMPTY_CART:
      return produce(state, (draft) => {
        draft.items.splice(0, draft.items.length)
      })
  }
}
