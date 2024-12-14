'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SubscriptionBox() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6 flex items-center justify-center min-h-[300px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black bg-opacity-50 p-8 rounded-lg text-center w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-gold">Stay Exclusive</h2>
          <p className="text-xl mb-6">Be the First to Know About New Designs and Collections</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mb-4"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gold text-black px-6 py-2 rounded-md font-semibold w-full"
            >
              Subscribe Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

