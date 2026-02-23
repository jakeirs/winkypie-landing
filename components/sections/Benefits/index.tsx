import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Privacy First',
    description: 'All photos are stored locally on your device. We never upload or access your images.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Realistic AI',
    description: 'State-of-the-art AI ensures your generated photos look natural and professional.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save Money',
    description: 'Skip expensive photo shoots. Get professional results for a fraction of the cost.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save Time',
    description: 'Generate professional photos in seconds, not hours. Perfect for busy professionals.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Personal Gallery',
    description: 'All your generated photos saved in a beautiful gallery, always accessible offline.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Unlimited Creativity',
    description: 'Experiment with different poses and styles. No limits on your creativity.',
  },
]

export function Benefits() {
  const left = benefits.slice(0, 3)
  const right = benefits.slice(3)

  return (
    <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary/3 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Why WinkyPie
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Everything you need,{' '}
              <span className="gradient-text">nothing you don&apos;t</span>
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              The smarter way to create professional photos. Here&apos;s what makes us different.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-0">
          <div className="space-y-10 md:pr-12 lg:pr-16">
            {left.map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-left" delay={i * 100}>
                <div className="group flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="hidden md:block bg-linear-to-b from-transparent via-border to-transparent" />

          <div className="space-y-10 md:pl-12 lg:pl-16">
            {right.map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-right" delay={i * 100}>
                <div className="group flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
