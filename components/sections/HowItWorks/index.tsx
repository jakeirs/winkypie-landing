import Image from 'next/image'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const steps = [
  {
    number: '1',
    title: 'Pick a pose',
    body: '300+ pro poses across 5 categories — or upload your own reference photo.',
    image: '/mobile-app/mobile-app-step-1.png',
    imageAlt: 'WinkyPie pose library screen',
    tilt: '-rotate-3',
  },
  {
    number: '2',
    title: 'Mirror your selfie',
    body: 'Quick shot matching the angle. We check quality before generating.',
    image: '/mobile-app/mobile-app-step-2.png',
    imageAlt: 'WinkyPie selfie capture screen',
    tilt: 'rotate-0',
  },
  {
    number: '3',
    title: 'Get your AI photo',
    body: 'Your face. Your build. Real photo — not a filter.',
    image: '/mobile-app/mobile-app-step-3.png',
    imageAlt: 'WinkyPie generated photo screen',
    tilt: 'rotate-3',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-14 lg:py-24 overflow-hidden">
      <div className="max-w-md lg:max-w-6xl mx-auto px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex justify-center mb-4">
              <span className="pill-gradient pill-gradient-upper">How it works</span>
            </div>
            <h2 className="font-serif text-white text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.1] font-semibold tracking-tight">
              It&apos;s easy. <em className="gradient-text">One, two, three.</em>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              animation={
                index === 0 ? 'fade-left' : index === 2 ? 'fade-right' : 'fade-up'
              }
              delay={index * 150}
            >
              <div className="relative flex flex-col items-center">
                <span className="font-serif gradient-text text-[64px] lg:text-[80px] font-semibold leading-none mb-3">
                  {step.number}
                </span>

                <h3 className="font-serif text-white text-[20px] lg:text-[24px] font-semibold tracking-tight mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-[13px] lg:text-[14px] text-white/80 text-center max-w-[280px] mb-8 leading-relaxed">
                  {step.body}
                </p>

                <div
                  className={`${step.tilt} transition-transform duration-500 hover:rotate-0`}
                >
                  <div className="phone-mockup">
                    <div
                      className="phone-button-right"
                      style={{ top: '6rem', height: '2.5rem' }}
                    />
                    <div
                      className="phone-button-left"
                      style={{ top: '4rem', height: '1.25rem' }}
                    />
                    <div
                      className="phone-button-left"
                      style={{ top: '6rem', height: '2rem' }}
                    />
                    <div
                      className="phone-button-left"
                      style={{ top: '8.75rem', height: '2rem' }}
                    />
                    <div className="phone-screen w-[180px] h-[360px] sm:w-[200px] sm:h-[400px] lg:w-[220px] lg:h-[440px] relative">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 200px, 220px"
                      />
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-9 left-[60%] w-[80%] items-center pointer-events-none">
                    <div className="w-full h-px bg-gradient-to-r from-[color:var(--brand-cta)]/50 to-[color:var(--brand-cta-secondary)]/50" />
                    <svg
                      className="w-3.5 h-3.5 -ml-1 text-[color:var(--brand-cta-secondary)]/60 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <p className="mt-12 lg:mt-16 text-center text-[12px] lg:text-[13px] text-white/55 italic leading-snug">
          Average time end-to-end: ~30 seconds.*
          <br />
          <span className="not-italic text-[10px] lg:text-[11px] text-white/40">
            *Actual time varies with server load and network conditions.
          </span>
        </p>
      </div>
    </section>
  )
}
