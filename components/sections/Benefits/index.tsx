import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const benefits = [
  {
    title: 'Real AI photos',
    body: 'Trained to preserve your facial features and body proportions. Stylized AI representations — not a filter.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: '300+ pro poses',
    body: 'Tinder Hero, Date Night, Business, Casual, Outdoor — curated for every situation that matters.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: '~30 second generation',
    body: 'Selfie in, pro photo out. End-to-end faster than writing an opener.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'On-device gallery',
    body: 'Generated photos stay on your iPhone. Selfie auto-deleted server-side within 7 days. Never used to train AI.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Apple-billed trial',
    body: '3 days free, then $4.99/week. Apple notifies you before any charge. Cancel anytime in App Store.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    title: 'No photographer',
    body: 'No studio booking, no posed awkwardness, no waiting for proofs. Just your phone and a selfie.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <circle cx="12" cy="13" r="3.5" />
        <path d="M4 4l16 16" stroke="currentColor" strokeWidth={2.4} />
      </svg>
    ),
  },
]

export function Benefits() {
  const left = benefits.slice(0, 3)
  const right = benefits.slice(3)

  return (
    <section className="relative px-4 py-14 lg:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-md lg:max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-10 lg:mb-16">
            <div className="flex justify-center mb-4">
              <span className="pill-gradient pill-gradient-upper">Why WinkyPie</span>
            </div>
            <h2 className="font-serif text-white text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.1] font-semibold tracking-tight mb-3 lg:mb-4">
              Everything you need.{' '}
              <em className="gradient-text">Nothing you don&apos;t.</em>
            </h2>
            <p className="text-[13px] lg:text-[15px] text-white/75 max-w-xs lg:max-w-xl mx-auto leading-snug">
              Pick from 300+ curated poses, upload a custom reference you love, and let AI
              handle the rest — engineered for the dating-app rules that actually move the
              needle.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 lg:gap-0">
          <div className="space-y-7 lg:space-y-9 lg:pr-12">
            {left.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-left" delay={i * 90}>
                <BenefitRow {...item} />
              </AnimateOnScroll>
            ))}
          </div>

          <div className="hidden lg:block bg-gradient-to-b from-transparent via-white/14 to-transparent" />

          <div className="space-y-7 lg:space-y-9 lg:pl-12">
            {right.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-right" delay={i * 90}>
                <BenefitRow {...item} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitRow({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="group flex gap-4 items-start">
      <div className="shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-[color:var(--brand-cta)]/15 to-[color:var(--brand-cta-secondary)]/15 border border-white/10 flex items-center justify-center text-[color:var(--brand-cta)] group-hover:from-[color:var(--brand-cta)]/25 group-hover:to-[color:var(--brand-cta-secondary)]/25 transition-all">
        {icon}
      </div>
      <div className="pt-0.5">
        <h3 className="font-serif text-white text-[17px] lg:text-[19px] font-semibold mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-white/75 text-[13px] lg:text-[14px] leading-relaxed">{body}</p>
      </div>
    </div>
  )
}
