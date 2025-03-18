'use client'

import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company Overview</h3>
            <p className="text-gray-700 mb-6">
              IDAHVIS NIGERIA LIMITED is a wholly indigenous multidisciplinary consulting company
              established in 2017. We specialize in Project Management & Construction Consultancy,
              Information Technology/Technological Services, and General Contracts and Supplies with
              unique capabilities to meet the continuously changing requirements of our clients.
            </p>
            <Link
              href="/about"
              className="inline-block border-b-2 border-black hover:border-gray-500 transition-colors duration-300"
            >
              Learn more about us →
            </Link>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                We are committed to consistently deliver quality projects on schedule using
                innovative cost-effective solutions within a defined budget scope.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become a leading solution provider in the areas of General Consultancy Services,
                IT/Technological Services, Project Management & Construction, General Contracts and
                Supplies in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
