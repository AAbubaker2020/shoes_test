import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gold">About Luxe Elegance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/2.png"
            alt="Our atelier"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Our Heritage</h2>
          <p className="mb-4">
            Founded in 1920, Luxe Elegance has been at the forefront of luxury shoe and bag craftsmanship for over a century. Our commitment to excellence, innovation, and timeless elegance has made us a favorite among discerning women worldwide.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Our Craft</h2>
          <p className="mb-4">
            Each Luxe Elegance piece is a testament to the skill of our master artisans. Using only the finest materials and time-honored techniques, we create accessories that are not just fashion items, but works of art designed to be cherished for generations.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gold">Our Promise</h2>
          <p>
            We are dedicated to providing our clients with the ultimate luxury experience. From the moment you encounter a Luxe Elegance creation to the day you pass it on as an heirloom, we ensure that every interaction with our brand is nothing short of extraordinary.
          </p>
        </div>
      </div>
    </div>
  )
}

