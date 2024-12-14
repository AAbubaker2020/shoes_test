'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductCounter from './ProductCounter'

const products = [
  {
    id: 1,
    name: "Celestial Stiletto",
    price: 2999.99,
    image: "/2.png",
    description: "Inspired by the night sky, these stilettos feature hand-placed Swarovski crystals.",
    inStock: 5,
    sold: 95,
    totalCreated: 100
  },
  {
    id: 2,
    name: "Opulent Orchid Clutch",
    price: 3499.99,
    image: "/3.png",
    description: "A masterpiece of embroidery, showcasing over 1000 hours of meticulous craftsmanship.",
    inStock: 3,
    sold: 47,
    totalCreated: 50
  },
  {
    id: 3,
    name: "Regal Ruby Loafer",
    price: 2499.99,
    image: "/1.png",
    description: "Adorned with ethically sourced rubies, a testament to luxury and responsibility.",
    inStock: 7,
    sold: 43,
    totalCreated: 50
  },
  // Add more products as needed
]

export default function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold">Exclusive Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  {hoveredProduct === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-center"
                    >
                      <p className="text-gold text-lg mb-2">{product.description}</p>
                      <ProductCounter
                        inStock={product.inStock}
                        sold={product.sold}
                        totalCreated={product.totalCreated}
                      />
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gold">{product.name}</h3>
                  <p className="text-2xl font-bold">${product.price.toLocaleString()}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

