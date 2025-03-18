'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { RiHome7Fill } from 'react-icons/ri'
import { IconType } from 'react-icons'

type Links = {
  href: string
  label: string
  icon?: IconType
}

const links: Links[] = [
  { href: '/', label: 'HOME', icon: RiHome7Fill },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed z-10 bottom-7 w-full font-ubuntu flex items-center justify-center">
      <ul className="flex gap-2 bg-white/70 shadow-sm rounded-full p-2 border-[#143D60] border">
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
