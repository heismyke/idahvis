'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const words =
    'We deliver quality projects on schedule using innovative cost-effective solutions'.split(' ')

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <motion.h1
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          PORT HARCOURT, NIGERIA
          <div className="relative flex h-[10px] w-[10px] items-center justify-center">
            <div className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-green-600"></div>
          </div>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/contact">
            <button className="bg-[#143D60] p-2 rounded-lg text-white font-medium hover:bg-[#0f2c46] transition-colors duration-300">
              let&apos;s talk
            </button>
          </Link>
        </motion.div>
      </div>
      <header className="flex items-center justify-center py-8 md:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          <h1 className="md:text-left text-4xl leading-10 md:text-5xl lg:text-6xl xl:text-7xl font-medium md:leading-snug lg:leading-normal tracking-tight min-h-[100px]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="w-full h-[2px] bg-[#143D60] mt-10"
            initial={{ width: 0 }}
            animate={{ width: animationComplete ? '100%' : '0%' }}
            transition={{ duration: 1.2, delay: 2, ease: 'easeInOut' }}
          />

          <motion.p
            className="mt-8 text-neutral-600 text-base md:text-lg leading-relaxed tracking-tight max-w-prose mx-auto md:mx-0 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
          >
            IDAHVIS NIGERIA LIMITED is a multidisciplinary consulting company specializing in
            Project Management, Construction Consultancy, Information Technology services, and
            General Contracts. Established in 2017, we have built a reputation for delivering
            superior services with unique value. Our highly skilled team of professionals guarantees
            client satisfaction through cost-effective solutions and innovative approaches.
          </motion.p>
        </div>
      </header>
    </>
  )
}

export default Header
