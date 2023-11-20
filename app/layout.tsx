import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationContext from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A.T.R.A',
  description: 'Portfolio website using NextJS and deployed by Vercel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><NavigationContext />{children}</body>
    </html>
  )
}
