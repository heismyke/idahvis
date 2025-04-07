'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiHome7Fill } from 'react-icons/ri'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'HOME', icon: RiHome7Fill },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed z-10 bottom-7 w-full font-ubuntu flex items-center justify-center">
      {/* Mobile View (only home icon visible) */}
      <div className="md:hidden relative">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center p-3 bg-white/70 shadow-sm rounded-full border-[#143D60] border"
        >
          <RiHome7Fill className="text-xl text-[#143D60]" />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col gap-2 bg-white/70 shadow-sm rounded-2xl p-2 border-[#143D60] border"
              initial={{ height: 0, opacity: 0, y: 20, overflow: 'hidden' }}
              animate={{ height: 'auto', opacity: 1, y: 0, overflow: 'visible' }}
              exit={{ height: 0, opacity: 0, y: 20, overflow: 'hidden' }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            >
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link href={link.href} key={link.href} onClick={() => setIsMenuOpen(false)}>
                    <li className="relative px-3 py-2 text-xs font-medium w-32 text-center">
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveLink"
                          className="absolute inset-0 bg-[#143D60] rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span
                        className={`relative z-10 flex items-center justify-center gap-1 ${
                          isActive ? 'text-white' : 'text-gray-500'
                        }`}
                      >
                        {link.icon && <link.icon className="text-xl mr-1" />}
                        {link.label}
                      </span>
                    </li>
                  </Link>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop View (normal menu) */}
      <ul className="hidden md:flex md:flex-row gap-2 bg-white/70 shadow-sm rounded-full p-2 border-[#143D60] border">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link href={link.href} key={link.href}>
              <li className="relative px-2 py-1 text-xs font-medium">
                {isActive && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute inset-0 bg-[#143D60] rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-1 ${
                    isActive ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {link.icon ? <link.icon className="text-xl" /> : link.label}
                </span>
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
