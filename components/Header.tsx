import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold">Luxe Elegance</Link>
        <div className="flex items-center space-x-6">
          <Link href="/products" className="text-white hover:text-gold transition-colors">Products</Link>
          <Link href="/about" className="text-white hover:text-gold transition-colors">About</Link>
          <Link href="/contact" className="text-white hover:text-gold transition-colors">Contact</Link>
          <Link href="/cart" className="text-white hover:text-gold transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

