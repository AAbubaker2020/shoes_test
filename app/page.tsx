import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import SubscriptionBox from '@/components/SubscriptionBox'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductGrid />
      <SubscriptionBox />
    </div>
  )
}

