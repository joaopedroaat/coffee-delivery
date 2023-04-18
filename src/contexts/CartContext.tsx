import { ReactNode, createContext, useEffect, useState } from 'react'

// Declaração de tipos
type ITag = 'tradicional' | 'gelado' | 'com leite' | 'especial' | 'alcoólico'

export interface ICoffee {
  name: string
  description: string
  tags: ITag[]
  img: string
  price: number
}

export interface ICartItem {
  coffee: ICoffee
  quantity: number
}

// Criação do context
interface ICartContext {
  cart: ICartItem[]
  addItemToCart: (newItem: ICartItem) => void
}

export const CartContext = createContext({} as ICartContext)

// Criação do provider

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState([] as ICartItem[])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  function addItemToCart(newItem: ICartItem) {
    const existingItemIndex = cart.findIndex(
      (item) => item.coffee.name === newItem.coffee.name,
    )

    if (existingItemIndex !== -1) {
      const existingItem = cart[existingItemIndex]

      if (existingItem.quantity !== newItem.quantity) {
        const newCart = [...cart]
        newCart.splice(existingItemIndex)
        newCart.push(newItem)
        setCart(newCart)
      }
    } else {
      setCart([...cart, newItem])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
