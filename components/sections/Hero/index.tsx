'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import AppStoreBadge from '@/components/ui/AppStoreBadge/AppStoreBadge'

import { posesMediumShot, posesSelfie } from '@/lib/poses'

const phonePairs = [
  {
    selfie: '/poses-v2/selfie-input/bathroom-bright.jpg',
    generated: posesSelfie[0].src,
  },
  {
    selfie: '/poses-v2/selfie-input/bathroom-athletic.jpg',
    generated: posesMediumShot[17].src,
  },
  {
    selfie: '/poses-v2/selfie-input/elevator-mirror.jpg',
    generated: posesMediumShot[0].src,
  },
]

const trustPills = [
  {
    label: 'Real AI photos',
    icon: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: 'Realistic',
    icon: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </svg>
    ),
  },
  {
    label: '300+ poses',
    icon: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: 'Custom uploads',
    icon: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v12M7 8l5-5 5 5" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
]

export function Hero() {
  const [pairIndex, setPairIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPairIndex((prev) => (prev + 1) % phonePairs.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative px-4 pt-24 lg:pt-28 pb-12 lg:pb-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-md lg:max-w-5xl mx-auto">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md lg:max-w-none lg:order-1 order-2">
            <span className="inline-flex pill-gradient pill-gradient-upper pill-gradient-button mb-5 lg:mb-6">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              iOS · AI photo studio
            </span>

            <h1 className="font-serif text-white text-[34px] sm:text-[40px] lg:text-[56px] xl:text-[60px] leading-[1.05] font-semibold tracking-tight mb-3 lg:mb-5">
              She decided in <em className="gradient-text not-italic">100&nbsp;ms</em>.
            </h1>

            <p className="text-white/80 text-[15px] sm:text-base lg:text-[17px] leading-relaxed mb-7 lg:mb-9 max-w-xs lg:max-w-md">
              Before she even read your name. Pick from 300+ pro poses — or upload your
              own reference. AI does the rest.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-5">
              <AppStoreBadge trackingLabel="hero_badge" size="md" variant="light" />

              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                {trustPills.map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-white/85 border border-white/12 bg-white/[0.04] backdrop-blur-sm"
                  >
                    <span className="text-[color:var(--brand-cta)]">{pill.icon}</span>
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center mb-12 lg:mb-0 order-1 lg:order-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 m-auto h-[80%] w-[80%] rounded-full hero-glow"
              style={{
                background:
                  'radial-gradient(circle, rgba(245,158,11,0.25) 0%, rgba(236,72,153,0.18) 40%, transparent 75%)',
              }}
            />

            <div className="relative flex justify-center">
              <PhoneMockup
                pairs={phonePairs.map((p) => p.selfie)}
                activeIndex={pairIndex}
                alt="Selfie input example"
                className="hero-phone-left z-10"
                imageClassName="hero-phone-image"
                priority
              />
              <PhoneMockup
                pairs={phonePairs.map((p) => p.generated)}
                activeIndex={pairIndex}
                alt="AI-generated pro photo example"
                className="hero-phone-right -ml-10 sm:-ml-12 lg:-ml-14"
                imageClassName="hero-phone-image hero-phone-image-delay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup({
  pairs,
  activeIndex,
  alt,
  className = '',
  imageClassName = '',
  priority = false,
}: {
  pairs: string[]
  activeIndex: number
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
}) {
  return (
    <div className={className}>
      <div className="phone-mockup">
        <div className="phone-screen w-[150px] h-[315px] sm:w-[170px] sm:h-[358px] lg:w-[200px] lg:h-[420px] relative overflow-hidden">
          {pairs.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 170px, 200px"
              className={`object-cover transition-opacity duration-700 ${
                i === activeIndex ? 'opacity-100' : 'opacity-0'
              } ${imageClassName}`}
              priority={priority && i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
