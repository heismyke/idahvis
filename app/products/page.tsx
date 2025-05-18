'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Products = () => {
  // State to track which product is currently selected and current image index
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Product data with abstract descriptions and minimal aesthetics
  const products = [
    {
      id: 1,
      name: 'Security Camera',
      shortDesc: 'Security Camera',
      price: '$289',
      available: true,
      images: [
        '/camera1.jpg',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
      ],
      fullDescription:
          'Sphere transforms your listening experience through algorithmic sound processing. The device analyzes ambient acoustics and adapts output for perfect spatial harmony wherever you are.',
      features: [
        'Adaptive resonance technology',
        'Spatial sound recognition',
        'Wireless connectivity',
        'Brushed aluminum finish',
      ],
    },
    {
      id: 2,
      name: 'Multi-purpose Socket',
      shortDesc: 'multi-purpose socket extension',
      price: '$349',
      available: true,
      images: [
        '/muti1.jpg',
        '/multipurposesocket.jpg',
        '/api/placeholder/600/600',
      ],
      fullDescription:
          'Prism converts digital information into light patterns, creating both functional data visualization and aesthetic illumination. A perfect fusion of utility and art for the modern space.',
      features: [
        'Chromatic data mapping',
        'Responsive light patterns',
        'USB-C connectivity',
        'Tempered glass construction',
      ],
    },
    {
      id: 3,
      name: 'Surge',
      shortDesc: 'Surge',
      price: '$199',
      available: true,
      images: [
        '/surge.jpg',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
      ],
      fullDescription:
          'Cube reimagines energy storage with stackable, modular design. Each unit communicates with others to distribute power intelligently across connected devices.',
      features: [
        'Modular connectivity',
        'Intelligent power distribution',
        'Matte ceramic exterior',
        'Status display embedded in surface',
      ],
    },
    {
      id: 4,
      name: 'Wireless Microphone',
      shortDesc: 'Wireless Microphone',
      price: '$249',
      available: true,
      images: [
        '/microphone.jpg',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
      ],
      fullDescription:
          'Wave interprets hand movements as digital commands, creating an intuitive bridge between human motion and electronic function. Control your environment with natural gestures.',
      features: [
        'Motion recognition algorithm',
        'Multi-device control',
        'Low-profile design',
        'Passive power consumption',
      ],
    },
    {
      id: 5,
      name: 'Smart-lock',
      shortDesc: 'Smart Lock',
      price: '$179',
      available: true,
      images: [
        '/smartlock.jpg',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
      ],
      fullDescription:
          'Node silently monitors your surroundings, collecting environmental data while blending seamlessly into any space. A harmonious balance of form and function.',
      features: [
        'Temperature and humidity sensing',
        'Air quality monitoring',
        'Recessed LED indicators',
        'Recycled composite housing',
      ],
    },
    {
      id: 6,
      name: 'Power Station',
      shortDesc: 'Power Station',
      price: '$399',
      available: true,
      images: [
        '/powerstation.jpg',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
      ],
      fullDescription:
          'Arc presents information along a curved surface that follows the natural scan pattern of human vision. Content appears to float in space without harsh backlighting.',
      features: [
        'E-ink curved display',
        'Ambient light adaptation',
        'Wireless content streaming',
        'Minimal power requirements',
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
      setCurrentImageIndex(0) // Reset to first image when selecting a new product
    }
  }

  // Gallery navigation
  const nextImage = () => {
    if (!selectedProduct) return
    const product = products.find(p => p.id === selectedProduct)
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    if (!selectedProduct) return
    const product = products.find(p => p.id === selectedProduct)
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-2xl font-light mb-1">Idahvis Electronics</h1>
          <p className="text-gray-400 mb-12 text-sm">
            A collection of conceptual electronic objects exploring form and function.
          </p>

          {/* Products Grid - Ultra minimal with generous whitespace */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`transition-all duration-300 cursor-pointer hover:opacity-80`}
                    onClick={() => handleProductClick(product.id)}
                >
                  <div className="aspect-square bg-gray-50 relative">
                    <Image
                        width={400}
                        height={400}
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-3 pb-8">
                    <h2 className="text-sm font-normal">{product.name}</h2>
                    <p className="text-gray-400 text-xs mt-1">{product.price}</p>
                  </div>
                </div>
            ))}
          </div>

          {/* Product Details with Gallery - Extremely minimal */}
          {selectedProduct && (
              <div className="mt-12 border-t border-gray-50 pt-12">
                {products.map((product) => {
                  if (product.id === selectedProduct) {
                    return (
                        <div key={`detail-${product.id}`} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          {/* Gallery Section */}
                          <div className="space-y-6">
                            <div className="aspect-square relative bg-gray-50">
                              <Image
                                  width={600}
                                  height={600}
                                  src={product.images[currentImageIndex]}
                                  alt={`${product.name} - image ${currentImageIndex + 1}`}
                                  className="w-full h-full object-cover"
                              />

                              {/* Gallery Navigation - Extremely subtle */}
                              <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2">
                                <button
                                    onClick={(e) => {e.stopPropagation(); prevImage()}}
                                    className="bg-white bg-opacity-40 rounded-full p-1 text-gray-600 hover:bg-opacity-70 text-sm"
                                    aria-label="Previous image"
                                >
                                  ←
                                </button>
                                <button
                                    onClick={(e) => {e.stopPropagation(); nextImage()}}
                                    className="bg-white bg-opacity-40 rounded-full p-1 text-gray-600 hover:bg-opacity-70 text-sm"
                                    aria-label="Next image"
                                >
                                  →
                                </button>
                              </div>
                            </div>

                            {/* Thumbnail Navigation - Small and minimal */}
                            <div className="flex gap-3 overflow-x-auto">
                              {product.images.map((img, idx) => (
                                  <button
                                      key={idx}
                                      onClick={(e) => {e.stopPropagation(); setCurrentImageIndex(idx)}}
                                      className={`w-12 h-12 flex-shrink-0 ${currentImageIndex === idx ? 'opacity-100' : 'opacity-50'}`}
                                  >
                                    <Image
                                        width={48}
                                        height={48}
                                        src={img}
                                        alt={`${product.name} thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                  </button>
                              ))}
                            </div>
                          </div>

                          {/* Product Information - Clean and minimal */}
                          <div>
                            <h2 className="text-lg font-light">{product.name}</h2>
                            <p className="text-base text-gray-900 mb-6">{product.price}</p>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{product.fullDescription}</p>

                            <h3 className="text-xs font-normal text-gray-400 mb-3">Elements</h3>
                            <ul className="space-y-2 mb-10">
                              {product.features.map((feature, idx) => (
                                  <li key={idx} className="text-gray-500 text-xs">
                                    {feature}
                                  </li>
                              ))}
                            </ul>

                            <button className="border border-gray-200 text-gray-800 px-6 py-2 text-xs hover:bg-gray-50 transition-colors">
                              Inquire
                            </button>
                          </div>
                        </div>
                    )
                  }
                  return null
                })}
              </div>
          )}

          {/* Minimal Philosophy Section */}
          <div className="mt-24 pt-12 border-t border-gray-50">
            <h2 className="text-sm font-light mb-8 text-gray-400">Design Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xs mb-3">Form</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Objects designed to complement their surroundings rather than demand attention. Each piece exists in harmony with the space it occupies.</p>
              </div>
              <div>
                <h3 className="text-xs mb-3">Function</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Technology that serves specific purposes without unnecessary complication. Intuitive usage requires no explanation.</p>
              </div>
              <div>
                <h3 className="text-xs mb-3">Material</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Carefully selected materials that age gracefully and respond to their environment. Each piece develops a unique character over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Products