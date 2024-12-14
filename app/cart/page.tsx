'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// This would typically come from a global state management solution like Redux or Zustand
const initialCartItems = [
  {
    id: 1,
    name: "Celestial Stiletto",
    price: 2999.99,
    quantity: 1,
    image: "/images/celestial-stiletto-1.jpg"
  },
  {
    id: 2,
    name: "Opulent Orchid Clutch",
    price: 3499.99,
    quantity: 1,
    image: "/images/opulent-orchid-clutch.jpg"
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-gold">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-between border-b border-gray-700 py-4"
              >
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gold">${item.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-800 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-800 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Taxes:</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between text-xl font-semibold mb-6">
              <span>Total:</span>
              <span className="text-gold">${total.toLocaleString()}</span>
            </div>
            <Button asChild className="w-full bg-gold text-black hover:bg-opacity-90">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

