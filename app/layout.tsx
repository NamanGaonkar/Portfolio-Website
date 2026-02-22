import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Naman - Full-Stack & Systems Architect',
  description: 'Engineering at the intersection of Hardware & Intelligence. AI Developer | Full-Stack Developer | Embedded Systems Engineer',
  keywords: ['Naman', 'Full-Stack Developer', 'AI Developer', 'Embedded Systems', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
