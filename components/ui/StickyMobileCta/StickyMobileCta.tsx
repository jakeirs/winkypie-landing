'use client'

import { useEffect, useState } from 'react'

import { trackDownloadClick } from '@/lib/gtag'

const APP_STORE_URL = 'https://apps.apple.com/us/app/winkypie/id6757441777'

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleScroll() {
      const scrolled = window.scrollY > 400
      const nearBottom =
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 600
      setVisible(scrolled && !nearBottom)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 pointer-events-none">
      <div className="relative pointer-events-auto rounded-2xl border border-white/14 bg-[#0e0e0e]/95 backdrop-blur-lg shadow-2xl flex items-center gap-3 px-3 py-2.5">
        <a
          href={APP_STORE_URL}
          onClick={() => trackDownloadClick('sticky_mobile')}
          aria-label="Download WinkyPie on the App Store"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black rounded-xl px-3 py-2 shadow-md active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[8px] opacity-70">Download on the</span>
            <span className="block text-[13px] font-semibold">App Store</span>
          </span>
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="shrink-0 w-8 h-8 inline-flex items-center justify-center rounded-full text-white/55 hover:text-white"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
