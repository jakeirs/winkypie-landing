'use client'

import { useSyncExternalStore } from 'react'

import Image from 'next/image'
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

export default function MetaPixel({ pixelId }: { pixelId: string }) {
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerSnapshot)

  if (!consent) return null

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <Image
          height={1}
          width={1}
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
