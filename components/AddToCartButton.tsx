'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

interface AddToCartButtonProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    // Here you would typically make an API call to add the item to the cart
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    setIsAdding(false)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="w-full bg-gold text-black hover:bg-opacity-90 transition-colors"
    >
      <ShoppingBag className="w-5 h-5 mr-2" />
      {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
    </Button>
  )
}

