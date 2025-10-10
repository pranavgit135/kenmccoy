import type { Metadata } from 'next'
import './globals.css'
import { Red_Hat_Display, Ubuntu } from "next/font/google"


export const metadata: Metadata = {
  title: 'kenmccoy.com',
  description: 'Created with GeoSoftech',
  generator: '',
}

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-display",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${ubuntu.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
