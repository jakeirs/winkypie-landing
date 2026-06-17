'use client'

import { useEffect } from 'react'

import { trackScrollDepth } from '@/lib/gtag'

const THRESHOLDS = [25, 50, 75, 100] as const

export default function ScrollTracker() {
  useEffect(() => {
    const fired = new Set<number>()

    function onScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const percent = Math.round((window.scrollY / scrollHeight) * 100)
      for (const t of THRESHOLDS) {
        if (percent >= t && !fired.has(t)) {
          fired.add(t)
          trackScrollDepth(t)
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
