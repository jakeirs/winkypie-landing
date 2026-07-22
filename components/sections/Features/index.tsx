'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

import {
  posesAll,
  posesBusiness,
  posesMediumShot,
  posesPose,
  posesSitting,
} from '@/lib/poses'

const marketingCategories = [
  '#tinderhero',
  '#datenight',
  '#careerpro',
  '#travelvibes',
  '#casual',
  '#confident',
  '#custom',
]

const galleryRowAv2 = posesAll.slice(0, 34)
const galleryRowBv2 = posesAll.slice(34, 68)
const galleryRowCv2 = posesAll.slice(68)

const heroRotation = [
  posesMediumShot[17],
  posesBusiness[0],
  posesBusiness[1],
  posesBusiness[8],
  posesBusiness[11],
  posesMediumShot[13],
  posesPose[2],
  posesPose[14],
  posesPose[15],
  posesSitting[18],
]

const miniPoses = [
  posesPose[1],
  posesMediumShot[1],
  posesBusiness[1],
  posesSitting[1],
  posesPose[8],
  posesMediumShot[5],
  posesBusiness[10],
  posesSitting[7],
  posesPose[12],
  posesMediumShot[14],
]


export function Features() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroRotation.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="features" className="px-4 py-14 lg:py-24 overflow-hidden">
      <div className="max-w-md lg:max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex justify-center mb-4">
              <span className="pill-gradient pill-gradient-upper">What you get</span>
            </div>
            <h2 className="font-serif text-white text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.1] font-semibold tracking-tight mb-3 lg:mb-4">
              One selfie. <em className="gradient-text">Every angle.</em>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-white/75 max-w-xs lg:max-w-xl mx-auto leading-snug">
              Pick from 300+ pro poses — or upload your own reference. The AI keeps
              your face and build.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-3 lg:gap-4">
          <AnimateOnScroll animation="fade-up" className="lg:row-span-2">
            <div className="group relative h-full rounded-3xl overflow-hidden bg-card border border-white/10 hover:border-white/20 transition-all min-h-[300px] lg:min-h-[420px]">
              <div className="absolute inset-0">
                {heroRotation.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt="AI-generated pro photo example"
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      i === heroIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={i === 0}
                    quality={92}
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-5 lg:p-6">
                <span className="pill-gradient pill-gradient-upper self-start mb-4">
                  The output
                </span>
                <h3 className="font-serif text-white text-[20px] lg:text-[24px] font-semibold tracking-tight mb-1.5 leading-tight">
                  Looks pro. <em className="gradient-text">Still you.</em>
                </h3>
                <p className="text-white/80 text-[12px] lg:text-[13px] max-w-sm leading-relaxed">
                  Real photo — not a filter. The AI preserves what you actually look
                  like and renders you in the pose you picked.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="group rounded-3xl bg-card border border-white/10 hover:border-white/20 transition-all p-5 lg:p-5">
              <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] mb-4">
                <div className="flex gap-1.5 animate-scroll-left w-max">
                  {[...miniPoses, ...miniPoses].map((img, i) => (
                    <div
                      key={i}
                      className="relative w-[64px] h-[88px] sm:w-[72px] sm:h-[100px] shrink-0 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img.src}
                        alt="Pose thumbnail"
                        fill
                        className="object-cover"
                        quality={90}
                        sizes="(max-width: 640px) 128px, 144px"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-serif text-white text-[17px] lg:text-[18px] font-semibold tracking-tight mb-1">
                <em className="gradient-text">300+</em> pro poses
              </h3>
              <p className="text-white/75 text-[12px] lg:text-[13px] leading-relaxed">
                Tinder Hero, Date Night, Business, Casual, Outdoor — curated for every
                situation that matters. Plus custom poses (upload your own).
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <AnimateOnScroll animation="fade-up" delay={160}>
              <SmallCard
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
                  </svg>
                }
                title="Realistic"
                body="Photoreal AI output — your real face and build preserved. Not a filter, not a cartoon."
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={220}>
              <SmallCard
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                }
                title="On-device gallery"
                body="Generated photos stay on your iPhone. Selfie auto-deleted server-side in 7 days."
              />
            </AnimateOnScroll>
          </div>
        </div>

        <div className="mt-12 lg:mt-20">
          <AnimateOnScroll>
            <div className="text-center mb-7">
              <h3 className="font-serif text-white text-[22px] sm:text-[26px] lg:text-[34px] font-semibold tracking-tight mb-2">
                Pick a <em className="gradient-text">vibe</em>.
              </h3>
              <p className="text-[13px] lg:text-[14px] text-white/70 max-w-xs lg:max-w-lg mx-auto">
                300+ pro poses. Or upload your own reference.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mb-6 lg:mb-8">
              {marketingCategories.map((cat) => (
                <span
                  key={cat}
                  className="text-[13px] lg:text-[14px] font-semibold tracking-tight text-[#fbbf24] whitespace-nowrap"
                >
                  {cat}
                </span>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="space-y-2 lg:space-y-3 mask-[linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] -mx-4">
              <ScrollRow images={galleryRowAv2} direction="left" speed="slow" />
              <ScrollRow images={galleryRowBv2} direction="right" speed="slow" />
              <ScrollRow images={galleryRowCv2} direction="left" speed="slow" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function SmallCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="group h-full rounded-3xl bg-card border border-white/10 hover:border-white/20 transition-all p-4 lg:p-5 flex flex-col">
      <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[color:var(--brand-cta)] to-[color:var(--brand-cta-secondary)] flex items-center justify-center text-white mb-3 lg:mb-4 shadow-lg shadow-[color:var(--brand-cta-secondary)]/20">
        {icon}
      </div>
      <h4 className="font-serif text-white text-[15px] lg:text-[17px] font-semibold mb-1 leading-snug">
        {title}
      </h4>
      <p className="text-white/70 text-[11px] lg:text-[12px] leading-relaxed">{body}</p>
    </div>
  )
}

function ScrollRow({
  images,
  direction,
  speed = 'normal',
}: {
  images: readonly { src: string; width: number; height: number }[]
  direction: 'left' | 'right'
  speed?: 'normal' | 'slow'
}) {
  const animationClass =
    speed === 'slow'
      ? direction === 'left'
        ? 'animate-scroll-slow-left'
        : 'animate-scroll-slow-right'
      : direction === 'left'
        ? 'animate-scroll-left'
        : 'animate-scroll-right'

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-2 lg:gap-3 ${animationClass} w-max`}>
        {[...images, ...images].map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative w-[120px] h-[170px] sm:w-[140px] sm:h-[196px] lg:w-[180px] lg:h-[252px] shrink-0 rounded-[14px] lg:rounded-[18px] overflow-hidden border border-white/10"
          >
            <Image
              src={img.src}
              alt="AI-generated pro pose example"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 140px, 180px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
