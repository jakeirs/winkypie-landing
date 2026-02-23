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
      className={`fixed bottom-4 left-4 right-4 z-50 sm:right-auto sm:max-w-sm rounded-2xl border border-border bg-card p-4 shadow-lg transition-opacity duration-300 ${
        exiting ? 'opacity-0' : 'animate-fade-in'
      }`}
    >
      <p className="text-sm text-muted leading-relaxed">
        We use cookies to analyze site traffic.{' '}
        <Link href="/privacy" className="underline hover:text-foreground">
          Learn more
        </Link>
      </p>
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={() => handleChoice('granted')}
          className="btn-gradient rounded-full px-4 py-1.5 text-sm font-medium text-white"
        >
          Accept
        </button>
        <button
          onClick={() => handleChoice('denied')}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
