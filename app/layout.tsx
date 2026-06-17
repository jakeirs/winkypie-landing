import type { Metadata, Viewport } from 'next'
import { Fraunces, Geist_Mono, Inter } from 'next/font/google'

import CookieBanner from '@/components/ui/CookieBanner/CookieBanner'
import GoogleAnalytics from '@/components/ui/GoogleAnalytics/GoogleAnalytics'
import MetaPixel from '@/components/ui/MetaPixel/MetaPixel'
import ScrollTracker from '@/components/ui/ScrollTracker/ScrollTracker'
import StickyMobileCta from '@/components/ui/StickyMobileCta/StickyMobileCta'
import { MobileAppStructuredData } from '@/components/ui/StructuredData/StructuredData'

import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://winkypie.app'),
  title: 'WinkyPie — Pro photos. No photographer.',
  description:
    'WinkyPie turns one selfie into pro photos for dating profiles. Built on Hinge + Princeton data. Your face & body, real photo not a filter. 3 days free.',
  keywords: [
    'ai dating photos',
    'tinder photos',
    'hinge photos',
    'ai photographer',
    'dating profile photos',
    'ai photo generator',
  ],
  alternates: {
    canonical: 'https://winkypie.app/',
  },
  openGraph: {
    title: 'Pro photos. No photographer.',
    description:
      'One selfie. ~30 seconds. AI generates pro shots that match what dating apps actually reward. Your real face & body. 3 days free.',
    type: 'website',
    locale: 'en_US',
    siteName: 'WinkyPie',
    url: 'https://winkypie.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro photos. No photographer.',
    description:
      'One selfie. ~30 seconds. AI photos that match what dating apps actually reward. 3 days free.',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'WinkyPie',
    statusBarStyle: 'black-translucent',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e0e0e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MobileAppStructuredData />
        {children}
        <StickyMobileCta />
        <ScrollTracker />
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
