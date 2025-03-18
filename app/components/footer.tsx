import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#143D60] rounded-3xl p-12 md:p-16 lg:p-20 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Abstract graphic element */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div className="w-full h-full border-4 border-white rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
          <div className="w-full h-full border-4 border-white rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's create something together</h2>
            <p className="text-white/70 mb-8 max-w-md">
              We bring ideas to life through technology, innovation, and a relentless pursuit of
              excellence.
            </p>
            <Link href="/contact" className="inline-flex items-center group">
              <span className="text-lg font-medium border-b border-white/40 group-hover:border-white transition-colors duration-300">
                Get in touch
              </span>
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform duration-300" />
            </Link>
          </div>

          <div className="flex flex-col md:items-end">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Contact</h3>
              <a
                href="mailto:idahvis@gmail.com"
                className="block text-white/70 hover:text-white transition-colors duration-300"
              >
                idahvis@gmail.com
              </a>
              <a
                href="tel:+2349036009426"
                className="block text-white/70 hover:text-white transition-colors duration-300"
              >
                +234 903 600 9426
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Follow</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 text-sm">
              © {currentYear} IDAHVIS NIGERIA LIMITED. RC: 1451843
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link
              href="/privacy"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
