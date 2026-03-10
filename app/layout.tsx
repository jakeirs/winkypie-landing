import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import CookieBanner from '@/components/ui/CookieBanner/CookieBanner'
import GoogleAnalytics from '@/components/ui/GoogleAnalytics/GoogleAnalytics'
import MetaPixel from '@/components/ui/MetaPixel/MetaPixel'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://winkypie.app'),
  title: 'WinkyPie | Transform Any Selfie Into a Pro Photo',
  description: 'One selfie is enough. Pick a pose, generate magic, and own the spotlight. Generated photos are saved locally on your device.',
  keywords: ['AI photo', 'selfie', 'professional photo', 'photo generator', 'AI portrait', 'mobile app'],
  openGraph: {
    title: 'WinkyPie | Transform Any Selfie Into a Pro Photo',
    description: 'One selfie is enough. Pick a pose, generate magic, and own the spotlight.',
    type: 'website',
    locale: 'en_US',
    siteName: 'WinkyPie',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WinkyPie - Transform Any Selfie Into a Pro Photo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WinkyPie | Transform Any Selfie Into a Pro Photo',
    description: 'One selfie is enough. Pick a pose, generate magic, and own the spotlight.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
        )}
        <CookieBanner />
      </body>
    </html>
  )
}
