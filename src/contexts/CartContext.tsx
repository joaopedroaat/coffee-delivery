import { ReactNode, createContext, useReducer } from 'react'
import {
  addItemAction,
  emptyCartAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { CartItem, Coffee, cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  items: CartItem[]
  addItem: (coffee: Coffee, quantity: number) => void
  removeItem: (coffee: Coffee) => void
  emptyCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] })

  const { items } = cartState

  function addItem(coffee: Coffee, quantity: number) {
    dispatch(addItemAction(coffee, quantity))
  }

  function removeItem(coffee: Coffee) {
    dispatch(removeItemAction(coffee))
  }

  function emptyCart() {
    dispatch(emptyCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
