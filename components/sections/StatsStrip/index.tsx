import Link from 'next/link'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const stats = [
  { kpi: '2.5/sec', label: 'posts she scrolls past', source: 'SOCIAL MEDIA · 2025' },
  { kpi: '+38%', label: 'faces beat no-face posts', source: 'IMAGE-ENGAGEMENT · 2025' },
  { kpi: '+102%', label: 'forward-facing wins likes', source: 'HINGE · 2023' },
  { kpi: '+203%', label: 'more messages with full-body', source: 'MATCH · 2024' },
  { kpi: '+200%', label: 'matches with quality photos', source: 'HINGE · 2024' },
]

export function StatsStrip() {
  return (
    <section id="stats" className="px-4 py-14 lg:py-24">
      <div className="max-w-md lg:max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-8 lg:mb-14">
            <div className="flex justify-center mb-4">
              <span className="pill-gradient pill-gradient-upper">The numbers</span>
            </div>
            <h2 className="font-serif text-white text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.1] font-semibold tracking-tight mb-2 lg:mb-4">
              First photo. <em className="gradient-text">First chance.</em>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-white/75 max-w-xs lg:max-w-xl mx-auto leading-snug">
              One swipe. One photo. One shot at making her stop scrolling.
            </p>
          </div>
        </AnimateOnScroll>

        <ul className="space-y-2.5 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-3">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.kpi} animation="fade-up" delay={i * 90}>
              <li
                className="
                  relative bg-black border border-white/14 rounded-[18px]
                  flex flex-row items-center gap-3 pl-3 pr-4 py-4
                  lg:flex-col lg:items-stretch lg:gap-3 lg:p-5 lg:pb-8
                  lg:h-full
                "
              >
                <span
                  className="
                    font-serif gradient-text font-semibold leading-none shrink-0
                    text-[24px] sm:text-[26px] w-[112px] text-center
                    lg:text-[34px] xl:text-[38px] lg:w-auto lg:text-center
                  "
                >
                  {stat.kpi}
                </span>
                <span
                  className="
                    text-white/92 text-[13px] lg:text-[13.5px] font-semibold leading-snug
                    flex-1 pr-1 pb-3
                    lg:flex-none lg:pr-0 lg:pb-0 lg:text-center
                  "
                >
                  {stat.label}
                </span>
                <span
                  className="
                    absolute text-[9px] font-bold tracking-[0.13em] text-[color:var(--brand-primary)]
                    bottom-1.5 right-3
                    lg:left-0 lg:right-0 lg:bottom-2.5 lg:text-center
                  "
                >
                  {stat.source}
                </span>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>

        <p className="mt-6 lg:mt-10 text-center">
          <Link
            href="/methodology"
            className="text-[12px] lg:text-[13px] italic text-white/55 underline hover:text-white/80 transition-colors"
          >
            Sources &amp; methodology
          </Link>
        </p>
      </div>
    </section>
  )
}
