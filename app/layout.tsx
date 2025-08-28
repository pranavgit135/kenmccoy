import type { Metadata } from 'next'
import './globals.css'
import { Playfair_Display, Source_Sans_3 } from "next/font/google"


export const metadata: Metadata = {
  title: 'kenmccoy.com',
  description: 'Created with GeoSoftech',
  generator: '',
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
