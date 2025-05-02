import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Passive Income Tracker',
  description: 'Track your passive income',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
