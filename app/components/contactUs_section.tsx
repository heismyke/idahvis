'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 mb-8">
              We&apos;d love to hear from you. Whether you have a question about our services,
              projects, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-700">idahvis@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-700">09036009426</p>
                  <p className="text-gray-700">08032678880</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-700">Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
            <p className="text-gray-700 mb-4">
              Fill out the form below for a quick response from our team.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact" className="inline-flex items-center group">
            <span className="text-lg font-medium border-b-2 border-black group-hover:border-gray-500 transition-colors duration-300">
              View all contact details
            </span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
