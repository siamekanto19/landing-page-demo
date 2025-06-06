import type { Metadata } from 'next'
import { Urbanist, Figtree } from 'next/font/google'
import './globals.css'

const figTree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${figTree.className} ${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
