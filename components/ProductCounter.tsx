'use client'

import { useState, useEffect } from 'react'

interface ProductCounterProps {
  inStock: number
  sold: number
  totalCreated: number
}

export default function ProductCounter({ inStock, sold, totalCreated }: ProductCounterProps) {
  const [animatedInStock, setAnimatedInStock] = useState(0)
  const [animatedSold, setAnimatedSold] = useState(0)
  const [animatedTotalCreated, setAnimatedTotalCreated] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60

    const inStockIncrement = inStock / steps
    const soldIncrement = sold / steps
    const totalCreatedIncrement = totalCreated / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      setAnimatedInStock(Math.min(Math.round(inStockIncrement * currentStep), inStock))
      setAnimatedSold(Math.min(Math.round(soldIncrement * currentStep), sold))
      setAnimatedTotalCreated(Math.min(Math.round(totalCreatedIncrement * currentStep), totalCreated))

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [inStock, sold, totalCreated])

  return (
    <div className="flex justify-between text-sm">
      <div>
        <p className="text-gray-400">In Stock</p>
        <p className="font-semibold text-gold">{animatedInStock}</p>
      </div>
      <div>
        <p className="text-gray-400">Sold</p>
        <p className="font-semibold text-gold">{animatedSold}</p>
      </div>
      <div>
        <p className="text-gray-400">Total Created</p>
        <p className="font-semibold text-gold">{animatedTotalCreated}</p>
      </div>
    </div>
  )
}

