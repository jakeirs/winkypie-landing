'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

import { posesAll } from '@/lib/poses'

const CYCLE_MS = 2500
const CARDS_VISIBLE = 6

const bgTilt = [
  { src: posesAll[40].src, side: 'left' as const },
  { src: posesAll[65].src, side: 'right' as const },
]

type Card = { kind: 'bad' | 'good'; src: string }

const cards: Card[] = [
  { kind: 'bad', src: posesAll[3].src },
  { kind: 'good', src: posesAll[10].src },
  { kind: 'good', src: posesAll[25].src },
  { kind: 'bad', src: posesAll[18].src },
  { kind: 'good', src: posesAll[42].src },
  { kind: 'good', src: posesAll[55].src },
  { kind: 'good', src: posesAll[71].src },
  { kind: 'bad', src: posesAll[33].src },
  { kind: 'good', src: posesAll[80].src },
  { kind: 'good', src: posesAll[88].src },
  { kind: 'good', src: posesAll[95].src },
]

export function SwipeStack() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length)
    }, CYCLE_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative px-4 py-10 lg:py-16 overflow-hidden">
      <div className="relative max-w-md lg:max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-6 lg:mb-10">
            <div className="flex justify-center mb-4">
              <span className="pill-gradient pill-gradient-upper">The verdict</span>
            </div>
            <h2 className="font-serif text-white text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.1] font-semibold tracking-tight mb-3 lg:mb-4">
              LIKE or NOPE. <em className="gradient-text">That fast.</em>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-white/75 max-w-xs lg:max-w-xl mx-auto leading-snug">
              Every profile she sees gets sorted in the same rhythm. Your first
              photo has one shot to land on green.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in">
          <div className="relative flex justify-center items-center min-h-[460px] lg:min-h-[520px]">
            <div
              aria-hidden="true"
              className="fixed -left-[9999px] top-0 pointer-events-none opacity-0"
            >
              {cards.map((c) => (
                <div key={c.src} className="relative w-[320px] h-[444px]">
                  <Image src={c.src} alt="" fill sizes="320px" quality={90} />
                </div>
              ))}
            </div>

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              {bgTilt.map((bg, i) => (
                <div
                  key={i}
                  className="absolute w-[180px] sm:w-[210px] lg:w-[240px] aspect-[0.72] rounded-[22px] overflow-hidden"
                  style={{
                    transform:
                      bg.side === 'left'
                        ? 'translateX(-108%) rotate(-14deg)'
                        : 'translateX(108%) rotate(14deg)',
                    opacity: 0.45,
                    filter: 'brightness(0.55) saturate(0.9)',
                  }}
                >
                  <Image
                    src={bg.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="240px"
                    quality={70}
                  />
                </div>
              ))}
            </div>

            <div className="relative w-[280px] sm:w-[300px] lg:w-[320px] aspect-[0.72]">
              {Array.from({ length: CARDS_VISIBLE })
                .map((_, slot) => {
                  const cardIdx = (index + slot) % cards.length
                  return { slot, card: cards[cardIdx] }
                })
                .reverse()
                .map(({ slot, card: c }) => {
                  const isActive = slot === 0
                  const zIndex = CARDS_VISIBLE - slot

                  if (isActive) {
                    return (
                      <div
                        key={`active-${index}`}
                        className={`absolute inset-0 rounded-[28px] overflow-hidden ${
                          c.kind === 'good' ? 'swipe-card-good' : 'swipe-card-bad'
                        }`}
                        style={{ zIndex, backfaceVisibility: 'hidden' }}
                      >
                        <Image
                          src={c.src}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="320px"
                          quality={90}
                          priority
                        />
                        <div
                          className={`absolute top-7 px-4 py-2 rounded-[10px] border-4 bg-black/35 pointer-events-none swipe-stamp ${
                            c.kind === 'good'
                              ? 'right-[18px] rotate-[18deg] border-emerald-500'
                              : 'left-[18px] -rotate-[18deg] border-red-500'
                          }`}
                        >
                          <span
                            className={`font-bold text-[26px] sm:text-[28px] tracking-[4px] ${
                              c.kind === 'good' ? 'text-emerald-500' : 'text-red-500'
                            }`}
                          >
                            {c.kind === 'good' ? 'LIKE' : 'NOPE'}
                          </span>
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div
                      key={`slot-${slot}`}
                      className="absolute inset-0 rounded-[28px] overflow-hidden"
                      style={{
                        zIndex,
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform',
                      }}
                    >
                      <Image
                        src={c.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="320px"
                        quality={90}
                      />
                    </div>
                  )
                })}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
