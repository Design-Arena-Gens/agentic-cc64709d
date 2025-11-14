import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neon Cyberpunk Street',
  description: 'Cinematic slow-motion scene in a neon-lit cyberpunk city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
