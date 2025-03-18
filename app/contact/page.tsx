import React from 'react'
import { Mail, Phone, MapPin, Building, User } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              We&apos;d love to hear from you and discuss how we can help with your project needs.
              Our team is ready to provide you with the information you need and answer any
              questions you may have.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <a
                    href="mailto:idahvis@gmail.com"
                    className="text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    idahvis@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Phone</p>
                  <p className="text-gray-700">09036009426</p>
                  <p className="text-gray-700">08032678880</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Location</p>
                  <p className="text-gray-700">Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <Building className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Company Information</p>
                  <p className="text-gray-700">IDAHVIS NIGERIA LIMITED</p>
                  <p className="text-gray-700">RC Number: 1451843</p>
                  <p className="text-gray-700">Established: 2017</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Subject of your message"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t-2 border-black pt-12">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <User className="h-12 w-12 mr-4 p-2 bg-stone-100 rounded-full text-gray-700" />
              <div>
                <p className="font-medium text-lg">Idahtonye Toby</p>
                <p className="text-gray-700">Managing Director</p>
                <p className="text-gray-700">Email: idahvis@gmail.com</p>
                <p className="text-gray-700">Phone: 09036009426</p>
              </div>
            </div>

            <div className="flex items-start">
              <User className="h-12 w-12 mr-4 p-2 bg-stone-100 rounded-full text-gray-700" />
              <div>
                <p className="font-medium text-lg">Chukwu John Ikechukwu</p>
                <p className="text-gray-700">MNSE, COREN</p>
                <p className="text-gray-700">Phone: 08032678880</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-stone-100">
          <h2 className="text-2xl font-semibold mb-4">Our Banking Details</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Bank:</span> Keystone Bank
          </p>
          <p className="text-gray-700 italic">
            (Full account details will be provided upon request)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
