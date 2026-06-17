'use client'

import type { ReactNode } from 'react'

import { trackDownloadClick } from '@/lib/gtag'

export const APP_STORE_URL = 'https://apps.apple.com/us/app/winkypie/id6757441777'

type CtaButtonProps = {
  label: string
  trackingLabel: string
  href?: string
  icon?: ReactNode
  className?: string
  ariaLabel?: string
}

export default function CtaButton({
  label,
  trackingLabel,
  href = APP_STORE_URL,
  icon,
  className = '',
  ariaLabel,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={() => trackDownloadClick(trackingLabel)}
      aria-label={ariaLabel ?? label}
      className={`pulse-cta ${className}`}
    >
      <span aria-hidden="true" className="pulse-cta-border" />

      <span className="pulse-cta-inner">
        <span aria-hidden="true" className="pulse-cta-sheen" />

        <span className="pulse-cta-icon">{icon ?? <ZapIcon />}</span>

        <span className="pulse-cta-label">{label}</span>

        <ArrowRightIcon className="pulse-cta-arrow" />
      </span>
    </a>
  )
}

function ZapIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}
