import type { Metadata } from 'next'
import { Space_Grotesk, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
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
      <body className={`${spaceGrotesk.variable} ${barlowCondensed.variable} ${spaceGrotesk.className}`}>{children}</body>
    </html>
  )
}
