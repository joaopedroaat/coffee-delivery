import { Coffee } from './reducer'

/* eslint-disable no-unused-vars */
export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT__ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
  EMPTY_CART = 'EMPTY_CART',
}
/* eslint-enable no-unused-vars */

interface AddAction {
  type: CartActionTypes.ADD_ITEM
  payload: {
    item: Coffee
    quantity: number
  }
}

interface UpdateAction {
  type: CartActionTypes.INCREMENT__ITEM | CartActionTypes.DECREMENT_ITEM
  payload: {
    item: Coffee
  }
}

interface DeleteAction {
  type: CartActionTypes.REMOVE_ITEM
  payload: {
    item: Coffee
  }
}

interface EmptyCart {
  type: CartActionTypes.EMPTY_CART
}

export type CartAction = AddAction | UpdateAction | DeleteAction | EmptyCart

export function addItemAction(item: Coffee, quantity: number): CartAction {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: {
      item,
      quantity,
    },
  }
}

export function removeItemAction(item: Coffee): CartAction {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
      item,
    },
  }
}

export function incrementItemAction(item: Coffee): CartAction {
  return {
    type: CartActionTypes.INCREMENT__ITEM,
    payload: {
      item,
    },
  }
}

export function decrementItemAction(item: Coffee): CartAction {
  return {
    type: CartActionTypes.DECREMENT_ITEM,
    payload: {
      item,
    },
  }
}

export function emptyCartAction(): CartAction {
  return {
    type: CartActionTypes.EMPTY_CART,
  }
}
