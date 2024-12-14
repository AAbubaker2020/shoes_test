'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formState)
    // Reset form after submission
    setFormState({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gold">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you. Whether you have a question about our products, need assistance with an order, or simply want to share your thoughts, our team is here to help.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gold">Visit Our Flagship Store</h3>
          <p className="mb-4">
            123 Luxury Lane<br />
            Fashion District<br />
            New York, NY 10001
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gold">Contact Information</h3>
          <p className="mb-4">
            Phone: +1 (800) LUXE-ELG<br />
            Email: contact@luxeelegance.com
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formState.message}
            onChange={handleChange}
            required
            className="bg-gray-800 border-gray-700 text-white"
            rows={5}
          />
          <Button type="submit" className="w-full bg-gold text-black hover:bg-opacity-90 transition-colors">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

