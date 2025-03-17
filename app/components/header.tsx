'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h1 className="flex items-center justify-center gap-3">
          PORT HARCOURT, NIGERIA
          <div className="relative flex h-[10px] w-[10px] items-center justify-center">
            <div className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-green-600"></div>
          </div>
        </h1>
        <Link href="/contact">
          <button className="bg-[#143D60] p-2 rounded-lg text-white font-medium">
            let&apos;s talk
          </button>
        </Link>
      </div>
      <header className="flex items-center justify-center py-8 md:py-12 lg:py-16 px-4 sm:px-6">
        <motion.div
          className="container max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="md:text-left text-4xl leading-10 md:text-5xl lg:text-6xl xl:text-7xl font-medium md:leading-snug lg:leading-normal tracking-tight min-h-[100px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We deliver quality projects on schedule using innovative cost-effective solutions
          </motion.h1>
          <motion.p
            className="mt-8 text-neutral-600 text-base md:text-lg leading-relaxed tracking-tight max-w-prose mx-auto md:mx-0 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I&apos;m a Product Design Leader with over 20 years of experience in leading teams at
            companies such as Farfetch, Just Eat, GetYourGuide, and Fresha. As a designer, I&apos;ve
            helped start-ups figure out what they should be building and transform their vision into
            real products that went on to receive millions in funding. As a leader & manager,
            I&apos;ve helped large orgs build happy & successful teams, and provided the right
            environment for designers to do the best work of their career.
          </motion.p>
        </motion.div>
      </header>
    </>
  )
}

export default Header
