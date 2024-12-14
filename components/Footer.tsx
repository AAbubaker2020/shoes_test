import Link from 'next/link'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import XLogo from './XLogo'
import TikTokLogo from './TikTokLogo'
import SnapchatLogo from './SnapchatLogo'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gold">Luxe Elegance</h3>
            <p className="text-sm text-gray-300">Unparalleled luxury in women&apos;s and men&apos;s shoes and bags.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/#" className="hover:text-gold transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link href="/#" className="hover:text-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href="/#" className="hover:text-gold transition-colors">Return Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2 text-gold" /> info@email.com</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-gold" /> +1-234-567-890</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gold" /> 123 Luxury Lane, New York, NY 10001</li>
            </ul>
          </div>
          <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gold">Follow Us</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-gold transition-colors flex items-center">
                <Youtube className="w-5 h-5 mr-2" /> YouTube
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors flex items-center">
                <SnapchatLogo className="w-5 h-5 mr-2" /> Snapchat
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors flex items-center">
                <TikTokLogo className="w-5 h-5 mr-2" /> TikTok
              </a>
            </div>

            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-gold transition-colors flex items-center">
                <Instagram className="w-5 h-5 mr-2" /> Instagram
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors flex items-center">
                <Facebook className="w-5 h-5 mr-2" /> Facebook
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors flex items-center">
                <XLogo className="w-5 h-5 mr-2" /> X
              </a>
            </div>
  </div>
</div>

          
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Luxe Elegance. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Crafted with passion for luxury and excellence.</p>
        </div>
      </div>
    </footer>
  )
}

