'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProductGalleryProps {
  images: string[]
  video?: string
  onSelectImage: (image: string) => void
}

export default function ProductGallery({ images, video, onSelectImage }: ProductGalleryProps) {
  const [selectedItem, setSelectedItem] = useState(images[0])

  const handleItemClick = (item: string) => {
    setSelectedItem(item)
    onSelectImage(item)
  }

  return (
    <div>
      <div className="relative h-96 mb-4">
        {selectedItem.endsWith('.mp4') ? (
          <video
            src={selectedItem}
            className="w-full h-full object-cover rounded-lg"
            controls
            autoPlay
            loop
            muted
          />
        ) : (
          <Image
            src={selectedItem}
            alt="Product image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative h-24 cursor-pointer rounded-lg overflow-hidden ${
              selectedItem === image ? 'ring-2 ring-gold' : ''
            }`}
            onClick={() => handleItemClick(image)}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
        {video && (
          <motion.div
            className={`relative h-24 cursor-pointer rounded-lg overflow-hidden ${
              selectedItem === video ? 'ring-2 ring-gold' : ''
            }`}
            onClick={() => handleItemClick(video)}
            whileHover={{ scale: 1.05 }}
          >
            <video
              src={video}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

