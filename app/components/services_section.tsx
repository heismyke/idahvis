'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      title: 'Project Management & Construction',
      description:
        'Professional project management and construction consultancy services for timely completion within budget.',
    },
    {
      title: 'Information Technology',
      description:
        'Comprehensive IT and technological services including setup, maintenance, and innovative solutions.',
    },
    {
      title: 'General Contracts & Supplies',
      description:
        'Reliable contract execution and supply chain management for diverse business needs.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-t-2 border-black pt-6">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center group">
            <span className="text-lg font-medium border-b-2 border-black group-hover:border-gray-500 transition-colors duration-300">
              View all services
            </span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
