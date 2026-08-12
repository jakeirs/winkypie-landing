import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

type Platform = {
  name: string
  icon: React.ReactNode
  accent: string
}

const platforms: Platform[] = [
  {
    name: 'Tinder',
    accent: '#fd5068',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12.7 2.2c.2-.2.5-.2.7 0 3.7 3 6.6 6.8 6.6 11.3a7.5 7.5 0 1 1-15 0c0-2.4.9-4.2 2.1-5.7.3-.3.8-.1.8.3v.5c0 1.3 1.1 2.4 2.4 2.3 1.3 0 2.3-1.1 2.3-2.4V4.4c0-.8.2-1.6.5-2.2z" />
      </svg>
    ),
  },
  {
    name: 'Hinge',
    accent: '#a855f7',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2C7 2 3 6 3 11v9a1 1 0 001 1h3a1 1 0 001-1v-9a4 4 0 118 0v9a1 1 0 001 1h3a1 1 0 001-1v-9c0-5-4-9-9-9z" />
      </svg>
    ),
  },
  {
    name: 'Bumble',
    accent: '#fbbf24',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M6 3h12l4 7-4 11H6L2 10z" />
      </svg>
    ),
  },
  {
    name: 'Raya',
    accent: '#e5e7eb',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3 6 7 1-5 5 1 8-6-3-6 3 1-8-5-5 7-1z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    accent: '#ec4899',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    accent: '#38bdf8',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 112.5 6 2.5 2.5 0 014.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.06a4.17 4.17 0 013.75-2.06c4 0 4.75 2.64 4.75 6.07V21h-4v-5.32c0-1.27-.02-2.9-1.77-2.9s-2.04 1.38-2.04 2.81V21h-4z" />
      </svg>
    ),
  },
  {
    name: 'Travel',
    accent: '#34d399',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M2.5 13.5L21 5l-2.5 15-5.5-4.5-3 3v-4.5z" />
      </svg>
    ),
  },
]

export function UseCases() {
  return (
    <section className="px-4 py-10 lg:py-14 border-y border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <p className="text-center text-[11px] lg:text-[12px] uppercase tracking-[0.18em] text-white/50 font-semibold mb-6 lg:mb-7">
            Built for the apps that matter
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-2.5">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="group inline-flex items-center gap-2 px-3 py-2 lg:px-3.5 lg:py-2 rounded-xl bg-white/[0.04] border border-white/[0.09] hover:bg-white/[0.07] hover:border-white/[0.16] transition-all duration-200"
              >
                <span
                  className="w-7 h-7 rounded-lg inline-flex items-center justify-center shrink-0 border border-white/10 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}26, ${p.accent}0a)`,
                    color: p.accent,
                  }}
                >
                  {p.icon}
                </span>
                <span className="text-[13px] lg:text-[14px] font-medium text-white/80 group-hover:text-white transition-colors">
                  {p.name}
                </span>
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
