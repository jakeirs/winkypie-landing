'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'

import { hasConsentCookie, setConsentCookie } from '@/lib/cookies'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (hasConsentCookie()) return
    const timer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  function handleChoice(value: 'granted' | 'denied') {
    setExiting(true)
    setTimeout(() => {
      setConsentCookie(value)
      setVisible(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md px-4 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ${
        exiting ? 'translate-y-full opacity-0' : 'animate-fade-in'
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-muted leading-relaxed">
          We use cookies to analyze site traffic.{' '}
          <Link href="/privacy" className="underline hover:text-foreground">
            Learn more
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleChoice('denied')}
            className="rounded-full px-5 py-2 text-sm font-medium text-muted border border-border hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => handleChoice('granted')}
            className="btn-gradient rounded-full px-5 py-2 text-sm font-medium text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
