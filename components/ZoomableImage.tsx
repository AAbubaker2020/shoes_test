'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ZoomableImageProps {
  src: string
  alt: string
}

export default function ZoomableImage({ src, alt }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setPosition({ x, y })
  }

  return (
    <div
      className="relative overflow-hidden cursor-zoom-in"
      style={{ paddingBottom: '100%' }}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={`transition-transform duration-200 ${isZoomed ? 'scale-150' : ''}`}
        style={{
          transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
        }}
      />
    </div>
  )
}

