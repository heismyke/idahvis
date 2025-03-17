import type { Metadata } from 'next'
import { Ubuntu_Sans } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation'
import Footer from './components/footer'

const ubuntuSans = Ubuntu_Sans({
  variable: '--font-ubuntu-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'IDAHVIS NIGERIA LIMITED',
  description: 'IDAHVIS NIGERIA LIMITED',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuSans.variable} font-ubuntu antialiased relative`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
