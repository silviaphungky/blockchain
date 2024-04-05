import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import ReactQueryProvider from '@/utils/react-query'

import { Navbar, Sidebar } from '@/components'

export const metadata: Metadata = {
  title: 'Blockchain',
  description: 'Cosmos',
}

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <meta name="viewport" content="width=1200"></meta>
        <ReactQueryProvider>
          <Navbar />
          <Sidebar />
          <div
            className="ml-44 mt-[65px]"
            style={{ width: 'calc(100vw - 195px)' }}
          >
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
