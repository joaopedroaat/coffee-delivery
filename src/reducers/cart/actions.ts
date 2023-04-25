import { CartAction, Coffee } from './reducer'

export enum CartActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_ITEM = 'ADD_ITEM',
  // eslint-disable-next-line no-unused-vars
  REMOVE_ITEM = 'REMOVE_ITEM',
  // eslint-disable-next-line no-unused-vars
  INCREMENT__ITEM = 'INCREMENT_ITEM',
  // eslint-disable-next-line no-unused-vars
  DECREMENT_ITEM = 'DECREMENT_ITEM',
}

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
