import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-gold">Luxe Elegance</Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#" className="text-white hover:text-gold transition-colors">Products</Link>
          <Link href="/about" className="text-white hover:text-gold transition-colors">About</Link>
          <Link href="/contact" className="text-white hover:text-gold transition-colors">Contact</Link>
          <Link href="/cart" className="text-white hover:text-gold transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Dropdown Menu */}
      <div id="mobile-menu" className="hidden bg-black bg-opacity-90 md:hidden">
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link href="/#" className="text-white hover:text-gold transition-colors">Products</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gold transition-colors">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gold transition-colors">Contact</Link>
          </li>
          <li>
            <Link href="/cart" className="text-white hover:text-gold transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
