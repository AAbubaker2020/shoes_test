'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const heroContent = [
  {
    image: '/1.png',
    title: 'Limited Edition Series',
    description: 'Exclusive designs for the distinguished collector.',
  },
  {
    image: '/2.png',
    title: 'The Autumn Collection',
    description: 'Discover our latest, inspired by the colors of fall.',
  },
  {
    image: '/3.png',
    title: 'Handcrafted Excellence',
    description: 'Each piece tells a story of artisanal craftsmanship.',
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroContent[currentIndex].image}
            alt={heroContent[currentIndex].title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-gold"
          >
            {heroContent[currentIndex].title}
          </motion.h1>
          <motion.p
            key={`description-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {heroContent[currentIndex].description}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gold mb-4"
          >
            Unparalleled luxury in women and men shoes and bags.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl"
          >
            Experience timeless luxury – Designed for the elite collector.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

