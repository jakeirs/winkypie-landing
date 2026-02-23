'use client'

import { useState, useEffect } from 'react'

import Script from 'next/script'

import { getConsentCookie } from '@/lib/cookies'

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    setConsent(getConsentCookie() === 'granted')

    function onConsentChanged() {
      setConsent(getConsentCookie() === 'granted')
    }

    window.addEventListener('consentChanged', onConsentChanged)
    return () => window.removeEventListener('consentChanged', onConsentChanged)
  }, [])

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
