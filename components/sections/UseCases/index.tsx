import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const platforms = [
  { name: 'Tinder', initials: 'T' },
  { name: 'Hinge', initials: 'H' },
  { name: 'Bumble', initials: 'B' },
  { name: 'Raya', initials: 'R' },
  { name: 'LinkedIn', initials: 'in' },
  { name: 'Travel', initials: '✈' },
]

export function UseCases() {
  return (
    <section className="px-4 py-8 lg:py-10 border-y border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <p className="text-center text-[11px] lg:text-[12px] uppercase tracking-[0.18em] text-white/45 font-semibold mb-5">
            Built for the apps that matter
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-12">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="inline-flex items-center gap-2 text-white/65 hover:text-white transition-colors"
              >
                <span className="w-7 h-7 rounded-md bg-white/[0.06] border border-white/12 inline-flex items-center justify-center text-[12px] font-semibold">
                  {p.initials}
                </span>
                <span className="text-[14px] lg:text-[15px] font-medium">{p.name}</span>
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
