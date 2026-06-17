'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import CtaButton from '@/components/ui/CtaButton/CtaButton'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

import { posesMediumShot, posesSelfie } from '@/lib/poses'

const pairs = [
  {
    before: '/poses-v2/selfie-input/bathroom-bright.jpg',
    after: posesSelfie[0].src,
  },
  {
    before: '/poses-v2/selfie-input/bathroom-athletic.jpg',
    after: posesMediumShot[17].src,
  },
  {
    before: '/poses-v2/selfie-input/elevator-mirror.jpg',
    after: posesMediumShot[0].src,
  },
]

export function BeforeAfter() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % pairs.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 py-14 lg:py-24">
      <div className="max-w-sm lg:max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-7 lg:mb-12">
            <h2 className="font-serif text-white text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.1] font-semibold tracking-tight mb-2 lg:mb-4">
              Instead of a <em className="gradient-text">photo shoot</em>.
            </h2>
            <p className="text-[13px] sm:text-sm lg:text-[16px] text-white/80 max-w-xs lg:max-w-xl mx-auto leading-snug">
              One selfie. ~30 seconds. Photos ready for your profile.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 max-w-sm lg:max-w-none mx-auto">
            <PhotoCard kind="before" pairs={pairs} activeIndex={index} />
            <PhotoCard kind="after" pairs={pairs} activeIndex={index} />
          </div>
        </AnimateOnScroll>

        <p className="mt-4 lg:mt-5 text-center text-[10px] italic text-white/45 leading-relaxed px-2 max-w-md lg:max-w-xl mx-auto">
          Demo. Your photos use your actual face and body. Results vary with selfie quality, lighting, and pose.
        </p>

        <div className="mt-6 lg:mt-8 flex justify-center">
          <CtaButton label="Start free trial" trackingLabel="before_after_cta" />
        </div>
      </div>
    </section>
  )
}

function PhotoCard({
  kind,
  pairs,
  activeIndex,
}: {
  kind: 'before' | 'after'
  pairs: { before: string; after: string }[]
  activeIndex: number
}) {
  const isBefore = kind === 'before'

  return (
    <div className="relative aspect-[4/5] w-full rounded-[22px] overflow-hidden bg-[#0a0a0a] border border-white/10">
      {pairs.map((pair, i) => (
        <Image
          key={i}
          src={isBefore ? pair.before : pair.after}
          alt={isBefore ? 'Selfie input example' : 'AI-generated pro photo example'}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 1024px) 100vw, 448px"
        />
      ))}
      <span
        className={`absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] text-white border ${
          isBefore
            ? 'bg-[rgba(220,38,38,0.92)] border-[rgba(252,165,165,0.6)]'
            : 'bg-[rgba(34,197,94,0.92)] border-[rgba(134,239,172,0.6)]'
        }`}
      >
        {isBefore ? 'BEFORE' : 'AFTER'}
      </span>
    </div>
  )
}
