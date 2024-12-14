import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ProductCounter from '@/components/ProductCounter'
import ProductGallery from '@/components/ProductGallery'
import AddToCartButton from '@/components/AddToCartButton'
import RotatingProduct from '@/components/RotatingProduct'
import ZoomableImage from '@/components/ZoomableImage'
import React from 'react'

// This would typically come from a database or API
const product = {
  id: 1,
  name: "Celestial Stiletto",
  description: "Inspired by the night sky, these stilettos feature hand-placed Swarovski crystals, creating a dazzling constellation effect with every step. The sleek silhouette is crafted from the finest Italian leather, ensuring both comfort and elegance.",
  price: 2999.99,
  images: [
    "/2.png",
    "/2.png",
    "/2.png",
    "/2.png",
  ],
  video: "/videos/celestial-stiletto.mp4",
  inStock: 5,
  sold: 95,
  totalCreated: 100,
  materials: ["Italian leather", "Swarovski crystals", "Gold-plated hardware"],
  craftmanship: "Each pair is meticulously handcrafted by our master artisans in Florence, Italy. The process takes over 50 hours, ensuring unparalleled quality and attention to detail.",
  designStory: "Inspired by a starry night in the Tuscan countryside, our designer sought to capture the magic and mystery of the cosmos in a wearable piece of art. The placement of each crystal is carefully planned to mimic actual constellations, making each pair a unique masterpiece.",
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <ProductGallery images={product.images} video={product.video} onSelectImage={setSelectedImage} />
          <ZoomableImage src={selectedImage} alt={product.name} />
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gold">3D View</h2>
            <RotatingProduct modelPath="/models/celestial-stiletto.glb" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gold">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price.toLocaleString()}</p>
          <ProductCounter
            inStock={product.inStock}
            sold={product.sold}
            totalCreated={product.totalCreated}
          />
          <p className="mt-6 mb-4">{product.description}</p>
          <h2 className="text-xl font-semibold mb-2 text-gold">Materials</h2>
          <ul className="list-disc list-inside mb-4">
            {product.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2 text-gold">Craftsmanship</h2>
          <p className="mb-4">{product.craftmanship}</p>
          <h2 className="text-xl font-semibold mb-2 text-gold">Design Story</h2>
          <p className="mb-6">{product.designStory}</p>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  )
}

