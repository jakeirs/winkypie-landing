'use client'

import { useSyncExternalStore } from 'react'

import Script from 'next/script'

import { getConsentCookie } from '@/lib/cookies'

function subscribeToConsent(callback: () => void) {
  window.addEventListener('consentChanged', callback)
  return () => window.removeEventListener('consentChanged', callback)
}

function getConsentSnapshot() {
  return getConsentCookie() === 'granted'
}

function getServerSnapshot() {
  return false
}

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerSnapshot)

  if (!consent) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
