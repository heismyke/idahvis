'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Products = () => {
  // State to track which product is currently selected
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Product data
  const products = [
    {
      id: 1,
      name: 'ProGuard 4K',
      shortDesc: 'Ultra HD security camera with night vision',
      image: '/camera1.jpg',
      price: '$299.99',
      fullDescription:
        'The ProGuard 4K offers unmatched clarity with its Ultra HD resolution. Equipped with advanced night vision technology, this camera provides crystal clear footage day and night. Its weatherproof design makes it suitable for both indoor and outdoor installations, while the built-in motion detection system sends instant alerts to your mobile device.',
      features: [
        '4K Ultra HD resolution',
        '150° wide-angle lens',
        'Advanced night vision (up to 100ft)',
        'IP67 weatherproof rating',
        'Motion detection with mobile alerts',
        'Two-way audio communication',
        'Cloud storage compatible',
      ],
    },
    {
      id: 2,
      name: 'SecureView Dome',
      shortDesc: '360° coverage dome camera with AI detection',
      image: '/api/placeholder/300/300',
      price: '$249.99',
      fullDescription:
        'The SecureView Dome provides full 360° surveillance coverage with its innovative rotating lens system. Powered by AI technology, it can distinguish between humans, animals, and vehicles to reduce false alarms. The sleek dome design blends seamlessly with any interior, making it perfect for retail spaces and office environments.',
      features: [
        'Full 360° rotating coverage',
        'AI-powered object recognition',
        '1080p HD resolution',
        'Low-light enhancement',
        'Smart tracking capability',
        'Tamper detection alarm',
        'Seamless integration with home security systems',
      ],
    },
    {
      id: 3,
      name: 'Guardian Mini',
      shortDesc: 'Compact wireless camera for discreet monitoring',
      image: '/api/placeholder/300/300',
      price: '$149.99',
      fullDescription:
        'The Guardian Mini packs powerful security features into a compact, discreet design. Perfect for monitoring small spaces or as a hidden camera, it can be easily installed anywhere thanks to its wireless connectivity and long-lasting battery. Despite its small size, it delivers sharp 1080p video and includes smart motion zones to focus on specific areas.',
      features: [
        'Compact design (2.5" × 2.5")',
        '1080p HD video quality',
        'Wireless with 12-hour battery backup',
        'Easy magnetic mounting',
        'Smart motion zones',
        'Indoor use optimized',
        'Encrypted local storage option',
      ],
    },
    {
      id: 4,
      name: 'PerimeterPro PTZ',
      shortDesc: 'Professional-grade PTZ camera with 30X zoom',
      image: '/api/placeholder/300/300',
      price: '$499.99',
      fullDescription:
        'The PerimeterPro PTZ is our professional-grade security solution, featuring pan-tilt-zoom functionality with an impressive 30X optical zoom. Ideal for perimeter security of large properties, it can cover vast areas with a single camera. The auto-tracking feature follows detected movement, ensuring subjects remain in view at all times.',
      features: [
        '30X optical zoom capability',
        '360° pan and 90° tilt',
        'Auto-tracking of moving subjects',
        '4K resolution with HDR',
        '500ft night vision range',
        'IP68 extreme weather rating',
        'PoE (Power over Ethernet) compatible',
      ],
    },
    {
      id: 5,
      name: 'SmartCam Solar',
      shortDesc: 'Eco-friendly solar-powered wireless camera',
      image: '/api/placeholder/300/300',
      price: '$279.99',
      fullDescription:
        'The SmartCam Solar offers true wireless freedom with its integrated solar panel that keeps the battery charged with just a few hours of sunlight. Perfect for remote locations without easy access to power, this camera delivers reliable security without the need for frequent battery changes or complicated wiring. Its efficient power management system ensures operation even during extended cloudy periods.',
      features: [
        'Integrated solar charging panel',
        '100% wireless operation',
        '2K video resolution',
        'Built-in spotlight for color night vision',
        'Local and cloud storage options',
        'Intelligent power management',
        '3-month battery backup without sun',
      ],
    },
    {
      id: 6,
      name: 'EntryGuard Doorbell',
      shortDesc: 'Smart video doorbell with package detection',
      image: '/api/placeholder/300/300',
      price: '$189.99',
      fullDescription:
        "The EntryGuard Doorbell transforms your front door security with intelligent package detection and visitor monitoring. Get instant alerts when packages are delivered or when someone approaches your door. With two-way audio and pre-recorded responses, you can communicate with visitors even when you're not home. The sleek design adds a modern touch to any entrance while providing crucial security features.",
      features: [
        'AI package and person detection',
        'HD video with HDR',
        '160° field of view',
        'Two-way audio communication',
        'Pre-recorded quick responses',
        'Motion-activated alerts',
        'Weather-resistant construction',
      ],
    },
  ]

  // Handler for clicking on a product
  const handleProductClick = (id) => {
    // If already selected, unselect it (toggle behavior)
    if (selectedProduct === id) {
      setSelectedProduct(null)
    } else {
      setSelectedProduct(id)
    }
  }

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-6">Security Cameras</h1>
        <p className="text-gray-700 mb-12 max-w-3xl">
          IDAHVIS NIGERIA LIMITED offers a comprehensive range of high-quality security cameras to
          meet all your surveillance needs. From compact indoor solutions to professional-grade
          perimeter protection, we have the perfect security solution for homes and businesses of
          all sizes.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className={`border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedProduct === product.id ? 'ring-2 ring-gray-600' : ''
              }`}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="aspect-square bg-white">
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-3">{product.shortDesc}</p>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details Section (appears when a product is selected) */}
        {selectedProduct && (
          <div className="mt-8 p-8 bg-white border border-gray-200 rounded-lg shadow-md animate-fadeIn">
            {products.map((product) => {
              if (product.id === selectedProduct) {
                return (
                  <div
                    key={`detail-${product.id}`}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    <div>
                      <Image
                        width={600}
                        height={600}
                        src={product.image}
                        alt={product.name}
                        className="w-full rounded-lg shadow"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
                      <p className="text-2xl font-semibold text-gray-800 mb-4">{product.price}</p>
                      <p className="text-gray-700 mb-6">{product.fullDescription}</p>

                      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <span className="mr-2 text-black">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        Request Quote
                      </button>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
        )}

        {/* Why Choose Our Security Solutions */}
        <div className="mt-16 p-8 bg-stone-100">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Security Cameras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                At IDAHVIS NIGERIA LIMITED, we understand that security is not one-size-fits-all.
                That's why we offer a diverse range of security cameras designed to address specific
                needs and environments. Our products combine cutting-edge technology with
                user-friendly interfaces to provide reliable protection for your property.
              </p>
              <p className="text-gray-700">
                All our security cameras come with professional installation services and ongoing
                technical support. We ensure that your security system is not just installed
                correctly but continues to function optimally for years to come.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-3 text-black text-2xl">✓</span>
                <div>
                  <h3 className="font-medium">Quality Assurance</h3>
                  <p className="text-gray-600">
                    All products undergo rigorous testing to ensure reliability
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-black text-2xl">✓</span>
                <div>
                  <h3 className="font-medium">Professional Installation</h3>
                  <p className="text-gray-600">
                    Expert setup and configuration by certified technicians
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-black text-2xl">✓</span>
                <div>
                  <h3 className="font-medium">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Dedicated technical support team available when you need assistance
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-black text-2xl">✓</span>
                <div>
                  <h3 className="font-medium">Warranty Coverage</h3>
                  <p className="text-gray-600">
                    Comprehensive warranty on all products and installation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
